/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"(function ( $ ) {\n \n    $.fn.dynameter = function ( options ) {\n        var defaults = {\n            label: 'DynaMeter',\n            value: 50,\n            min: 0,\n            max: 100,\n            regions: {  // Value-keys and color-refs.  E.g., value: 'normal'|'warn|'error', etc.\n                0: 'normal'\n            }\n        };\n\n        var settings = $.extend({}, defaults, options);\n\n        settings._range = settings.max - settings.min;\n        settings._clrRef0 = 'normal';\n        settings._clrRef1 = 'warn';\n        settings._clrRef2 = 'error';\n\n        this.changeValue =  function ( myVal )  { \n            var $this = $(this);\n            var myMin = $this.data('dm-min');\n            var myMax = $this.data('dm-max');\n            var myRange = $this.data('dm-range');\n            // Update value text.\n            $this.find('.dm-innerDiv .dm-valueP').html(myVal);\n            // Ensure value is in-range.\n            if (myVal < myMin) {\n                myVal = myMin;\n            }\n            if (myVal > myMax) {\n                myVal = myMax;\n            }\n            // Rotate mask div.\n            var myRelVal = myVal - myMin;\n            var myDeg = myRelVal / myRange * 180;\n            $this.find('.dm-maskDiv').css({\n                '-webkit-transform': 'rotate(' + myDeg + 'deg)',\n                '-moz-transform': 'rotate(' + myDeg + 'deg)',\n                '-ms-transform': 'rotate(' + myDeg + 'deg)',\n                'border-radius': 'rotate(' + myDeg + 'deg)'\n            });\n            // Set/update dm-value attr.\n            $this.data('dm-value', myVal);\n            // console.log('[dynameter.changeValue] Method called.  myVal = ' + myVal);\n        };\n\n        // Greenify the collection based on the settings variable.\n        return this.each(function () {\n            var $this = $(this);  // Div that's getting DynaMeter-ized.\n\n            function updateValue (myVal) {\n                var myMin = $this.data('dm-min');\n                var myRange = $this.data('dm-range');\n                // Update value text.\n                $this.find('.dm-innerDiv .dm-valueP').html(myVal);\n                // Rotate mask div.\n                var myRelVal = myVal - myMin;\n                var myDeg = myRelVal / myRange * 180;\n                $this.find('.dm-maskDiv').css({\n                    '-webkit-transform': 'rotate(' + myDeg + 'deg)',\n                    '-ms-transform': 'rotate(' + myDeg + 'deg)',\n                    '-moz-transform': 'rotate(' + myDeg + 'deg)',\n                    'border-radius': 'rotate(' + myDeg + 'deg)'\n                });\n                // Set/update dm-value attr.\n                $this.data('dm-value', myVal);\n            }\n\n            // Initialize once.\n            if (!$this.hasClass('dm-wrapperDiv')) {\n                // Skip init if settings are invalid.\n                if (settings.value < settings.min ||\n                    settings.value > settings.max ||\n                    settings.min >= settings.max) {\n                    throw new Error(\"DynaMeter initialization failed -- invalid value/min/max settings.\");\n                }\n                var currClrRef;\n                for (var key in settings.regions) {\n                    currClrRef = settings.regions[key];\n                    if (currClrRef != settings._clrRef0 &&\n                        currClrRef != settings._clrRef1 &&\n                        currClrRef != settings._clrRef2) {\n                        throw new Error(\"DynaMeter initialization failed -- invalid region color-key.\");\n                    }\n                    if (key < settings.min || key > settings.max) {\n                        throw new Error(\"DynaMeter initialization failed -- invalid region value.\");\n                    }\n                }\n\n                $this.addClass('dm-wrapperDiv');\n                $this.data('dm-id', ('dm-' + new Date().getTime()));\n                $this.data('dm-min', settings.min);\n                $this.data('dm-max', settings.max);\n                $this.data('dm-range', settings.max - settings.min);\n\n                $this.html('');\n                $this.append('<div class=\"dm-maskDiv\"></div>');\n                $this.append('<div class=\"dm-innerDiv\"></div>');\n\n                var $bgDiv = $this.find('div.dm-bgDiv');\n                var $maskDiv = $this.find('div.dm-maskDiv');\n                var $innerDiv = $this.find('div.dm-innerDiv');\n\n                $innerDiv.append('<p class=\"dm-valueP\">' + settings.value + '</p>');\n                if (settings.unit) {\n                    $innerDiv.append('<p class=\"dm-unitP\">' + settings.unit + '</p>');\n                }\n                $innerDiv.append('<p class=\"dm-labelP\">' + settings.label + '</p>');\n\n                var $valueP = $this.find('p.dm-valueP');\n                var $unitP = $this.find('p.dm-unitP');\n                var $labelP = $this.find('p.dm-labelP');\n\n                var getAngleFromValue = function (myVal) {\n                    // Returns angle for canvas arc color-stops.\n                    if (myVal < settings.min || myVal > settings.max) {\n                        // console.log('[dynameter.getAngleFromValue] ERROR: myValue is outside value range!');\n                        return null;\n                    }\n                    return parseInt((myVal - $this.data('dm-min')) / $this.data('dm-range') * 180);\n                };\n\n                // Color stops for indicator color-bands [[angle, color-reference],...].\n                var colorStops = [];  // Color-ref by angle, based on settings.regions.\n                var keyIdx = 0;\n                for (var key2 in settings.regions) {\n                    // If there's no min-value starting region, prepend one using 'normal' as color-ref.\n                    if (keyIdx === 0 && key2 > settings.min) {\n                        colorStops.push([getAngleFromValue(settings.min), 'normal']);\n                        keyIdx++;\n                        // If starting region is still \"normal\" w/ non-min-value, skip this key.\n                        if (settings.regions[key2] == 'normal') {\n                            continue;\n                        }\n                    }\n                    colorStops.push([getAngleFromValue(key2), settings.regions[key2]]);\n                    keyIdx++;\n                }\n                var colorStopsLength = colorStops.length;\n\n                // Create and rotate color-bands for indicator background.\n                for (var i = 0; i < colorStopsLength; i++) {\n                    var myAngle = colorStops[i][0];\n                    var myClrRef = colorStops[i][1];\n                    $(document.createElement('div'))\n                        .addClass('dm-bgClrDiv ' + myClrRef)\n                        .css({\n                            '-webkit-transform': 'rotate(' + myAngle + 'deg)',\n                            '-moz-transform': 'rotate(' + myAngle + 'deg)',\n                            '-ms-transform': 'rotate(' + myAngle + 'deg)',\n                            'transform': 'rotate(' + myAngle + 'deg)',\n                            'zIndex': i + 1\n                        }) \n                        .prependTo($this);\n                }\n\n                console.log('[dynameter] div#' + $this.attr('id') + ' initialized.');\n\n            }\n\n            updateValue(settings.value);\n\n        }); \n    };\n \n}( jQuery ));\n"},"scriptrdata":[]}}*#*#*/
var content= '(function ( $ ) {\n\
 \n\
    $.fn.dynameter = function ( options ) {\n\
        var defaults = {\n\
            label: \'DynaMeter\',\n\
            value: 50,\n\
            min: 0,\n\
            max: 100,\n\
            regions: {  // Value-keys and color-refs.  E.g., value: \'normal\'|\'warn|\'error\', etc.\n\
                0: \'normal\'\n\
            }\n\
        };\n\
\n\
        var settings = $.extend({}, defaults, options);\n\
\n\
        settings._range = settings.max - settings.min;\n\
        settings._clrRef0 = \'normal\';\n\
        settings._clrRef1 = \'warn\';\n\
        settings._clrRef2 = \'error\';\n\
\n\
        this.changeValue =  function ( myVal )  { \n\
            var $this = $(this);\n\
            var myMin = $this.data(\'dm-min\');\n\
            var myMax = $this.data(\'dm-max\');\n\
            var myRange = $this.data(\'dm-range\');\n\
            // Update value text.\n\
            $this.find(\'.dm-innerDiv .dm-valueP\').html(myVal);\n\
            // Ensure value is in-range.\n\
            if (myVal < myMin) {\n\
                myVal = myMin;\n\
            }\n\
            if (myVal > myMax) {\n\
                myVal = myMax;\n\
            }\n\
            // Rotate mask div.\n\
            var myRelVal = myVal - myMin;\n\
            var myDeg = myRelVal / myRange * 180;\n\
            $this.find(\'.dm-maskDiv\').css({\n\
                \'-webkit-transform\': \'rotate(\' + myDeg + \'deg)\',\n\
                \'-moz-transform\': \'rotate(\' + myDeg + \'deg)\',\n\
                \'-ms-transform\': \'rotate(\' + myDeg + \'deg)\',\n\
                \'border-radius\': \'rotate(\' + myDeg + \'deg)\'\n\
            });\n\
            // Set/update dm-value attr.\n\
            $this.data(\'dm-value\', myVal);\n\
            // console.log(\'[dynameter.changeValue] Method called.  myVal = \' + myVal);\n\
        };\n\
\n\
        // Greenify the collection based on the settings variable.\n\
        return this.each(function () {\n\
            var $this = $(this);  // Div that\'s getting DynaMeter-ized.\n\
\n\
            function updateValue (myVal) {\n\
                var myMin = $this.data(\'dm-min\');\n\
                var myRange = $this.data(\'dm-range\');\n\
                // Update value text.\n\
                $this.find(\'.dm-innerDiv .dm-valueP\').html(myVal);\n\
                // Rotate mask div.\n\
                var myRelVal = myVal - myMin;\n\
                var myDeg = myRelVal / myRange * 180;\n\
                $this.find(\'.dm-maskDiv\').css({\n\
                    \'-webkit-transform\': \'rotate(\' + myDeg + \'deg)\',\n\
                    \'-ms-transform\': \'rotate(\' + myDeg + \'deg)\',\n\
                    \'-moz-transform\': \'rotate(\' + myDeg + \'deg)\',\n\
                    \'border-radius\': \'rotate(\' + myDeg + \'deg)\'\n\
                });\n\
                // Set/update dm-value attr.\n\
                $this.data(\'dm-value\', myVal);\n\
            }\n\
\n\
            // Initialize once.\n\
            if (!$this.hasClass(\'dm-wrapperDiv\')) {\n\
                // Skip init if settings are invalid.\n\
                if (settings.value < settings.min ||\n\
                    settings.value > settings.max ||\n\
                    settings.min >= settings.max) {\n\
                    throw new Error(\"DynaMeter initialization failed -- invalid value/min/max settings.\");\n\
                }\n\
                var currClrRef;\n\
                for (var key in settings.regions) {\n\
                    currClrRef = settings.regions[key];\n\
                    if (currClrRef != settings._clrRef0 &&\n\
                        currClrRef != settings._clrRef1 &&\n\
                        currClrRef != settings._clrRef2) {\n\
                        throw new Error(\"DynaMeter initialization failed -- invalid region color-key.\");\n\
                    }\n\
                    if (key < settings.min || key > settings.max) {\n\
                        throw new Error(\"DynaMeter initialization failed -- invalid region value.\");\n\
                    }\n\
                }\n\
\n\
                $this.addClass(\'dm-wrapperDiv\');\n\
                $this.data(\'dm-id\', (\'dm-\' + new Date().getTime()));\n\
                $this.data(\'dm-min\', settings.min);\n\
                $this.data(\'dm-max\', settings.max);\n\
                $this.data(\'dm-range\', settings.max - settings.min);\n\
\n\
                $this.html(\'\');\n\
                $this.append(\'<div class=\"dm-maskDiv\"></div>\');\n\
                $this.append(\'<div class=\"dm-innerDiv\"></div>\');\n\
\n\
                var $bgDiv = $this.find(\'div.dm-bgDiv\');\n\
                var $maskDiv = $this.find(\'div.dm-maskDiv\');\n\
                var $innerDiv = $this.find(\'div.dm-innerDiv\');\n\
\n\
                $innerDiv.append(\'<p class=\"dm-valueP\">\' + settings.value + \'</p>\');\n\
                if (settings.unit) {\n\
                    $innerDiv.append(\'<p class=\"dm-unitP\">\' + settings.unit + \'</p>\');\n\
                }\n\
                $innerDiv.append(\'<p class=\"dm-labelP\">\' + settings.label + \'</p>\');\n\
\n\
                var $valueP = $this.find(\'p.dm-valueP\');\n\
                var $unitP = $this.find(\'p.dm-unitP\');\n\
                var $labelP = $this.find(\'p.dm-labelP\');\n\
\n\
                var getAngleFromValue = function (myVal) {\n\
                    // Returns angle for canvas arc color-stops.\n\
                    if (myVal < settings.min || myVal > settings.max) {\n\
                        // console.log(\'[dynameter.getAngleFromValue] ERROR: myValue is outside value range!\');\n\
                        return null;\n\
                    }\n\
                    return parseInt((myVal - $this.data(\'dm-min\')) / $this.data(\'dm-range\') * 180);\n\
                };\n\
\n\
                // Color stops for indicator color-bands [[angle, color-reference],...].\n\
                var colorStops = [];  // Color-ref by angle, based on settings.regions.\n\
                var keyIdx = 0;\n\
                for (var key2 in settings.regions) {\n\
                    // If there\'s no min-value starting region, prepend one using \'normal\' as color-ref.\n\
                    if (keyIdx === 0 && key2 > settings.min) {\n\
                        colorStops.push([getAngleFromValue(settings.min), \'normal\']);\n\
                        keyIdx++;\n\
                        // If starting region is still \"normal\" w/ non-min-value, skip this key.\n\
                        if (settings.regions[key2] == \'normal\') {\n\
                            continue;\n\
                        }\n\
                    }\n\
                    colorStops.push([getAngleFromValue(key2), settings.regions[key2]]);\n\
                    keyIdx++;\n\
                }\n\
                var colorStopsLength = colorStops.length;\n\
\n\
                // Create and rotate color-bands for indicator background.\n\
                for (var i = 0; i < colorStopsLength; i++) {\n\
                    var myAngle = colorStops[i][0];\n\
                    var myClrRef = colorStops[i][1];\n\
                    $(document.createElement(\'div\'))\n\
                        .addClass(\'dm-bgClrDiv \' + myClrRef)\n\
                        .css({\n\
                            \'-webkit-transform\': \'rotate(\' + myAngle + \'deg)\',\n\
                            \'-moz-transform\': \'rotate(\' + myAngle + \'deg)\',\n\
                            \'-ms-transform\': \'rotate(\' + myAngle + \'deg)\',\n\
                            \'transform\': \'rotate(\' + myAngle + \'deg)\',\n\
                            \'zIndex\': i + 1\n\
                        }) \n\
                        .prependTo($this);\n\
                }\n\
\n\
                console.log(\'[dynameter] div#\' + $this.attr(\'id\') + \' initialized.\');\n\
\n\
            }\n\
\n\
            updateValue(settings.value);\n\
\n\
        }); \n\
    };\n\
 \n\
}( jQuery ));\n\
';  response.write(content);response.close();			