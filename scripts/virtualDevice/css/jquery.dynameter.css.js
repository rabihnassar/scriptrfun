/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":".dynameter {\n    display: inline-block;\n}\n\n.dynameter div.ui-slider {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  zoom: 1;\n  display: inline-block;\n  height: 23px;\n  margin: 5px 22px 10px;\n  width: 155px;\n  height: 10px;\n  background-color: #333 !important;\n  background-image: none;\n}\n.dynameter div.ui-slider .ui-slider-handle {\n  margin-top: -5px;\n  width: 1em;\n  height: 1.4em;\n  border: 2px solid #000;\n  background-image: none;\n  background-color: #aaa;\n  cursor: pointer;\n  -webkit-box-shadow: 2px 2px 3px 1px #888888;\n  -moz-box-shadow: 2px 2px 3px 1px #888888;\n  box-shadow: 2px 2px 3px 1px #888888;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  border-radius: 5px;\n}\n\n\ndiv.dm-wrapperDiv {\n  display: block;\n    position: relative;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    zoom: 1;\n    overflow: hidden;\n    width: 200px;\n    height: 100px;\n    font-weight: lighter;\n    font-family: Arial, Helvetica, sans-serif;\n    font-family: \"vt323\", \"bpdotssquaresregular\", \"Verdana\", sans-serif;\n    font-size: 15px;\n    font-weight: bold;\n    line-height: 1;\n\n    display: inline-block;\n}\ndiv.dm-wrapperDiv * {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  zoom: 1;\n}\ndiv.dm-wrapperDiv div {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\ndiv.dm-wrapperDiv div.dm-bgClrDiv,\ndiv.dm-wrapperDiv div.dm-maskDiv {\n  width: 200px;\n  height: 100px;\n}\ndiv.dm-wrapperDiv div.dm-bgClrDiv,\ndiv.dm-wrapperDiv div.dm-maskDiv {\n  -webkit-border-radius: 100px 100px 0 0;\n  -moz-border-radius: 100px 100px 0 0;\n  -ms-border-radius: 100px 100px 0 0;\n  border-radius: 100px 100px 0 0;\n  border: 2px solid #999999;\n  border-bottom: 0;\n  -webkit-transform-origin: center bottom;\n  -moz-transform-origin: center bottom;\n  -ms-transform-origin: center bottom;\n  transform-origin: center bottom;\n}\ndiv.dm-wrapperDiv div.dm-bgClrDiv.normal {\n  background-color: #228b22;\n}\ndiv.dm-wrapperDiv div.dm-bgClrDiv.warn {\n  background-color: #daa520;\n}\ndiv.dm-wrapperDiv div.dm-bgClrDiv.error {\n  background-color: #ff0000;\n}\ndiv.dm-wrapperDiv div.dm-maskDiv {\n  background-color: #dddddd;\n  z-index: 4;\n}\ndiv.dm-wrapperDiv div.dm-innerDiv {\n  bottom: 0;\n  left: 20px;\n  -webkit-border-radius: 80px 80px 0 0;\n  -moz-border-radius: 80px 80px 0 0;\n  -ms-border-radius: 80px 80px 0 0;\n  border-radius: 80px 80px 0 0;\n  border-bottom: 1px solid #eeeeee;\n  width: 160px;\n  height: 80px;\n  padding-top: .7em;\n  background-color: #eeeeee;\n  text-align: center;\n  text-transform: uppercase;\n  z-index: 5;\n}\ndiv.dm-wrapperDiv div.dm-innerDiv p {\n  margin: 3px auto;\n  width: auto;\n  max-width: 85%;\n  overflow: hidden;\n  text-align: center;\n}\ndiv.dm-wrapperDiv div.dm-innerDiv p.dm-valueP {\n  font-size: 180%;\n    height: 45%;\n  line-height: .85;\n}\ndiv.dm-wrapperDiv div.dm-innerDiv p.dm-unitP {\n  margin-top: 0;\n  font-size: 75%;\n  font-weight: normal;\n}\ndiv.dm-wrapperDiv div.dm-innerDiv p.dm-labelP {\n  font-size: 100%;\n}\n"},"scriptrdata":[]}}*#*#*/
var content= '.dynameter {\n\
    display: inline-block;\n\
}\n\
\n\
.dynameter div.ui-slider {\n\
  -webkit-box-sizing: border-box;\n\
  -moz-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  margin: 0;\n\
  padding: 0;\n\
  zoom: 1;\n\
  display: inline-block;\n\
  height: 23px;\n\
  margin: 5px 22px 10px;\n\
  width: 155px;\n\
  height: 10px;\n\
  background-color: #333 !important;\n\
  background-image: none;\n\
}\n\
.dynameter div.ui-slider .ui-slider-handle {\n\
  margin-top: -5px;\n\
  width: 1em;\n\
  height: 1.4em;\n\
  border: 2px solid #000;\n\
  background-image: none;\n\
  background-color: #aaa;\n\
  cursor: pointer;\n\
  -webkit-box-shadow: 2px 2px 3px 1px #888888;\n\
  -moz-box-shadow: 2px 2px 3px 1px #888888;\n\
  box-shadow: 2px 2px 3px 1px #888888;\n\
  -webkit-border-radius: 5px;\n\
  -moz-border-radius: 5px;\n\
  border-radius: 5px;\n\
}\n\
\n\
\n\
div.dm-wrapperDiv {\n\
  display: block;\n\
    position: relative;\n\
    -webkit-box-sizing: border-box;\n\
    -moz-box-sizing: border-box;\n\
    -ms-box-sizing: border-box;\n\
    box-sizing: border-box;\n\
    margin: 0;\n\
    padding: 0;\n\
    zoom: 1;\n\
    overflow: hidden;\n\
    width: 200px;\n\
    height: 100px;\n\
    font-weight: lighter;\n\
    font-family: Arial, Helvetica, sans-serif;\n\
    font-family: \"vt323\", \"bpdotssquaresregular\", \"Verdana\", sans-serif;\n\
    font-size: 15px;\n\
    font-weight: bold;\n\
    line-height: 1;\n\
\n\
    display: inline-block;\n\
}\n\
div.dm-wrapperDiv * {\n\
  -webkit-box-sizing: border-box;\n\
  -moz-box-sizing: border-box;\n\
  -ms-box-sizing: border-box;\n\
  box-sizing: border-box;\n\
  margin: 0;\n\
  padding: 0;\n\
  zoom: 1;\n\
}\n\
div.dm-wrapperDiv div {\n\
  position: absolute;\n\
  bottom: 0;\n\
  left: 0;\n\
}\n\
div.dm-wrapperDiv div.dm-bgClrDiv,\n\
div.dm-wrapperDiv div.dm-maskDiv {\n\
  width: 200px;\n\
  height: 100px;\n\
}\n\
div.dm-wrapperDiv div.dm-bgClrDiv,\n\
div.dm-wrapperDiv div.dm-maskDiv {\n\
  -webkit-border-radius: 100px 100px 0 0;\n\
  -moz-border-radius: 100px 100px 0 0;\n\
  -ms-border-radius: 100px 100px 0 0;\n\
  border-radius: 100px 100px 0 0;\n\
  border: 2px solid #999999;\n\
  border-bottom: 0;\n\
  -webkit-transform-origin: center bottom;\n\
  -moz-transform-origin: center bottom;\n\
  -ms-transform-origin: center bottom;\n\
  transform-origin: center bottom;\n\
}\n\
div.dm-wrapperDiv div.dm-bgClrDiv.normal {\n\
  background-color: #228b22;\n\
}\n\
div.dm-wrapperDiv div.dm-bgClrDiv.warn {\n\
  background-color: #daa520;\n\
}\n\
div.dm-wrapperDiv div.dm-bgClrDiv.error {\n\
  background-color: #ff0000;\n\
}\n\
div.dm-wrapperDiv div.dm-maskDiv {\n\
  background-color: #dddddd;\n\
  z-index: 4;\n\
}\n\
div.dm-wrapperDiv div.dm-innerDiv {\n\
  bottom: 0;\n\
  left: 20px;\n\
  -webkit-border-radius: 80px 80px 0 0;\n\
  -moz-border-radius: 80px 80px 0 0;\n\
  -ms-border-radius: 80px 80px 0 0;\n\
  border-radius: 80px 80px 0 0;\n\
  border-bottom: 1px solid #eeeeee;\n\
  width: 160px;\n\
  height: 80px;\n\
  padding-top: .7em;\n\
  background-color: #eeeeee;\n\
  text-align: center;\n\
  text-transform: uppercase;\n\
  z-index: 5;\n\
}\n\
div.dm-wrapperDiv div.dm-innerDiv p {\n\
  margin: 3px auto;\n\
  width: auto;\n\
  max-width: 85%;\n\
  overflow: hidden;\n\
  text-align: center;\n\
}\n\
div.dm-wrapperDiv div.dm-innerDiv p.dm-valueP {\n\
  font-size: 180%;\n\
    height: 45%;\n\
  line-height: .85;\n\
}\n\
div.dm-wrapperDiv div.dm-innerDiv p.dm-unitP {\n\
  margin-top: 0;\n\
  font-size: 75%;\n\
  font-weight: normal;\n\
}\n\
div.dm-wrapperDiv div.dm-innerDiv p.dm-labelP {\n\
  font-size: 100%;\n\
}\n\
';  response.write(content);response.close();			