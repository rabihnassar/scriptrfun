/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"    <!DOCTYPE html>\n<html>\n\n<head>\n\t<meta charset=\"utf-8\">\n\t<title>scriptr.io virtual device</title>\n\n\n    <script>\n      /* this identifies this unique virtual device, in case there are more than one using the same scriptr account SCRIPTR_COMMENT\n      DEVICE_ID = \"big\"\n    </script>\n\n  <script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.12.3/jquery.min.js\"></script>\n\t<script src=\"http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js\"></script>\n\n    <script src=\"../clientjs/widgetManager.js\"></script>\n    <script src=\"../clientjs/channelManager.js\"></script>\n\n    <!-- pretty web fonts -->\n    <script src=\"http://use.edgefonts.net/vt323.js\"></script>\n\n  \n    <!-- Dynameter & slide -->\n    <link rel=\"stylesheet\" href=\"http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css\"> \n    <link rel=\"stylesheet\" type=\"text/css\" href=\"../css/jquery.dynameter.css\">\n\t<script type=\"text/javascript\" src=\"../clientjs/jquery.dynameter.js\"></script>\n    \n    <!-- LCDDisplay display -->\n    <link rel=\"stylesheet\" href=\"../css/scriptr.LCDDisplay.css\" type=\"text/css\" charset=\"utf-8\" />\n\t<script type=\"text/javascript\" src=\"../clientjs/scriptr.LCDDisplay.js\"></script>\n \n  \t<!-- fa-multi-button library -->\n    <link rel=\"stylesheet\" href=\"http://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css\">\n\t<script type=\"text/javascript\" src=\"../clientjs/famultibutton.js\"></script>\n    \n    <link rel=\"stylesheet\" type=\"text/css\" href=\"../css/device.css\">\n\n</head>\n\n<body>\n    <div id=\"device\">\n        <h1>scriptr.io virtual device</h1>\n\n        <div type=\"scriptr.LCDDisplay\" id=\"display\" serverBinding=\"true\"\n            label=\"primary display\">&gt;Ready</div>\n        <div type=\"scriptr.LCDDisplay\"  id=\"display1\" serverBinding=\"true\"\n             class=\"LCDDisplaySmall\" label=\"debugging display\">\n            <span style=\"color:#060\">&gt;ready</span>\n        </div>\n<br>\n        <div type=\"jquery.dynameterMeter\" id=\"gauge\" serverBinding=\"true\"\n             label=\"server binding\" value=\"1000\" min=\"0\" max=\"2000\" unit=\"units\" warn=\"1300\" error=\"1600\"></div>\n        <div type=\"jquery.dynameterMeter\" id=\"gauge2\"\n             label=\"local binding\" value=\"500\" min=\"0\" max=\"1000\" unit=\"units\" warn=\"700\" error=\"850\"></div>\n<br>\n<br>\n\n        <div>\n            <div type=\"jquery.dynameterSlider\" id=\"slider\" serverBinding=\"true\"\n                min=\"0\" max=\"2000\" value=\"1000\"></div>\n            <div type=\"jquery.dynameterSlider\" id=\"slider1\"  bindToWidget=\"gauge2\"\n                onChange=\"updateMeter2\"></div>\n            <script>\n                function updateMeter2(v) {\n        //            scriptrio.widgets[\"gauge2\"].changeValue(v)\n        //            $(\"#display2\").LCDDisplay(\"text\", v)\n                }\n            </script>\n        </div>\n\n        \n<br>\n<br>\n<br>\n      \n      <!-- layout for the rows of buttons -->\n      <style>\n        table {\n          border-collapse: collapse;\n          width: 100%;\n        }\n        table, th, td {\n          border: 0px solid grey;\n        } \n        td {\n          font-family: monotype;\n          vertical-align: top;\n          text-align: center;\n        }\n        \t\n      </style>\n      \n      <table>\n        <tr>\n          <td>L1</td>\n          <td>L2</td>\n          <td>L3</td>\n        </tr>\n        <tr>\n          <td>\n            <div id=\"signal1\" type=\"faMultiButton\" mode=\"signal\" serverBinding=\"true\"\n                 onColor=\"EFEFE8\" offColor=\"black\" \n                 onBackgroundColor=\"#00CD15\" offBackgroundColor=\"#005008\"></div><br>\n            <div id=\"push1\" type=\"faMultiButton\" mode=\"push\" serverBinding=\"true\"\n                 icon=\"fa-square\" backgroundIcon=\"fa-square\" \n                 onColor=\"#777\" offColor=\"#ccc\"\n                 onBackgroundColor=\"#00CD15\" offBackgroundColor=\"#005008\"></div><br>\n            <div id=\"pushOff1\" type=\"faMultiButton\" mode=\"push\" serverBinding=\"true\"\n                 icon=\"fa-square-o\" backgroundIcon=\"fa-square\"\n                 onColor=\"#777\" offColor=\"#ccc\"\n                 onBackgroundColor=\"#00CD15\" offBackgroundColor=\"#005008\"></div>\n          </td>\n          <td>\n            <div id=\"signal2\" type=\"faMultiButton\" mode=\"signal\" serverBinding=\"true\"\n                 onColor=\"EFEFE8\" offColor=\"black\" \n                 onBackgroundColor=\"#0019CD\" offBackgroundColor=\"#000A55\"></div>\n          </td>\n          <td>\n            <div id=\"signal3\" type=\"faMultiButton\" mode=\"signal\" serverBinding=\"true\"\n                 onColor=\"EFEFE8\" offColor=\"black\" \n                 onBackgroundColor=\"#DE0000\" offBackgroundColor=\"#550000\"></div>\n          </td>\n        </tr>\n        <tr>\n          <td></td>\n          <td></td>\n          <td>\n            send<br>\n              <div id=\"send\" type=\"faMultiButton\" mode=\"push\" serverBinding=\"true\"\n                icon=\"fa-arrow-right\" \n                onColor=\"#777\" offColor=\"#ccc\"\n                onBackgroundColor=\"#00CD15\" offBackgroundColor=\"#005008\"></div>\n            </div>\n          </td>\n        </tr>\n      </table>\n      \n     \n        <div style=\"text-align: right;width: 100%;\">\n\t  </div>\n</body>\n\n</html>"},"scriptrdata":[]}}*#*#*/
var content= '    <!DOCTYPE html>\n\
<html>\n\
\n\
<head>\n\
	<meta charset=\"utf-8\">\n\
	<title>scriptr.io virtual device</title>\n\
\n\
\n\
    <script>\n\
      /* this identifies this unique virtual device, in case there are more than one using the same scriptr account */\n\
      DEVICE_ID = \"big\"\n\
    </script>\n\
\n\
  <script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.12.3/jquery.min.js\"></script>\n\
	<script src=\"http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js\"></script>\n\
\n\
    <script src=\"../clientjs/widgetManager.js\"></script>\n\
    <script src=\"../clientjs/channelManager.js\"></script>\n\
\n\
    <!-- pretty web fonts -->\n\
    <script src=\"http://use.edgefonts.net/vt323.js\"></script>\n\
\n\
  \n\
    <!-- Dynameter & slide -->\n\
    <link rel=\"stylesheet\" href=\"http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css\"> \n\
    <link rel=\"stylesheet\" type=\"text/css\" href=\"../css/jquery.dynameter.css\">\n\
	<script type=\"text/javascript\" src=\"../clientjs/jquery.dynameter.js\"></script>\n\
    \n\
    <!-- LCDDisplay display -->\n\
    <link rel=\"stylesheet\" href=\"../css/scriptr.LCDDisplay.css\" type=\"text/css\" charset=\"utf-8\" />\n\
	<script type=\"text/javascript\" src=\"../clientjs/scriptr.LCDDisplay.js\"></script>\n\
 \n\
  	<!-- fa-multi-button library -->\n\
    <link rel=\"stylesheet\" href=\"http://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css\">\n\
	<script type=\"text/javascript\" src=\"../clientjs/famultibutton.js\"></script>\n\
    \n\
    <link rel=\"stylesheet\" type=\"text/css\" href=\"../css/device.css\">\n\
\n\
</head>\n\
\n\
<body>\n\
    <div id=\"device\">\n\
        <h1>scriptr.io virtual device</h1>\n\
\n\
        <div type=\"scriptr.LCDDisplay\" id=\"display\" serverBinding=\"true\"\n\
            label=\"primary display\">&gt;Ready</div>\n\
        <div type=\"scriptr.LCDDisplay\"  id=\"display1\" serverBinding=\"true\"\n\
             class=\"LCDDisplaySmall\" label=\"debugging display\">\n\
            <span style=\"color:#060\">&gt;ready</span>\n\
        </div>\n\
<br>\n\
        <div type=\"jquery.dynameterMeter\" id=\"gauge\" serverBinding=\"true\"\n\
             label=\"server binding\" value=\"1000\" min=\"0\" max=\"2000\" unit=\"units\" warn=\"1300\" error=\"1600\"></div>\n\
        <div type=\"jquery.dynameterMeter\" id=\"gauge2\"\n\
             label=\"local binding\" value=\"500\" min=\"0\" max=\"1000\" unit=\"units\" warn=\"700\" error=\"850\"></div>\n\
<br>\n\
<br>\n\
\n\
        <div>\n\
            <div type=\"jquery.dynameterSlider\" id=\"slider\" serverBinding=\"true\"\n\
                min=\"0\" max=\"2000\" value=\"1000\"></div>\n\
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
      <!-- layout for the rows of buttons -->\n\
      <style>\n\
        table {\n\
          border-collapse: collapse;\n\
          width: 100%;\n\
        }\n\
        table, th, td {\n\
          border: 0px solid grey;\n\
        } \n\
        td {\n\
          font-family: monotype;\n\
          vertical-align: top;\n\
          text-align: center;\n\
        }\n\
        	\n\
      </style>\n\
      \n\
      <table>\n\
        <tr>\n\
          <td>L1</td>\n\
          <td>L2</td>\n\
          <td>L3</td>\n\
        </tr>\n\
        <tr>\n\
          <td>\n\
            <div id=\"signal1\" type=\"faMultiButton\" mode=\"signal\" serverBinding=\"true\"\n\
                 onColor=\"EFEFE8\" offColor=\"black\" \n\
                 onBackgroundColor=\"#00CD15\" offBackgroundColor=\"#005008\"></div><br>\n\
            <div id=\"push1\" type=\"faMultiButton\" mode=\"push\" serverBinding=\"true\"\n\
                 icon=\"fa-square\" backgroundIcon=\"fa-square\" \n\
                 onColor=\"#777\" offColor=\"#ccc\"\n\
                 onBackgroundColor=\"#00CD15\" offBackgroundColor=\"#005008\"></div><br>\n\
            <div id=\"pushOff1\" type=\"faMultiButton\" mode=\"push\" serverBinding=\"true\"\n\
                 icon=\"fa-square-o\" backgroundIcon=\"fa-square\"\n\
                 onColor=\"#777\" offColor=\"#ccc\"\n\
                 onBackgroundColor=\"#00CD15\" offBackgroundColor=\"#005008\"></div>\n\
          </td>\n\
          <td>\n\
            <div id=\"signal2\" type=\"faMultiButton\" mode=\"signal\" serverBinding=\"true\"\n\
                 onColor=\"EFEFE8\" offColor=\"black\" \n\
                 onBackgroundColor=\"#0019CD\" offBackgroundColor=\"#000A55\"></div>\n\
          </td>\n\
          <td>\n\
            <div id=\"signal3\" type=\"faMultiButton\" mode=\"signal\" serverBinding=\"true\"\n\
                 onColor=\"EFEFE8\" offColor=\"black\" \n\
                 onBackgroundColor=\"#DE0000\" offBackgroundColor=\"#550000\"></div>\n\
          </td>\n\
        </tr>\n\
        <tr>\n\
          <td></td>\n\
          <td></td>\n\
          <td>\n\
            send<br>\n\
              <div id=\"send\" type=\"faMultiButton\" mode=\"push\" serverBinding=\"true\"\n\
                icon=\"fa-arrow-right\" \n\
                onColor=\"#777\" offColor=\"#ccc\"\n\
                onBackgroundColor=\"#00CD15\" offBackgroundColor=\"#005008\"></div>\n\
            </div>\n\
          </td>\n\
        </tr>\n\
      </table>\n\
      \n\
     \n\
        <div style=\"text-align: right;width: 100%;\">\n\
	  </div>\n\
</body>\n\
\n\
</html>';  response.write(content);response.close();			