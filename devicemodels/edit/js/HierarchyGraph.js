
scriptr.HierarchyGraph = function(divName, rootLabel) {
  var graph, parent, model, root
  var $ = jq2
  
  var deleteSubtreeDialog = function(cell) {
    w2confirm("Are you sure you want to delete model [<b>"+cell.value+"</b>] and its descendants?")
    .yes(function () { deleteSubtree(cell) })
    .no(function () {  })
    
    
    
    var confirm = scriptr.Utils.dialog(
      "Please confirm", 
      "Are you sure you want to delete model [<b>"+cell.value+"</b>] and its descendants?", 
      'ui-icon-alert',
      function(confirm) {
        if (confirm) deleteSubtree(cell)
      })
  }
  
  var deleteSubtree = function (cell) {
    // Gets the subtree from cell downwards
    var cells = [];
    graph.traverse(cell, true, function(vertex) {
      cells.push(vertex);
      return true;
    });

    graph.removeCells(cells);
  };

  var counters = {}
  
  function getNewModelName(cell) {
    if (!counters[cell.value]) counters[cell.value] = 0
    return cell.value+(counters[cell.value]++)
  }
  
  // Function to create the entries in the popupmenu
  var createPopupMenu = function(graph, menu, cell, evt) {
    var model = graph.getModel()

    if (cell != null) {
      if (model.isVertex(cell)) {
        menu.addItem('Add device', scriptr.Skin.styles.images.menuDevice, function() {
          add(getNewModelName(cell), cell);
        })
      }

      menu.addItem('Edit model name', scriptr.Skin.styles.images.menuText, function() {
        graph.startEditingAtCell(cell)
      })

      menu.addItem('Edit model', scriptr.Skin.styles.images.menuEdit, function() {
        _onOpenCallback(cell.value)
      })

      if (cell.id != 'treeRoot' && model.isVertex(cell)) {
        menu.addItem('Delete', scriptr.Skin.styles.images.menuDelete, function() {
          deleteSubtreeDialog(cell)
        })
      }

      menu.addSeparator();
    }

    menu.addItem('Fit', scriptr.Skin.styles.images.zoom, function() {
      graph.fit()
    })

    menu.addItem('Actual', scriptr.Skin.styles.images.zoomActual, function() {
      graph.zoomActual()
    })
  }
   
  var _addOverlays = function (cell) {
    var overlay = new mxCellOverlay(new mxImage(scriptr.Skin.styles.images.add, 18, 18), 'Add child');
    overlay.cursor = 'hand';
    overlay.align = mxConstants.ALIGN_CENTER;
    overlay.addListener(mxEvent.CLICK, mxUtils.bind(this, function(sender, evt) {
      add(getNewModelName(cell), cell);
    }));
    
    graph.addCellOverlay(cell, overlay);

    if (!(root==null)) {
      overlay = new mxCellOverlay(new mxImage(scriptr.Skin.styles.images.delete, 16, 16), 'Delete');
      overlay.cursor = 'hand';
      overlay.offset = new mxPoint(-4, 4);
      overlay.align = mxConstants.ALIGN_RIGHT;
      overlay.verticalAlign = mxConstants.ALIGN_TOP;
      overlay.addListener(mxEvent.CLICK, mxUtils.bind(this, function(sender, evt) {
        deleteSubtreeDialog(cell);
      }));

      graph.addCellOverlay(cell, overlay);
    }
  }

  var add = function(label, ancestor, image) {
	model.beginUpdate();
    try {
      // create Vertex and Link
      if (!image) image = scriptr.Skin.styles.images.device
      var style = 'image='+image
      var vertex = graph.insertVertex(parent, null, label, 0, 10, 80, 30, style)
      
      var edge = graph.insertEdge(parent, null, '', ancestor, vertex)
	  _addOverlays(vertex, !(root==null))

      // set skin
      var geometry = model.getGeometry(vertex)
      geometry.width = scriptr.Skin.styles.vertex.width
    } finally {
      model.endUpdate()
      if (!root) root = vertex
      return vertex
    }
  }

  _constructor = function (divName) {
    var container = $(divName)[0]

    // Disables the built-in context menu
    mxEvent.disableContextMenu(container);

    // Creates the graph inside the given container
    graph = new mxGraph(container);
	model = graph.getModel();


    // Gets the default parent for inserting new cells. This
    // is normally the first child of the root (ie. layer 0).
    parent = graph.getDefaultParent();

    //
    // Configure panning and selection behavior
    //

    // Enables rubberband selection
    //  new mxRubberband(graph);
    
    // Enable panning
    graph.setPanning(true)
    graph.panningHandler.useLeftButtonForPanning = true
    
    scriptr.Skin.globalStyles(graph)
    
    // Stops editing on enter or escape keypress
    var keyHandler = new mxKeyHandler(graph);

    // Enables automatic layout on the graph and installs
    // a tree layout for all groups who's children are
    // being changed, added or removed.
    var layout = new mxCompactTreeLayout(graph, false);
    layout.useBoundingBox = false;
    layout.edgeRouting = false;
    layout.levelDistance = scriptr.Skin.styles.layout.levelDistance;
    layout.nodeDistance = scriptr.Skin.styles.layout.nodeDistance;

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
    }

    // Installs a popupmenu handler using local function (see below).
    graph.popupMenuHandler.factoryMethod = function(menu, cell, evt) {
      return createPopupMenu(graph, menu, cell, evt);
    }
    
    graph.addListener(mxEvent.DOUBLE_CLICK, function(sender, evt) {
      var cell = evt.getProperty('cell')
      _onOpenCallback(cell.value)
      _onUnSelectCallback()
      evt.consume();
    })    
    
    graph.addListener(mxEvent.CLICK, function(sender, evt) {
      var cell = evt.getProperty('cell')
      if (cell) {
        _onSelectCallback(cell.value)
        evt.consume();
      } else _onUnSelectCallback()
    })    
    
    graph.createHandler = function(state) {
      if (state != null && this.model.isVertex(state.cell)) {
        //return new mxVertexToolHandler(state);
      }
      return mxGraph.prototype.createHandler.apply(this, arguments)
    }
  }
  
  _constructor(divName)
   
  var _onOpenCallback
  var onOpen = function(callback) {
    _onOpenCallback = callback
  }

  var _onSelectCallback
  var onSelect = function(callback) {
    _onSelectCallback = callback
  }
  
  var _onUnSelectCallback
  var onUnSelect = function(callback) {
    _onUnSelectCallback = callback
  }
  
  return {
    graph: graph,
    getRoot: function() {return root},
    getModel: function() {return model},
    add: add,
    deleteSubtree: deleteSubtree,
    onOpen: onOpen,
    onSelect: onSelect,
    onUnSelect: onUnSelect
  }
} 