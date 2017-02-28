scriptr.Skin =  (function() {
  var _baseUrl = "http://localhost/modelEditorAssets/"
  
  function url(url) {
    return _baseUrl + url
  }
  
  var styles = {
    vertex: {
      width: 160
    },
    layout: {
      levelDistance: 40,
      nodeDistance: 10,
      cellHeight: 50,
      maxCellWidth: 120
    },
    images: {
      delete: url('images/delete.png'),
      add: url('images/add.png'),

      menuDelete: url('images/delete-sml.png'),
      menuEdit: url('images/edit-sml.png'),
      menuText: url('images/text.gif'),
      menuDevice: url('images/device-sml.png'),
      menuZoom: url('images/zoom.gif'),
      menuZoomActual: url('images/zoomactual.gif'),

      device: url('images/device.png'),
      vehicle: url('images/vehicle.png'),
      car: url('images/car.png'),
      truck: url('images/truck.png'),

      thermostat: url('images/thermostat.png'),
      nest: url('images/nest.png')
    }
  }

  var globalStyles = function(graph) {
    // modify style for vertexes
    var style = graph.getStylesheet().getDefaultVertexStyle();
    style[mxConstants.STYLE_SHAPE] = 'label';
    style[mxConstants.STYLE_ROUNDED] = '1';
    style[mxConstants.STYLE_FONTCOLOR] = '#1d258f';
    style[mxConstants.STYLE_FONTFAMILY] = 'Verdana';
    style[mxConstants.STYLE_FONTSIZE] = '10';
    style[mxConstants.STYLE_FONTSTYLE] = '0';

    style[mxConstants.STYLE_FILLCOLOR] = '#dce8ef'
    style[mxConstants.STYLE_STROKECOLOR] = '#dce8ef'
    
    style[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_MIDDLE;
    style[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_LEFT;
    style[mxConstants.STYLE_SPACING_LEFT] = 50;
    style[mxConstants.STYLE_IMAGE] = styles.images.device;
    style[mxConstants.STYLE_IMAGE_WIDTH] = '44';
    style[mxConstants.STYLE_IMAGE_HEIGHT] = '44';
    style[mxConstants.STYLE_SPACING] = 0;
    
    // modify style for edges
    var style = graph.getStylesheet().getDefaultEdgeStyle();
    style[mxConstants.STYLE_ROUNDED] = true;
    style[mxConstants.STYLE_STROKEWIDTH] = 3;
    style[mxConstants.STYLE_EXIT_X] = 0.5; // center
    style[mxConstants.STYLE_EXIT_Y] = 1.0; // bottom
    style[mxConstants.STYLE_EXIT_PERIMETER] = 0; // disabled
    style[mxConstants.STYLE_ENTRY_X] = 0.5; // center
    style[mxConstants.STYLE_ENTRY_Y] = 0; // top
    style[mxConstants.STYLE_ENTRY_PERIMETER] = 0; // disabled

    // Disable the following for straight lines
    style[mxConstants.STYLE_EDGE] = mxEdgeStyle.TopToBottom;
    
    
    
  }
  
  
  return {
    styles: styles,
    globalStyles: globalStyles
  }
  
})()
