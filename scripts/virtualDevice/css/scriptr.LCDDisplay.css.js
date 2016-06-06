/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"/* scriptr.LCDDisplay SCRIPTR_COMMENT\n\n.LCDDisplay {\n    zoom:1;\n}\n.LCDDisplay .label {\n    color: #555555;\n    margin-top: 15px;\n    font-family: monospace;\n    font-size: 1.5em;\n}\n.LCDDisplay .display {\n    background: #889678;\n    border-radius: 10px;\n    border-style: dotted;\n    border-width: 1px;\n    border-color: #666;\n    color: #444433;\n    font-size: 3em;\n    font-family: \"vt323\", \"bpdotssquaresregular\", \"Verdana\", sans-serif;\n    margin: 2px;\n    padding: 10px;\n    padding-top:0px;\n    text-align: left;\n}\n\n.LCDDisplaySmall .display {\n    zoom: 0.7;\n}"},"scriptrdata":[]}}*#*#*/
var content= '/* scriptr.LCDDisplay */\n\
\n\
.LCDDisplay {\n\
    zoom:1;\n\
}\n\
.LCDDisplay .label {\n\
    color: #555555;\n\
    margin-top: 15px;\n\
    font-family: monospace;\n\
    font-size: 1.5em;\n\
}\n\
.LCDDisplay .display {\n\
    background: #889678;\n\
    border-radius: 10px;\n\
    border-style: dotted;\n\
    border-width: 1px;\n\
    border-color: #666;\n\
    color: #444433;\n\
    font-size: 3em;\n\
    font-family: \"vt323\", \"bpdotssquaresregular\", \"Verdana\", sans-serif;\n\
    margin: 2px;\n\
    padding: 10px;\n\
    padding-top:0px;\n\
    text-align: left;\n\
}\n\
\n\
.LCDDisplaySmall .display {\n\
    zoom: 0.7;\n\
}';  response.write(content);response.close();			