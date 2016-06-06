/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"/*!jQuery FA multi buttonSCRIPTR_COMMENT\n/**\n* Modern toggle, push button, dimmer or just a signal indicator\n*\n* Version: 1.1.1\n* Requires: jQuery v1.7+\n*\n* Copyright (c) 2015 Mario Stephan\n* Under MIT License (http://www.opensource.org/licenses/mit-license.php)\n*\n* Thanks to phoxoey\nSCRIPTR_COMMENT\n(function ( $ ) {\n\t\t\n$.fn.famultibutton = function(pOptions) {\n\t\t\n\tif (this.length > 1){\n\t\tthis.each(function() { $(this).famultibutton(pOptions) });\n\t\treturn this;\n\t}\n\t\n\t// private variables;\n\tvar elem = this;\n\tvar state = false;\n\t// private for dimmer\n\tvar canvasScale;\n\tvar objTimer;\n\tvar isRunning=false;\n\tvar resStepValues = [0, 10, 40, 80, 120, 140, 150, 160, 180, 200, 240, 260, 280, 300, 320, 420, 430, 440, 450, 460, 470];\n\tvar dragy = 0;\n\tvar currVal=0;\n\tvar diff = 0;\n\tvar baseTop = 0;\n\tvar posy = 0;\n\tvar isDrag = false;\n\tvar isDown = false; \n\t\n\t// setup options\n\tvar defaultOptions = {\n\t\tbackgroundIcon: 'fa-circle',\n\t\tclasses: ['fa-2x'],\n\t\ticon: 'fa-power-off',\n\t\toffColor: '#2A2A2A',\n\t\toffBackgroundColor: '#505050',\n\t\tonColor: '#2A2A2A',\n\t\tonBackgroundColor: '#aa6900',\n\t\tmode: 'toggle',  //toggle, push, signal, dimmer\n\t\ttoggleOn: null,\n\t\ttoggleOff: null,\n\t\tvalueChanged: null\n\t};\n\t\n\tvar options = $.extend({}, defaultOptions, pOptions);\n\t\n\t// private functions;\n\tvar intialize = function() {\n\n\t\toptions = $.extend({}, options, elem.data());\n\t\t\n\t\telem.addClass('fa-stack');\n\t\t\n\t\tjQuery('<i/>', {\n\t\t\tid: 'bg',\n\t\t\tclass: 'fa fa-stack-2x'\n\t\t}).addClass(options['backgroundIcon'])\n\t\t.appendTo(elem);\n\n\t\tjQuery('<i/>', {\n\t\t\tid: 'fg',\n\t\t\tclass: 'fa fa-stack-1x'\n\t\t}).addClass(options['icon']).appendTo(elem);\n\t\t\n\t\tif(options['classes'] && options['classes'].length > 0){\n\t\t   for(var i=0;i<options['classes'].length;i++){\n\t\t\t\telem.addClass(options['classes'][i]);\n\t\t   }\n\t\t}\n\n\t\tsetOff();\n\n\t\tif (options['mode'] == 'dimmer'){\n\t\t\t$('<canvas>').attr({\n\t\t\t\tid: 'scale'\n\t\t\t}).appendTo(elem);\n\t\t\t\n\t\t\tcanvasScale = elem.find('canvas#scale');\n\t\t\t\tcanvasScale.css({\n\t\t\t\t'height': elem.innerHeight()+4,\n\t\t\t});\n\t\t\tbaseTop = parseInt(canvasScale.offset().top) - parseInt(elem.offset().top);\n\t\t\tdrawScale();\n\t\t\tmoveScale();\n\t\t}\t\t\n        elem.data(\"famultibutton\", elem);\n\nreturn elem;\n};\n\n\n\n\tfunction setOn() {\n\n\t\t\tstate = true;\n\t\t\t\n\t\t  \telem.children().first().css( \"color\", options['onBackgroundColor'] );\n\t\t  \telem.children().last().css( \"color\", options['onColor'] );\n\t};\n\t\t\n\tfunction setOff() {\n\t\t\t\n\t\t\tstate = false;\n\n\t\t\telem.children().first().css( \"color\", options['offBackgroundColor'] );\n\t\t\telem.children().last().css( \"color\", options['offColor'] );\n\t};\n\t\n\tfunction fadeOff() {\n\t\t\t\n\t\t\tif(state){\n\t\t\t\n\t\t\t\tstate = false;\n\t\n\t\t\t\t$( '<div />' ).animate({ 'width' : 100 }, {\n\t\t\t\t\tduration : 700,\n\t\t\t\t\teasing : 'swing',\n\t\t\t\t\t// Fade the colors in the step function\n\t\t\t\t\tstep : function( now, fx ) {\n\t\t\t\t\tvar completion = ( now - fx.start ) / ( fx.end - fx.start );\n\t\t\t\t\telem.children().first().css( 'color', getGradientColor(\n\t\t\t\t\t\toptions['onBackgroundColor'],\n\t\t\t\t\t\toptions['offBackgroundColor'],\n\t\t\t\t\t\tcompletion));\n\t\t\t\t\telem.children().last().css( 'color', getGradientColor(\n\t\t\t\t\t\toptions['onColor'],\n\t\t\t\t\t\toptions['offColor'],\n\t\t\t\t\t\tcompletion));\n\t\t\t\t\t}, \n\t\t\t\t});\n\t\t\t}\n\t};\n\t\n\t// helper function for color fade out\n\tgetGradientColor = function(start_color, end_color, percent) {\n\t   // strip the leading # if it's there\n\t   start_color = start_color.replace(/^\\s*#|\\s*$/g, '');\n\t   end_color = end_color.replace(/^\\s*#|\\s*$/g, '');\n\t\n\t   // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`\n\t   if(start_color.length == 3){\n\t\t start_color = start_color.replace(/(.)/g, '$1$1');\n\t   }\n\t\n\t   if(end_color.length == 3){\n\t\t end_color = end_color.replace(/(.)/g, '$1$1');\n\t   }\n\t\n\t   // get colors\n\t   var start_red = parseInt(start_color.substr(0, 2), 16),\n\t\t   start_green = parseInt(start_color.substr(2, 2), 16),\n\t\t   start_blue = parseInt(start_color.substr(4, 2), 16);\n\t\n\t   var end_red = parseInt(end_color.substr(0, 2), 16),\n\t\t   end_green = parseInt(end_color.substr(2, 2), 16),\n\t\t   end_blue = parseInt(end_color.substr(4, 2), 16);\n\t\n\t   // calculate new color\n\t   var diff_red = end_red - start_red;\n\t   var diff_green = end_green - start_green;\n\t   var diff_blue = end_blue - start_blue;\n\t\n\t   diff_red = ( (diff_red * percent) + start_red ).toString(16).split('.')[0];\n\t   diff_green = ( (diff_green * percent) + start_green ).toString(16).split('.')[0];\n\t   diff_blue = ( (diff_blue * percent) + start_blue ).toString(16).split('.')[0];\n\t\n\t   // ensure 2 digits by color\n\t   if( diff_red.length == 1 )\n\t\t diff_red = '0' + diff_red\n\t\n\t   if( diff_green.length == 1 )\n\t\t diff_green = '0' + diff_green\n\t\n\t   if( diff_blue.length == 1 )\n\t\t diff_blue = '0' + diff_blue\n\t\n\t   return '#' + diff_red + diff_green + diff_blue;\n\t };\n\n\nfunction tickTimer() {\n\tclearTimeout(objTimer);\n\tcurrVal = (diff > 0) ? currVal-=1 : currVal+=1;\n\n    if ( currVal>100) currVal=100;\n    if ( currVal<0) currVal=0;\n    \n    drawScale();\n    var d = (resStepValues[Math.abs(diff)]);\n    objTimer= setTimeout(function () {tickTimer()}, 500-d);\n }\n\nfunction drawScale() {\n\n\tvar canvas = canvasScale[0];\n\tcanvas.height=elem.innerHeight();\n\tcanvas.width=elem.innerWidth();\n\t\n\tif (canvas.getContext){\n\t \n\t\tvar context = canvas.getContext('2d');\n\t\tcontext.strokeStyle = options['offBackgroundColor'];\n\t\tvar valPosition = canvas.height-Math.round(canvas.height * currVal/100);\n\t\t\n\t\tfor (var i=0;i<canvas.height;i+=4){\n\t\t\tcontext.lineWidth = 1;\n\t\t\tcontext.beginPath();\n\t\t\tcontext.moveTo(5,i);\n\t\t\tcontext.lineTo(25,i);\n\t\t\tcontext.stroke();\n\t\t}\n\t\n\t\tcontext.strokeStyle = (state)?options['onBackgroundColor']:\n\t\t\t\t\t\t\t\tgetGradientColor(options['offBackgroundColor'],'#ffffff',0.4);\n\t\tcontext.lineWidth = 3;\n\t\tcontext.beginPath();\n\t\tcontext.moveTo(5,valPosition);\n\t\tcontext.lineTo(25,valPosition);\n\t\tcontext.stroke();\n\t   \n\t\tcontext.fillStyle = getGradientColor(options['offBackgroundColor'],'#ffffff',0.4);\n\t\tcontext.font = \"10px sans-serif\";\n\t\tcontext.fillText(currVal, 30, canvas.height);\n\t\t \n\t  }\n}\n\nfunction moveScale() {\n\n\tcanvasScale.css({\n\t\t\tposition: 'absolute',\n\t\t\t'z-index': -1,\n\t\t});\n\t\n\tif (isDrag){\n\t\tcanvasScale.animate({\n\t\t\tleft:  -elem.innerWidth()*.6 +'px',\n\t\t});\n\t}\n\telse {\n\t\t\tcanvasScale.animate({\n\t\t\tleft: elem.innerWidth()/5 +'px',\n\t\t\ttop: baseTop\n\t\t});\n\t}\t\n\t\n}\n\n\n\tif (options['mode'] == 'push'){ \n\t\tvar clickEventType=((document.ontouchstart!==null)?'mousedown':'touchstart');\n\t\tvar releaseEventType=((document.ontouchend!==null)?'mouseup':'touchend');\n\t\tvar leaveEventType=((document.ontouchleave!==null)?'mouseout':'touchleave');\n\t\tthis.bind(clickEventType, function(e) {\n\t\n\t\t\tsetOn(); \n\t\t\t\n\t\t\tif(typeof options['toggleOn'] === 'function'){\n\t\t\t\toptions['toggleOn'].call(this);\n\t\t\t}\n            //e.preventDefault();\n\t\t});\n\t\tthis.bind(releaseEventType, function(e) {\n\t\t\n\t\t\tfadeOff(); \n            //e.preventDefault();\n\t\t});\n\t\tthis.bind(leaveEventType, function(e) {\n\t\t\n\t\t\tfadeOff(); \n            //e.preventDefault();\n\t\t});\n\t}\n\telse if (options['mode'] == 'toggle'){ \n\t\tvar clickEventType=((document.ontouchstart!==null)?'click':'touchstart');\n\t\tthis.bind(clickEventType, function(e) {\n\n\t\t\t\tif(state){\n\t\t\t\t\n\t\t\t\t\tsetOff();\t\n\t\t\t\t\tif(typeof options['toggleOff'] === 'function'){\n\t\t\t\t\t\toptions['toggleOff'].call(this);\n\t\t\t\t\t}\n\t\t\t\t}else{\n\t\t\t\t\n\t\t\t\t\tsetOn(); \n\t\t\t\t\tif(typeof options['toggleOn'] === 'function'){\n\t\t\t\t\t\toptions['toggleOn'].call(this);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\te.preventDefault();\n\t\t});\n\t}\n\telse if (options['mode'] == 'dimmer'){ \n\t\tvar clickEventType=((document.ontouchstart!==null)?'mousedown':'touchstart');\n\t\tvar moveEventType=((document.ontouchmove!==null)?'mousemove':'touchmove');\n\t\tvar releaseEventType=((document.ontouchend!==null)?'mouseup':'touchend');\n\t\tvar leaveEventType=((document.ontouchleave!==null)?'mouseout':'touchleave');\n\t\t\n\t\tthis.bind(clickEventType, function(e) {\n\n\t\t\tvar event = e.originalEvent;\n\t\t\tdragy =  event.touches ? event.touches[0].clientY :e.pageY;\n\t\t\tdiff = 0;\n\t\t\tisDown = true;\n\n\t\t\te.preventDefault();\n\t\t});\n\t\tthis.bind(leaveEventType, function(e) {\n\t\n\t\t\tif (isDrag){\n\t\t\t\tisDrag = false;\n\t\t\t\telem.animate({ top: 0 });\n\t\t\t\tclearInterval(objTimer);\n\t\t\t\tisRunning=false;\n\t\t\t\tmoveScale();\n\t\t\t}\n\t\t\tisDown = false;\n\t\t\te.preventDefault();\n\t\t});\n\t\tthis.bind(releaseEventType, function(e) {\n\t\t\t\n\t\t\tif (isDrag){\n\t\t\t\tisDrag = false;\n\t\t\t\telem.animate({ top: 0 });\n\t\t\t\tclearTimeout(objTimer);\n\t\t\t\tisRunning=false;\n\t\t\t\tif(typeof options['valueChanged'] === 'function'){\n\t\t\t\t\toptions['valueChanged'].call(this,currVal);\n\t\t\t\t}\n\t\t\t}else {\n\t\t\t\tif(state){\n\t\t\t\t\n\t\t\t\t\tsetOff();\t\n\t\t\t\t\tif(typeof options['toggleOff'] === 'function'){\n\t\t\t\t\t\toptions['toggleOff'].call(this);\n\t\t\t\t\t}\n\t\t\t\t}else{\n\t\t\t\t\n\t\t\t\t\tsetOn(); \n\t\t\t\t\tif(typeof options['toggleOn'] === 'function'){\n\t\t\t\t\t\toptions['toggleOn'].call(this);\n\t\t\t\t\t}\n\t\t\t\t}}\n\t\t\t\tisDrag = false;\n\t\t\t\tisDown = false;\n\t\t\t\tmoveScale();\n\t\t\t\tdrawScale();\n\t\t\te.preventDefault();\n\t\t});\n\t\tthis.bind(moveEventType, function(e) {\n\t\t\t\n\t\t\tif (isDown)\n\t\t\t\tisDrag = true;\n\t\n\t\t\tvar event = e.originalEvent;\n\t\t  \tposy =  event.touches ? event.touches[0].clientY :e.pageY;\n\n\t\t\tdiff = posy - dragy;\n\t\t\t\n\t\t\tif (diff>20) diff=20;\n\t\t\tif (diff<-20) diff=-20;\n\t\t\tif (isDrag){\n\t\t\tthis.style.top = diff + \"px\";\n\t\t\tif (!isRunning){\n\t\t\t\tmoveScale();\n\t\t\t\ttickTimer();\n\t\t\t\tisRunning=true;\n\t\t\t}\n\t\t\t\n\t\t\tcanvasScale.css({\n\t\t\t\t\ttop: -diff+'px',\n\t\t\t\t});\n\t\t\t}\n\t\t\te.preventDefault();\n\t\t});\n\t}\n\t// public functions;\n\tthis.setOn = function() {\n\t\tsetOn();\t\n\t};\n\tthis.setOff = function() {\n\t\tsetOff();\t\n\t};\n\tthis.getState = function() {\n\t\treturn state;\n\t};\n\tthis.getValue= function() {\n\t\treturn currVal;\n\t};\n    this.setValue= function(val) {\n        currVal=val;\n        drawScale();\n    };\nreturn intialize();\n}\n})( jQuery );\n\n\n\t\t\t\t\n\n\n\n\t\t\t\n\n\t\t\t"},"scriptrdata":[]}}*#*#*/
var content= '/*!jQuery FA multi button*/\n\
/**\n\
* Modern toggle, push button, dimmer or just a signal indicator\n\
*\n\
* Version: 1.1.1\n\
* Requires: jQuery v1.7+\n\
*\n\
* Copyright (c) 2015 Mario Stephan\n\
* Under MIT License (http://www.opensource.org/licenses/mit-license.php)\n\
*\n\
* Thanks to phoxoey\n\
*/\n\
(function ( $ ) {\n\
		\n\
$.fn.famultibutton = function(pOptions) {\n\
		\n\
	if (this.length > 1){\n\
		this.each(function() { $(this).famultibutton(pOptions) });\n\
		return this;\n\
	}\n\
	\n\
	// private variables;\n\
	var elem = this;\n\
	var state = false;\n\
	// private for dimmer\n\
	var canvasScale;\n\
	var objTimer;\n\
	var isRunning=false;\n\
	var resStepValues = [0, 10, 40, 80, 120, 140, 150, 160, 180, 200, 240, 260, 280, 300, 320, 420, 430, 440, 450, 460, 470];\n\
	var dragy = 0;\n\
	var currVal=0;\n\
	var diff = 0;\n\
	var baseTop = 0;\n\
	var posy = 0;\n\
	var isDrag = false;\n\
	var isDown = false; \n\
	\n\
	// setup options\n\
	var defaultOptions = {\n\
		backgroundIcon: \'fa-circle\',\n\
		classes: [\'fa-2x\'],\n\
		icon: \'fa-power-off\',\n\
		offColor: \'#2A2A2A\',\n\
		offBackgroundColor: \'#505050\',\n\
		onColor: \'#2A2A2A\',\n\
		onBackgroundColor: \'#aa6900\',\n\
		mode: \'toggle\',  //toggle, push, signal, dimmer\n\
		toggleOn: null,\n\
		toggleOff: null,\n\
		valueChanged: null\n\
	};\n\
	\n\
	var options = $.extend({}, defaultOptions, pOptions);\n\
	\n\
	// private functions;\n\
	var intialize = function() {\n\
\n\
		options = $.extend({}, options, elem.data());\n\
		\n\
		elem.addClass(\'fa-stack\');\n\
		\n\
		jQuery(\'<i/>\', {\n\
			id: \'bg\',\n\
			class: \'fa fa-stack-2x\'\n\
		}).addClass(options[\'backgroundIcon\'])\n\
		.appendTo(elem);\n\
\n\
		jQuery(\'<i/>\', {\n\
			id: \'fg\',\n\
			class: \'fa fa-stack-1x\'\n\
		}).addClass(options[\'icon\']).appendTo(elem);\n\
		\n\
		if(options[\'classes\'] && options[\'classes\'].length > 0){\n\
		   for(var i=0;i<options[\'classes\'].length;i++){\n\
				elem.addClass(options[\'classes\'][i]);\n\
		   }\n\
		}\n\
\n\
		setOff();\n\
\n\
		if (options[\'mode\'] == \'dimmer\'){\n\
			$(\'<canvas>\').attr({\n\
				id: \'scale\'\n\
			}).appendTo(elem);\n\
			\n\
			canvasScale = elem.find(\'canvas#scale\');\n\
				canvasScale.css({\n\
				\'height\': elem.innerHeight()+4,\n\
			});\n\
			baseTop = parseInt(canvasScale.offset().top) - parseInt(elem.offset().top);\n\
			drawScale();\n\
			moveScale();\n\
		}		\n\
        elem.data(\"famultibutton\", elem);\n\
\n\
return elem;\n\
};\n\
\n\
\n\
\n\
	function setOn() {\n\
\n\
			state = true;\n\
			\n\
		  	elem.children().first().css( \"color\", options[\'onBackgroundColor\'] );\n\
		  	elem.children().last().css( \"color\", options[\'onColor\'] );\n\
	};\n\
		\n\
	function setOff() {\n\
			\n\
			state = false;\n\
\n\
			elem.children().first().css( \"color\", options[\'offBackgroundColor\'] );\n\
			elem.children().last().css( \"color\", options[\'offColor\'] );\n\
	};\n\
	\n\
	function fadeOff() {\n\
			\n\
			if(state){\n\
			\n\
				state = false;\n\
	\n\
				$( \'<div />\' ).animate({ \'width\' : 100 }, {\n\
					duration : 700,\n\
					easing : \'swing\',\n\
					// Fade the colors in the step function\n\
					step : function( now, fx ) {\n\
					var completion = ( now - fx.start ) / ( fx.end - fx.start );\n\
					elem.children().first().css( \'color\', getGradientColor(\n\
						options[\'onBackgroundColor\'],\n\
						options[\'offBackgroundColor\'],\n\
						completion));\n\
					elem.children().last().css( \'color\', getGradientColor(\n\
						options[\'onColor\'],\n\
						options[\'offColor\'],\n\
						completion));\n\
					}, \n\
				});\n\
			}\n\
	};\n\
	\n\
	// helper function for color fade out\n\
	getGradientColor = function(start_color, end_color, percent) {\n\
	   // strip the leading # if it\'s there\n\
	   start_color = start_color.replace(/^\\s*#|\\s*$/g, \'\');\n\
	   end_color = end_color.replace(/^\\s*#|\\s*$/g, \'\');\n\
	\n\
	   // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`\n\
	   if(start_color.length == 3){\n\
		 start_color = start_color.replace(/(.)/g, \'$1$1\');\n\
	   }\n\
	\n\
	   if(end_color.length == 3){\n\
		 end_color = end_color.replace(/(.)/g, \'$1$1\');\n\
	   }\n\
	\n\
	   // get colors\n\
	   var start_red = parseInt(start_color.substr(0, 2), 16),\n\
		   start_green = parseInt(start_color.substr(2, 2), 16),\n\
		   start_blue = parseInt(start_color.substr(4, 2), 16);\n\
	\n\
	   var end_red = parseInt(end_color.substr(0, 2), 16),\n\
		   end_green = parseInt(end_color.substr(2, 2), 16),\n\
		   end_blue = parseInt(end_color.substr(4, 2), 16);\n\
	\n\
	   // calculate new color\n\
	   var diff_red = end_red - start_red;\n\
	   var diff_green = end_green - start_green;\n\
	   var diff_blue = end_blue - start_blue;\n\
	\n\
	   diff_red = ( (diff_red * percent) + start_red ).toString(16).split(\'.\')[0];\n\
	   diff_green = ( (diff_green * percent) + start_green ).toString(16).split(\'.\')[0];\n\
	   diff_blue = ( (diff_blue * percent) + start_blue ).toString(16).split(\'.\')[0];\n\
	\n\
	   // ensure 2 digits by color\n\
	   if( diff_red.length == 1 )\n\
		 diff_red = \'0\' + diff_red\n\
	\n\
	   if( diff_green.length == 1 )\n\
		 diff_green = \'0\' + diff_green\n\
	\n\
	   if( diff_blue.length == 1 )\n\
		 diff_blue = \'0\' + diff_blue\n\
	\n\
	   return \'#\' + diff_red + diff_green + diff_blue;\n\
	 };\n\
\n\
\n\
function tickTimer() {\n\
	clearTimeout(objTimer);\n\
	currVal = (diff > 0) ? currVal-=1 : currVal+=1;\n\
\n\
    if ( currVal>100) currVal=100;\n\
    if ( currVal<0) currVal=0;\n\
    \n\
    drawScale();\n\
    var d = (resStepValues[Math.abs(diff)]);\n\
    objTimer= setTimeout(function () {tickTimer()}, 500-d);\n\
 }\n\
\n\
function drawScale() {\n\
\n\
	var canvas = canvasScale[0];\n\
	canvas.height=elem.innerHeight();\n\
	canvas.width=elem.innerWidth();\n\
	\n\
	if (canvas.getContext){\n\
	 \n\
		var context = canvas.getContext(\'2d\');\n\
		context.strokeStyle = options[\'offBackgroundColor\'];\n\
		var valPosition = canvas.height-Math.round(canvas.height * currVal/100);\n\
		\n\
		for (var i=0;i<canvas.height;i+=4){\n\
			context.lineWidth = 1;\n\
			context.beginPath();\n\
			context.moveTo(5,i);\n\
			context.lineTo(25,i);\n\
			context.stroke();\n\
		}\n\
	\n\
		context.strokeStyle = (state)?options[\'onBackgroundColor\']:\n\
								getGradientColor(options[\'offBackgroundColor\'],\'#ffffff\',0.4);\n\
		context.lineWidth = 3;\n\
		context.beginPath();\n\
		context.moveTo(5,valPosition);\n\
		context.lineTo(25,valPosition);\n\
		context.stroke();\n\
	   \n\
		context.fillStyle = getGradientColor(options[\'offBackgroundColor\'],\'#ffffff\',0.4);\n\
		context.font = \"10px sans-serif\";\n\
		context.fillText(currVal, 30, canvas.height);\n\
		 \n\
	  }\n\
}\n\
\n\
function moveScale() {\n\
\n\
	canvasScale.css({\n\
			position: \'absolute\',\n\
			\'z-index\': -1,\n\
		});\n\
	\n\
	if (isDrag){\n\
		canvasScale.animate({\n\
			left:  -elem.innerWidth()*.6 +\'px\',\n\
		});\n\
	}\n\
	else {\n\
			canvasScale.animate({\n\
			left: elem.innerWidth()/5 +\'px\',\n\
			top: baseTop\n\
		});\n\
	}	\n\
	\n\
}\n\
\n\
\n\
	if (options[\'mode\'] == \'push\'){ \n\
		var clickEventType=((document.ontouchstart!==null)?\'mousedown\':\'touchstart\');\n\
		var releaseEventType=((document.ontouchend!==null)?\'mouseup\':\'touchend\');\n\
		var leaveEventType=((document.ontouchleave!==null)?\'mouseout\':\'touchleave\');\n\
		this.bind(clickEventType, function(e) {\n\
	\n\
			setOn(); \n\
			\n\
			if(typeof options[\'toggleOn\'] === \'function\'){\n\
				options[\'toggleOn\'].call(this);\n\
			}\n\
            //e.preventDefault();\n\
		});\n\
		this.bind(releaseEventType, function(e) {\n\
		\n\
			fadeOff(); \n\
            //e.preventDefault();\n\
		});\n\
		this.bind(leaveEventType, function(e) {\n\
		\n\
			fadeOff(); \n\
            //e.preventDefault();\n\
		});\n\
	}\n\
	else if (options[\'mode\'] == \'toggle\'){ \n\
		var clickEventType=((document.ontouchstart!==null)?\'click\':\'touchstart\');\n\
		this.bind(clickEventType, function(e) {\n\
\n\
				if(state){\n\
				\n\
					setOff();	\n\
					if(typeof options[\'toggleOff\'] === \'function\'){\n\
						options[\'toggleOff\'].call(this);\n\
					}\n\
				}else{\n\
				\n\
					setOn(); \n\
					if(typeof options[\'toggleOn\'] === \'function\'){\n\
						options[\'toggleOn\'].call(this);\n\
					}\n\
				}\n\
				e.preventDefault();\n\
		});\n\
	}\n\
	else if (options[\'mode\'] == \'dimmer\'){ \n\
		var clickEventType=((document.ontouchstart!==null)?\'mousedown\':\'touchstart\');\n\
		var moveEventType=((document.ontouchmove!==null)?\'mousemove\':\'touchmove\');\n\
		var releaseEventType=((document.ontouchend!==null)?\'mouseup\':\'touchend\');\n\
		var leaveEventType=((document.ontouchleave!==null)?\'mouseout\':\'touchleave\');\n\
		\n\
		this.bind(clickEventType, function(e) {\n\
\n\
			var event = e.originalEvent;\n\
			dragy =  event.touches ? event.touches[0].clientY :e.pageY;\n\
			diff = 0;\n\
			isDown = true;\n\
\n\
			e.preventDefault();\n\
		});\n\
		this.bind(leaveEventType, function(e) {\n\
	\n\
			if (isDrag){\n\
				isDrag = false;\n\
				elem.animate({ top: 0 });\n\
				clearInterval(objTimer);\n\
				isRunning=false;\n\
				moveScale();\n\
			}\n\
			isDown = false;\n\
			e.preventDefault();\n\
		});\n\
		this.bind(releaseEventType, function(e) {\n\
			\n\
			if (isDrag){\n\
				isDrag = false;\n\
				elem.animate({ top: 0 });\n\
				clearTimeout(objTimer);\n\
				isRunning=false;\n\
				if(typeof options[\'valueChanged\'] === \'function\'){\n\
					options[\'valueChanged\'].call(this,currVal);\n\
				}\n\
			}else {\n\
				if(state){\n\
				\n\
					setOff();	\n\
					if(typeof options[\'toggleOff\'] === \'function\'){\n\
						options[\'toggleOff\'].call(this);\n\
					}\n\
				}else{\n\
				\n\
					setOn(); \n\
					if(typeof options[\'toggleOn\'] === \'function\'){\n\
						options[\'toggleOn\'].call(this);\n\
					}\n\
				}}\n\
				isDrag = false;\n\
				isDown = false;\n\
				moveScale();\n\
				drawScale();\n\
			e.preventDefault();\n\
		});\n\
		this.bind(moveEventType, function(e) {\n\
			\n\
			if (isDown)\n\
				isDrag = true;\n\
	\n\
			var event = e.originalEvent;\n\
		  	posy =  event.touches ? event.touches[0].clientY :e.pageY;\n\
\n\
			diff = posy - dragy;\n\
			\n\
			if (diff>20) diff=20;\n\
			if (diff<-20) diff=-20;\n\
			if (isDrag){\n\
			this.style.top = diff + \"px\";\n\
			if (!isRunning){\n\
				moveScale();\n\
				tickTimer();\n\
				isRunning=true;\n\
			}\n\
			\n\
			canvasScale.css({\n\
					top: -diff+\'px\',\n\
				});\n\
			}\n\
			e.preventDefault();\n\
		});\n\
	}\n\
	// public functions;\n\
	this.setOn = function() {\n\
		setOn();	\n\
	};\n\
	this.setOff = function() {\n\
		setOff();	\n\
	};\n\
	this.getState = function() {\n\
		return state;\n\
	};\n\
	this.getValue= function() {\n\
		return currVal;\n\
	};\n\
    this.setValue= function(val) {\n\
        currVal=val;\n\
        drawScale();\n\
    };\n\
return intialize();\n\
}\n\
})( jQuery );\n\
\n\
\n\
				\n\
\n\
\n\
\n\
			\n\
\n\
			';  response.write(content);response.close();			