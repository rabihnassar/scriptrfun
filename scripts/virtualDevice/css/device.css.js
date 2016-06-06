/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"body {\n    padding: 0px;\n    margin: 5px;\n    font-family: \"Verdana\", sans-serif; \n}\n\nh1 {\n    color: #343434;\n    font-size: 3.4em;\n    font-family: \"vt323\", \"bpdotssquaresregular\", \"ditedregular\", \"Verdana\", sans-serif;\n    font-weight: 100;\n    letter-spacing: 2px;\n    margin-top: -15px;\n    text-align: center;\n}\n\n#device {\n    background: #5A5A5C;\n    background: #A1ADA9;\n    border-radius: 20px;\n    padding: 20px;\n\twidth: 800px;\n}\n"},"scriptrdata":[]}}*#*#*/
var content= 'body {\n\
    padding: 0px;\n\
    margin: 5px;\n\
    font-family: \"Verdana\", sans-serif; \n\
}\n\
\n\
h1 {\n\
    color: #343434;\n\
    font-size: 3.4em;\n\
    font-family: \"vt323\", \"bpdotssquaresregular\", \"ditedregular\", \"Verdana\", sans-serif;\n\
    font-weight: 100;\n\
    letter-spacing: 2px;\n\
    margin-top: -15px;\n\
    text-align: center;\n\
}\n\
\n\
#device {\n\
    background: #5A5A5C;\n\
    background: #A1ADA9;\n\
    border-radius: 20px;\n\
    padding: 20px;\n\
	width: 800px;\n\
}\n\
';  response.write(content);response.close();			