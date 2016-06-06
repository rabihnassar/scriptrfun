/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"    <!DOCTYPE html>\n<html>\n\n<head>\n\t<meta charset=\"utf-8\">\n\t<title>scriptr.io virtual device</title>\n\n\t<script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.12.3/jquery.min.js\"></script>\n\t<script src=\"http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js\"></script>\n\n    <script src=\"clientjs/widgetManager.js\"></script>\n    <script src=\"clientjs/channelManager.js\"></script>\n \n    <!-- Dynameter & slide -->\n    <link rel=\"stylesheet\" href=\"http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css\"> \n    <link rel=\"stylesheet\" type=\"text/css\" href=\"css/jquery.dynameter.css\">\n\t<script type=\"text/javascript\" src=\"clientjs/jquery.dynameter.js\"></script>\n    \n    <!-- LCDDisplay display -->\n    <link rel=\"stylesheet\" href=\"css/scriptr.LCDDisplay.css\" type=\"text/css\" charset=\"utf-8\" />\n\t<script type=\"text/javascript\" src=\"clientjs/scriptr.LCDDisplay.js\"></script>\n\t<script src=\"//use.edgefonts.net/vt323.js\"></script>\n\n  <!-- fa-multi-button library -->\n    <link rel=\"stylesheet\" href=\"http://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css\">\n\t<script type=\"text/javascript\" src=\"clientjs/famultibutton.js\"></script>\n    \n    <link rel=\"stylesheet\" type=\"text/css\" href=\"css/device.css\">\n    \n</head>\n\n<body>\n    <div id=\"device\">\n        <h1>scriptr.io <br>virtual device</h1>\n\n        <div type=\"scriptr.LCDDisplay\" id=\"display\" serverBinding=\"true\"\n            label=\"primary display\">&gt;Ready</div>\n<br>\n        <div type=\"jquery.dynameterMeter\" id=\"gauge\" serverBinding=\"true\"\n             label=\"Gauge 1\" value=\"1700\" min=\"0\" max=\"2000\" unit=\"lbs\" warn=\"1000\" error=\"1500\"></div>\n<br>\n<br>\n\n        <div>\n            <div type=\"jquery.dynameterSlider\" id=\"slider\" serverBinding=\"true\"\n                min=\"0\" max=\"2000\"></div>\n            <div type=\"jquery.dynameterSlider\" id=\"slider1\"  bindToWidget=\"gauge2\"\n                onChange=\"updateMeter2\"></div>\n            <script>\n                function updateMeter2(v) {\n        //            scriptrio.widgets[\"gauge2\"].changeValue(v)\n        //            $(\"#display2\").LCDDisplay(\"text\", v)\n                }\n            </script>\n        </div>\n\n        \n<br>\n<br>\n<br>\n        \n        <div>\n            <div id=\"btn\" type=\"faMultiButton\" mode=\"signal\" serverBinding=\"true\"></div>\n\n            <div id=\"btn1\" type=\"faMultiButton\" mode=\"signal\" serverBinding=\"true\"\n                 onToggleOn=\"\" onToggleOff=\"\" onClick=\"console.log('click')\" \n                 backgoundIcon=\"\" icon=\"\" onColor=\"\" offColor=\"\" offBackgroundColor=\"\"></div>\n\n            <div id=\"btn1\" type=\"faMultiButton\" mode=\"toggle\" serverBinding=\"true\"\n                 onToggleOn=\"\" onToggleOff=\"\" \n                 backgroundIcon=\"fa-square\" icon=\"fa-lock\" onColor=\"white\" offColor=\"\" offBackgroundColor=\"\"\n                 onclick=\"console.log('click')\"></div>\n        </div>\n    </div>\n</body>\n\n</html>"},"scriptrdata":[]}}*#*#*/
var content= '    <!DOCTYPE html>\n\
<html>\n\
\n\
<head>\n\
	<meta charset=\"utf-8\">\n\
	<title>scriptr.io virtual device</title>\n\
\n\
	<script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.12.3/jquery.min.js\"></script>\n\
	<script src=\"http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js\"></script>\n\
\n\
    <script src=\"clientjs/widgetManager.js\"></script>\n\
    <script src=\"clientjs/channelManager.js\"></script>\n\
 \n\
    <!-- Dynameter & slide -->\n\
    <link rel=\"stylesheet\" href=\"http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css\"> \n\
    <link rel=\"stylesheet\" type=\"text/css\" href=\"css/jquery.dynameter.css\">\n\
	<script type=\"text/javascript\" src=\"clientjs/jquery.dynameter.js\"></script>\n\
    \n\
    <!-- LCDDisplay display -->\n\
    <link rel=\"stylesheet\" href=\"css/scriptr.LCDDisplay.css\" type=\"text/css\" charset=\"utf-8\" />\n\
	<script type=\"text/javascript\" src=\"clientjs/scriptr.LCDDisplay.js\"></script>\n\
	<script src=\"//use.edgefonts.net/vt323.js\"></script>\n\
\n\
  <!-- fa-multi-button library -->\n\
    <link rel=\"stylesheet\" href=\"http://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css\">\n\
	<script type=\"text/javascript\" src=\"clientjs/famultibutton.js\"></script>\n\
    \n\
    <link rel=\"stylesheet\" type=\"text/css\" href=\"css/device.css\">\n\
    \n\
</head>\n\
\n\
<body>\n\
    <div id=\"device\">\n\
        <h1>scriptr.io <br>virtual device</h1>\n\
\n\
        <div type=\"scriptr.LCDDisplay\" id=\"display\" serverBinding=\"true\"\n\
            label=\"primary display\">&gt;Ready</div>\n\
<br>\n\
        <div type=\"jquery.dynameterMeter\" id=\"gauge\" serverBinding=\"true\"\n\
             label=\"Gauge 1\" value=\"1700\" min=\"0\" max=\"2000\" unit=\"lbs\" warn=\"1000\" error=\"1500\"></div>\n\
<br>\n\
<br>\n\
\n\
        <div>\n\
            <div type=\"jquery.dynameterSlider\" id=\"slider\" serverBinding=\"true\"\n\
                min=\"0\" max=\"2000\"></div>\n\
            <div type=\"jquery.dynameterSlider\" id=\"slider1\"  bindToWidget=\"gauge2\"\n\
                onChange=\"updateMeter2\"></div>\n\
            <script>\n\
                function updateMeter2(v) {\n\
        //            scriptrio.widgets[\"gauge2\"].changeValue(v)\n\
        //            $(\"#display2\").LCDDisplay(\"text\", v)\n\
                }\n\
            </script>\n\
        </div>\n\
\n\
        \n\
<br>\n\
<br>\n\
<br>\n\
        \n\
        <div>\n\
            <div id=\"btn\" type=\"faMultiButton\" mode=\"signal\" serverBinding=\"true\"></div>\n\
\n\
            <div id=\"btn1\" type=\"faMultiButton\" mode=\"signal\" serverBinding=\"true\"\n\
                 onToggleOn=\"\" onToggleOff=\"\" onClick=\"console.log(\'click\')\" \n\
                 backgoundIcon=\"\" icon=\"\" onColor=\"\" offColor=\"\" offBackgroundColor=\"\"></div>\n\
\n\
            <div id=\"btn1\" type=\"faMultiButton\" mode=\"toggle\" serverBinding=\"true\"\n\
                 onToggleOn=\"\" onToggleOff=\"\" \n\
                 backgroundIcon=\"fa-square\" icon=\"fa-lock\" onColor=\"white\" offColor=\"\" offBackgroundColor=\"\"\n\
                 onclick=\"console.log(\'click\')\"></div>\n\
        </div>\n\
    </div>\n\
</body>\n\
\n\
</html>';  response.write(content);response.close();			