/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"<h1>Google Chart/Scriptr data</h1>\n\nTHis is a demo. hello\n<iframe width=\"600px\" height=\"500px\" src=\"//rabih.scriptrapps.io/demo/pieChart\" frameborder=\"0\"></iframe>\n\n<iframe width=\"600px\" height=\"500px\" src=\"//rabih.scriptrapps.io/demo/pieChart\" frameborder=\"0\"></iframe>"},"scriptrdata":[]}}*#*#*/
var content= '<h1>Google Chart/Scriptr data</h1>\n\
\n\
THis is a demo. hello\n\
<iframe width=\"600px\" height=\"500px\" src=\"//rabih.scriptrapps.io/demo/pieChart\" frameborder=\"0\"></iframe>\n\
\n\
<iframe width=\"600px\" height=\"500px\" src=\"//rabih.scriptrapps.io/demo/pieChart\" frameborder=\"0\"></iframe>';  response.write(content);response.close();			