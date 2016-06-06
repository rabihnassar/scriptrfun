/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"    <!DOCTYPE html>\n<html>\n\n<head>\n\t<meta charset=\"utf-8\">\n\t<title>scriptr.io virtual device</title>\n\n\t<script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.12.3/jquery.min.js\"></script>\n\t<script src=\"http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js\"></script>\n\n    <script>\n      /* this identifies this unique virtual device, in case there are more than one using the same scriptr account SCRIPTR_COMMENT\n      DEVICE_ID = \"simple\"\n    </script>\n\n\t<script src=\"../clientjs/widgetManager.js\"></script>\n    <script src=\"../clientjs/channelManager.js\"></script>\n\n    <!-- pretty web fonts -->\n    <script src=\"http://use.edgefonts.net/vt323.js\"></script>\n\n  \n  \t<!-- Fancy Button -->\n    <link rel=\"stylesheet\" href=\"../css/fancyToggle.css\"> \n  \t\n  \n    <!-- Dynameter & slide -->\n    <link rel=\"stylesheet\" href=\"http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css\"> \n    <link rel=\"stylesheet\" type=\"text/css\" href=\"../css/jquery.dynameter.css\">\n\t<script type=\"text/javascript\" src=\"../clientjs/jquery.dynameter.js\"></script>\n    \n    <!-- LCDDisplay display -->\n    <link rel=\"stylesheet\" href=\"../css/scriptr.LCDDisplay.css\" type=\"text/css\" charset=\"utf-8\" />\n\t<script type=\"text/javascript\" src=\"../clientjs/scriptr.LCDDisplay.js\"></script>\n \n  \t<!-- fa-multi-button library -->\n    <link rel=\"stylesheet\" href=\"http://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css\">\n\t<script type=\"text/javascript\" src=\"../clientjs/famultibutton.js\"></script>\n    \n    <link rel=\"stylesheet\" type=\"text/css\" href=\"../css/device.css\">\n</head>\n\n<body>\n    <div id=\"device\">\n        <h1>scriptr.io virtual device</h1>\n\n        <span class=\"toggle\">\n          <input type=\"checkbox\" onclick=\"channelManager.send($(this).attr('id'), $(this).prop('checked')?'on':'off' )\" id=\"onOff\" >\n          <label data-off=\"Off\" data-on=\"On\"></label>\n        </span>\n\n        <div type=\"scriptr.LCDDisplay\" id=\"display\" serverBinding=\"true\"\n            label=\"messages from the backend\">&gt;Ready</div>\n\n      \t<br />\n      \t<h3>slider</h3>\n        <div type=\"jquery.dynameterSlider\" id=\"slider\" serverBinding=\"true\"\n            min=\"0\" max=\"2000\"></div>\n\n        <br /><br />\n      \t<h3>send button</h3>\n      \t<div id=\"send\" type=\"faMultiButton\" mode=\"push\" serverBinding=\"true\"\n             icon=\"fa-arrow-right\" \n             onColor=\"#777\" offColor=\"#ccc\"\n             onBackgroundColor=\"#00CD15\" offBackgroundColor=\"#005008\"></div>\n      \t<br />\n  \t</div>\n  \n</body>\n\n</html>"},"scriptrdata":[]}}*#*#*/
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
    <script>\n\
      /* this identifies this unique virtual device, in case there are more than one using the same scriptr account */\n\
      DEVICE_ID = \"simple\"\n\
    </script>\n\
\n\
	<script src=\"../clientjs/widgetManager.js\"></script>\n\
    <script src=\"../clientjs/channelManager.js\"></script>\n\
\n\
    <!-- pretty web fonts -->\n\
    <script src=\"http://use.edgefonts.net/vt323.js\"></script>\n\
\n\
  \n\
  	<!-- Fancy Button -->\n\
    <link rel=\"stylesheet\" href=\"../css/fancyToggle.css\"> \n\
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
</head>\n\
\n\
<body>\n\
    <div id=\"device\">\n\
        <h1>scriptr.io virtual device</h1>\n\
\n\
        <span class=\"toggle\">\n\
          <input type=\"checkbox\" onclick=\"channelManager.send($(this).attr(\'id\'), $(this).prop(\'checked\')?\'on\':\'off\' )\" id=\"onOff\" >\n\
          <label data-off=\"Off\" data-on=\"On\"></label>\n\
        </span>\n\
\n\
        <div type=\"scriptr.LCDDisplay\" id=\"display\" serverBinding=\"true\"\n\
            label=\"messages from the backend\">&gt;Ready</div>\n\
\n\
      	<br />\n\
      	<h3>slider</h3>\n\
        <div type=\"jquery.dynameterSlider\" id=\"slider\" serverBinding=\"true\"\n\
            min=\"0\" max=\"2000\"></div>\n\
\n\
        <br /><br />\n\
      	<h3>send button</h3>\n\
      	<div id=\"send\" type=\"faMultiButton\" mode=\"push\" serverBinding=\"true\"\n\
             icon=\"fa-arrow-right\" \n\
             onColor=\"#777\" offColor=\"#ccc\"\n\
             onBackgroundColor=\"#00CD15\" offBackgroundColor=\"#005008\"></div>\n\
      	<br />\n\
  	</div>\n\
  \n\
</body>\n\
\n\
</html>';  response.write(content);response.close();			