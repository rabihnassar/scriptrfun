
SKIN = (function() {
  var _skin = {
    base: "http://localhost/modelEditor/",
    images: {
      add: 'images/add.png',
      check: "images/overlays/check.png",
      close: 'images/close.png',
      device: 'images/iot.png',
      deviceSml: 'images/device-sml.png',
      dude3: 'images/dude3.png',
      house: "images/overlays/house.png",
      press32: 'images/press32.png',
      print: 'images/print.gif',
      print32: 'images/print32.png',
      text: "images/text.gif",
      view1132: 'images/view_1_132.png',
      zoom: 'images/zoom.gif',
      zoomActual: 'images/zoomActual.gif',
      zoomIn32: "images/zoom_in32.png",
      zoomOut32: 'images/zoom_out32.png',
    }
  }
  
  var getImage = function(name) {
    if (_skin.images[name].indexOf('http')==0) return _skin.images[name]
    return _skin.base + _skin.images[name] 
  }
  
  function setStyles(graph) {
    // Set some stylesheet options for the visual appearance of vertices
    var style = graph.getStylesheet().getDefaultVertexStyle();
    style[mxConstants.STYLE_SHAPE] = 'label';

    style[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_MIDDLE;
    style[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_LEFT;
    style[mxConstants.STYLE_SPACING_LEFT] = 60;

    style[mxConstants.STYLE_FONTCOLOR] = '#1d258f';
    style[mxConstants.STYLE_FONTFAMILY] = 'Verdana';
    style[mxConstants.STYLE_FONTSIZE] = '12';
    style[mxConstants.STYLE_FONTSTYLE] = '1';

    style[mxConstants.STYLE_SHADOW] = '0';
    style[mxConstants.STYLE_ROUNDED] = '1';
    style[mxConstants.STYLE_GLASS] = '0';

    style[mxConstants.STYLE_IMAGE] = getImage("device");
    style[mxConstants.STYLE_IMAGE_WIDTH] = '32';
    style[mxConstants.STYLE_IMAGE_HEIGHT] = '32';
    style[mxConstants.STYLE_SPACING] = 8;

    // Sets the default style for edges
    style = graph.getStylesheet().getDefaultEdgeStyle();
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
    getImage: getImage,
    setStyles: setStyles
  }
})()