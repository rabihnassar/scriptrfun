/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"var SERVER_BINDING_ATTR = \"serverBinding\"\nvar WIDGET_BINDING_ATTR = \"bindToWidget\"  \n\nwindow.scriptrio={\n    widgets:{},\n    register: function(id, w) { \n        if (typeof id != 'undefined') {\n            this.widgets[id] = w                \n        }\n    }\n}\n    \nfunction initLCDDisplays() {\n    var w\n    $(\"body\").find(\"[type='scriptr.LCDDisplay']\").each(function(i) {\n        var h = this.innerHTML\n        var w = $(this).LCDDisplay({html: h})\n        w.LCDDisplay(\"option\", \"text\", h)\n        w.draggable()\n        \n        if ($(this).attr(SERVER_BINDING_ATTR)==\"true\") {\n            channelManager.bindWidget(w, function(widget, payload) {\n                widget.LCDDisplay(\"text\", payload)\n            })\n        }\n    })\n}\n\nfunction initFamultibuttons() {\n    var w\n    $(\"body\").find(\"[type='faMultiButton']\").each(function(i) {\n        \n        var boundToServer = $(this).attr(SERVER_BINDING_ATTR)==\"true\"\n        \n        var btn = $(this).famultibutton({\n            mode: $(this).attr(\"mode\") || 'toggle',\n            icon: $(this).attr(\"icon\") || 'fa-lightbulb-o',\n            backgroundIcon: $(this).attr(\"backgroundIcon\") || 'fa-circle',\n            onColor: $(this).attr(\"onColor\") || 'white',\n            offColor: $(this).attr(\"offColor\") || 'black',\n            onBackgroundColor: $(this).attr(\"onBackgroundColor\") || '#AA6900',\n            offBackgroundColor: $(this).attr(\"offBackgroundColor\") || '#505050',\n            toggleOn: function() { if (boundToServer) channelManager.send($(this).attr(\"id\"), \"on\")},\n            toggleOff: function() { if (boundToServer) channelManager.send($(this).attr(\"id\"), \"off\")},\n//            onClick: function() {channelManager.send($(this).attr(\"id\"), \"click\")}\n        })\n\n        if (boundToServer) {\n            channelManager.bindWidget(btn, function(btn, payload) {\n                if (payload==\"on\") {\n                    btn.setOn() \n                } else if (payload==\"off\") {\n                    btn.setOff() \n                }\n            })\n        }\n    })    \n}\n\nfunction initSliders() {\n    var w\n    $(\"body\").find(\"[type='jquery.dynameterSlider']\").each(function(i) {\n        var updateFunction = window[$(this).attr(\"onChange\")]\n\n        var id = $(this).attr(\"id\")\n        var boundToServer = $(this).attr(SERVER_BINDING_ATTR)==\"true\"\n        var bindToWidget = $(this).attr(WIDGET_BINDING_ATTR)\n        \n        var attributes = {\n            min: Number($(this).attr(\"min\")) || 0,\n            max: Number($(this).attr(\"max\")) || 1000,\n            value: Number($(this).attr(\"value\")) || 500,\n            step: Number($(this).attr(\"step\")) || 10,\n            label: $(this).attr(\"label\") || \"Slider\",\n            slide: function (evt, ui) {\n                if (boundToServer) {\n                    channelManager.send(id, ui.value)\n                }\n                //if (updateFunction) updateFunction(ui.value)\n                if (bindToWidget) {\n                    scriptrio.widgets[bindToWidget].changeValue(ui.value)\n                }\n            }\n        }\n      \n        $(this).addClass(\"dynameter\")\n        var e = $(\"<div></div>\")\n        e.slider(attributes)\n        $(this).append(e)\n        \n        $(this).draggable()\n    })    \n}\n\nfunction initDynameters() {\n    var w\n\n    $(\"body\").find(\"[type='jquery.dynameterMeter']\").each(function(i) {\n        var boundToServer = $(this).attr(SERVER_BINDING_ATTR)==\"true\"\n        \n        var attributes = {\n            label: $(this).attr(\"label\") || \"gauge\",\n            unit: $(this).attr(\"unit\") || \"count\",\n            min: Number($(this).attr(\"min\")) || 0,\n            max: Number($(this).attr(\"max\")) || 1000,\n            value: Number($(this).attr(\"value\")) || 500,\n            regions: {}\n        }\n\n        var warn = $(this).attr(\"warn\") || 500\n        attributes.regions[warn] = 'warn'\n\n        var error = $(this).attr(\"error\") || 750\n        attributes.regions[error] = 'error'\n console.dir(attributes)         \n        var w = $(this).dynameter(attributes)\n        w.draggable()\n        scriptrio.register($(this).attr(\"id\"), w)\n\n        if (boundToServer) {\n            channelManager.bindWidget(w, function(w, payload) {\n                scriptrio.widgets[w.attr(\"id\")].changeValue(payload)\n            })\n        }\n    })    \n}\n\n$(function() {\n    initLCDDisplays()\n    initSliders()\n    initDynameters()\n    initFamultibuttons()\n})\n"},"scriptrdata":[]}}*#*#*/
var content= 'var SERVER_BINDING_ATTR = \"serverBinding\"\n\
var WIDGET_BINDING_ATTR = \"bindToWidget\"  \n\
\n\
window.scriptrio={\n\
    widgets:{},\n\
    register: function(id, w) { \n\
        if (typeof id != \'undefined\') {\n\
            this.widgets[id] = w                \n\
        }\n\
    }\n\
}\n\
    \n\
function initLCDDisplays() {\n\
    var w\n\
    $(\"body\").find(\"[type=\'scriptr.LCDDisplay\']\").each(function(i) {\n\
        var h = this.innerHTML\n\
        var w = $(this).LCDDisplay({html: h})\n\
        w.LCDDisplay(\"option\", \"text\", h)\n\
        w.draggable()\n\
        \n\
        if ($(this).attr(SERVER_BINDING_ATTR)==\"true\") {\n\
            channelManager.bindWidget(w, function(widget, payload) {\n\
                widget.LCDDisplay(\"text\", payload)\n\
            })\n\
        }\n\
    })\n\
}\n\
\n\
function initFamultibuttons() {\n\
    var w\n\
    $(\"body\").find(\"[type=\'faMultiButton\']\").each(function(i) {\n\
        \n\
        var boundToServer = $(this).attr(SERVER_BINDING_ATTR)==\"true\"\n\
        \n\
        var btn = $(this).famultibutton({\n\
            mode: $(this).attr(\"mode\") || \'toggle\',\n\
            icon: $(this).attr(\"icon\") || \'fa-lightbulb-o\',\n\
            backgroundIcon: $(this).attr(\"backgroundIcon\") || \'fa-circle\',\n\
            onColor: $(this).attr(\"onColor\") || \'white\',\n\
            offColor: $(this).attr(\"offColor\") || \'black\',\n\
            onBackgroundColor: $(this).attr(\"onBackgroundColor\") || \'#AA6900\',\n\
            offBackgroundColor: $(this).attr(\"offBackgroundColor\") || \'#505050\',\n\
            toggleOn: function() { if (boundToServer) channelManager.send($(this).attr(\"id\"), \"on\")},\n\
            toggleOff: function() { if (boundToServer) channelManager.send($(this).attr(\"id\"), \"off\")},\n\
//            onClick: function() {channelManager.send($(this).attr(\"id\"), \"click\")}\n\
        })\n\
\n\
        if (boundToServer) {\n\
            channelManager.bindWidget(btn, function(btn, payload) {\n\
                if (payload==\"on\") {\n\
                    btn.setOn() \n\
                } else if (payload==\"off\") {\n\
                    btn.setOff() \n\
                }\n\
            })\n\
        }\n\
    })    \n\
}\n\
\n\
function initSliders() {\n\
    var w\n\
    $(\"body\").find(\"[type=\'jquery.dynameterSlider\']\").each(function(i) {\n\
        var updateFunction = window[$(this).attr(\"onChange\")]\n\
\n\
        var id = $(this).attr(\"id\")\n\
        var boundToServer = $(this).attr(SERVER_BINDING_ATTR)==\"true\"\n\
        var bindToWidget = $(this).attr(WIDGET_BINDING_ATTR)\n\
        \n\
        var attributes = {\n\
            min: Number($(this).attr(\"min\")) || 0,\n\
            max: Number($(this).attr(\"max\")) || 1000,\n\
            value: Number($(this).attr(\"value\")) || 500,\n\
            step: Number($(this).attr(\"step\")) || 10,\n\
            label: $(this).attr(\"label\") || \"Slider\",\n\
            slide: function (evt, ui) {\n\
                if (boundToServer) {\n\
                    channelManager.send(id, ui.value)\n\
                }\n\
                //if (updateFunction) updateFunction(ui.value)\n\
                if (bindToWidget) {\n\
                    scriptrio.widgets[bindToWidget].changeValue(ui.value)\n\
                }\n\
            }\n\
        }\n\
      \n\
        $(this).addClass(\"dynameter\")\n\
        var e = $(\"<div></div>\")\n\
        e.slider(attributes)\n\
        $(this).append(e)\n\
        \n\
        $(this).draggable()\n\
    })    \n\
}\n\
\n\
function initDynameters() {\n\
    var w\n\
\n\
    $(\"body\").find(\"[type=\'jquery.dynameterMeter\']\").each(function(i) {\n\
        var boundToServer = $(this).attr(SERVER_BINDING_ATTR)==\"true\"\n\
        \n\
        var attributes = {\n\
            label: $(this).attr(\"label\") || \"gauge\",\n\
            unit: $(this).attr(\"unit\") || \"count\",\n\
            min: Number($(this).attr(\"min\")) || 0,\n\
            max: Number($(this).attr(\"max\")) || 1000,\n\
            value: Number($(this).attr(\"value\")) || 500,\n\
            regions: {}\n\
        }\n\
\n\
        var warn = $(this).attr(\"warn\") || 500\n\
        attributes.regions[warn] = \'warn\'\n\
\n\
        var error = $(this).attr(\"error\") || 750\n\
        attributes.regions[error] = \'error\'\n\
 console.dir(attributes)         \n\
        var w = $(this).dynameter(attributes)\n\
        w.draggable()\n\
        scriptrio.register($(this).attr(\"id\"), w)\n\
\n\
        if (boundToServer) {\n\
            channelManager.bindWidget(w, function(w, payload) {\n\
                scriptrio.widgets[w.attr(\"id\")].changeValue(payload)\n\
            })\n\
        }\n\
    })    \n\
}\n\
\n\
$(function() {\n\
    initLCDDisplays()\n\
    initSliders()\n\
    initDynameters()\n\
    initFamultibuttons()\n\
})\n\
';  response.write(content);response.close();			