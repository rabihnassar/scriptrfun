function Graph($, document, selector, dimensions) {
  var deviceCounter = 0
  var rootVertex, graph
  
  var getNewDeviceName = function() {
    return "Device" + deviceCounter++ 
  }
  
  var addOverlays = function (graph, cell, addDeleteIcon) {
    var overlay = new mxCellOverlay(new mxImage(SKIN.getImage("add"), 18, 18), 'Add child');
    overlay.cursor = 'hand';
    overlay.align = mxConstants.ALIGN_CENTER;
    overlay.addListener(mxEvent.CLICK, mxUtils.bind(this, function(sender, evt) {
      addChild(graph, cell);
    }));

    graph.addCellOverlay(cell, overlay);

    if (addDeleteIcon) {
      overlay = new mxCellOverlay(new mxImage(SKIN.getImage("close"), 16, 16), 'Delete');
      overlay.cursor = 'hand';
      overlay.offset = new mxPoint(-4, 4);
      overlay.align = mxConstants.ALIGN_RIGHT;
      overlay.verticalAlign = mxConstants.ALIGN_TOP;
      overlay.addListener(mxEvent.CLICK, mxUtils.bind(this, function(sender, evt)
                                                      {
        deleteSubtree(graph, cell);
      }));

      graph.addCellOverlay(cell, overlay);
    }
  }

  var addChild = function(graph, cell) {
    var model = graph.getModel();
    var parent = graph.getDefaultParent();
    var vertex;

    model.beginUpdate();
    try {
      vertex = graph.insertVertex(parent, null, getNewDeviceName());
      var geometry = model.getGeometry(vertex);
      // Updates the geometry of the vertex with the
      // preferred size computed in the graph
      var size = graph.getPreferredSizeForCell(vertex);
      geometry.width = size.width;
      geometry.height = size.height;

      // Adds the edge between the existing cell
      // and the new vertex and executes the
      // automatic layout on the parent
      var edge = graph.insertEdge(parent, null, '', cell, vertex);

      // Configures the edge label "in-place" to reside
      // at the end of the edge (x = 1) and with an offset
      // of 20 pixels in negative, vertical direction.
      edge.geometry.x = 1;
      edge.geometry.y = 0;
      edge.geometry.offset = new mxPoint(0, -20);

      addOverlays(graph, vertex, true);
    } finally {
      model.endUpdate();
    }

    return vertex;
  }      

  // Function to create the entries in the popupmenu
  var createPopupMenu = function(graph, menu, cell, evt) {
    var model = graph.getModel()

    if (cell != null) {
      if (model.isVertex(cell)) {
        menu.addItem('Add device', SKIN.getImage("deviceSml"), function() {
          addChild(graph, cell)
        })
      }

      menu.addItem('Edit model name', SKIN.getImage('text'), function() {
        graph.startEditingAtCell(cell)
      })

      if (cell.id != 'treeRoot' && model.isVertex(cell)) {
        menu.addItem('Delete', SKIN.getImage('delete'), function() {
          deleteSubtree(graph, cell)
        })
      }

      menu.addSeparator();
    }

    menu.addItem('Fit', SKIN.getImage("zoom"), function() {
      graph.fit()
    })

    menu.addItem('Actual', SKIN.getImage("zoomActual"), function() {
      graph.zoomActual()
    })
  }
  
  var deleteSubtree = function (graph, cell) {
    // Gets the subtree from cell downwards
    var cells = [];
    graph.traverse(cell, true, function(vertex) {
      cells.push(vertex);
      return true;
    });

    graph.removeCells(cells);
  };
  
  create = function(document, selector, dimensions) {
    // Workaround for Internet Explorer ignoring certain styles
    var container = document.createElement('div');

    with (container.style) {
      //position = 'absolute';
      overflow = 'hidden';
      left = '0px';
      top = '0px';
      right = '0px';
      bottom = '0px';
    }

    mxEvent.disableContextMenu(container);

    $(selector).append(container);

    // Creates the graph inside the given container
    graph = new mxGraph(container);

    // Enables automatic sizing for vertices after editing and
    // panning by using the left mouse button.
    graph.setCellsMovable(false);
    graph.setAutoSizeCells(true);
    graph.setPanning(true);
    graph.centerZoom = false;
    graph.panningHandler.useLeftButtonForPanning = true;

    // Displays a popupmenu when the user clicks
    // on a cell (using the left mouse button) but
    // do not select the cell when the popup menu
    // is displayed
    graph.panningHandler.popupMenuHandler = false;

    // Creates the outline (navigator, overview) for moving
    // around the graph in the top, right corner of the window.
    //				var outln = new mxOutline(graph, outline);

    // Disables tooltips on touch devices
    graph.setTooltips(!mxClient.IS_TOUCH);

    SKIN.setStyles(graph)

    // Stops editing on enter or escape keypress
    var keyHandler = new mxKeyHandler(graph);

    // Enables automatic layout on the graph and installs
    // a tree layout for all groups who's children are
    // being changed, added or removed.
    var layout = new mxCompactTreeLayout(graph, false);
    layout.useBoundingBox = false;
    layout.edgeRouting = false;
    layout.levelDistance = dimensions.levelDistance;
    layout.nodeDistance = dimensions.nodeDistance;

    // Allows the layout to move cells even though cells
    // aren't movable in the graph
    layout.isVertexMovable = function(cell) {
      return true;
    };

    var layoutMgr = new mxLayoutManager(graph);

    layoutMgr.getLayout = function(cell) {
      if (cell.getChildCount() > 0) {
        return layout;
      }
    };

    // Installs a popupmenu handler using local function (see below).
    graph.popupMenuHandler.factoryMethod = function(menu, cell, evt) {
      return createPopupMenu(graph, menu, cell, evt);
    };

    // Fix for wrong preferred size
    var oldGetPreferredSizeForCell = graph.getPreferredSizeForCell;
    graph.getPreferredSizeForCell = function(cell) {
      var result = oldGetPreferredSizeForCell.apply(this, arguments);
      if (result != null) {
        result.height = dimensions.cellHeight
        result.width = Math.max(dimensions.maxCellWidth, result.width);
      }
      return result;
    };

    // Sets the maximum text scale to 1
    graph.cellRenderer.getTextScale = function(state) {
      return Math.min(1, state.view.scale);
    };

    // Dynamically adds text to the label as we zoom in
    // (without affecting the preferred size for new cells)
    graph.cellRenderer.getLabelValue = function(state) {
      var result = state.cell.value;
      return result;
    };

    // Gets the default parent for inserting new cells. This
    // is normally the first child of the root (ie. layer 0).
    var parent = graph.getDefaultParent();

    // Adds the root vertex of the tree
    graph.getModel().beginUpdate();
    try {
      var w = graph.container.offsetWidth;
      //      var v1 = graph.insertVertex(parent, 'treeRoot', 'Device', w/2 - 30, 20, 140, 60, 'image='+SKIN.getImage("device"));
      var v1 = graph.insertVertex(parent, 'treeRoot', 'Device', w/2-50 /* left */, 10 /* top */, 0, 0, 'image='+SKIN.getImage("device"));
      rootVertex = v1
      graph.updateCellSize(v1);
      addOverlays(graph, v1, false);
    } finally {
      // Updates the display
      graph.getModel().endUpdate();
    }

  }

  function add(cell) {
    return addChild(graph, cell)
  }
  
  function getRoot() {
    return rootVertex
  }
  
  create(document, selector, dimensions)

  return {
    getRoot: getRoot,
    add: add
  }
}