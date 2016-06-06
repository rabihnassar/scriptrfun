/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"\n.toggle {\n  position:relative;\n  display:inline-block;\n  width:40px;\n  height:60px;\n  background-color:#bbb;\n  -webkit-border-radius:4px;\n  -moz-border-radius:4px;\n  border-radius:4px;\n  text-align:center;\n  zoom: 1.5;\n}\n\n.toggle input {\n  width:100%;\n  height:100%;\n  margin:0 0;\n  padding:0 0;\n  position:absolute;\n  top:0;\n  right:0;\n  bottom:0;\n  left:0;\n  z-index:2;\n  cursor:pointer;\n  opacity:0;\n  filter:alpha(opacity=0);\n}\n\n.toggle label {\n  display:block;\n  position:absolute;\n  top:1px;\n  right:1px;\n  bottom:1px;\n  left:1px;\n  background-image:-webkit-linear-gradient(top,#fff 0%,#ddd 50%,#fff 50%,#eee 100%);\n  background-image:-moz-linear-gradient(top,#fff 0%,#ddd 50%,#fff 50%,#eee 100%);\n  background-image:-ms-linear-gradient(top,#fff 0%,#ddd 50%,#fff 50%,#eee 100%);\n  background-image:-o-linear-gradient(top,#fff 0%,#ddd 50%,#fff 50%,#eee 100%);\n  background-image:linear-gradient(top,#fff 0%,#ddd 50%,#fff 50%,#eee 100%);\n  -webkit-box-shadow:0 2px 3px rgba(0,0,0,0.4),\n    inset 0 -1px 1px #888,\n    inset 0 -5px 1px #bbb,\n    inset 0 -6px 0 white;\n  -moz-box-shadow:0 2px 3px rgba(0,0,0,0.4),\n    inset 0 -1px 1px #888,\n    inset 0 -5px 1px #bbb,\n    inset 0 -6px 0 white;\n  box-shadow:0 2px 3px rgba(0,0,0,0.4),\n    inset 0 -1px 1px #888,\n    inset 0 -5px 1px #bbb,\n    inset 0 -6px 0 white;\n  -webkit-border-radius:3px;\n  -moz-border-radius:3px;\n  border-radius:3px;\n  font:normal 11px Arial,Sans-Serif;\n  color:#666;\n  text-shadow:0 1px 0 white;\n  cursor:text;\n}\n\n.toggle label:before {\n  content:attr(data-off);\n  position:absolute;\n  top:6px;\n  right:0;\n  left:0;\n  z-index:4;\n}\n\n.toggle label:after {\n  content:attr(data-on);\n  position:absolute;\n  right:0;\n  bottom:11px;\n  left:0;\n  color:#666;\n  text-shadow:0 -1px 0 #eee;\n}\n\n.toggle input:checked + label {\n  background-image:-webkit-linear-gradient(top,#eee 0%,#ccc 50%,#fff 50%,#eee 100%);\n  background-image:-moz-linear-gradient(top,#eee 0%,#ccc 50%,#fff 50%,#eee 100%);\n  background-image:-ms-linear-gradient(top,#eee 0%,#ccc 50%,#fff 50%,#eee 100%);\n  background-image:-o-linear-gradient(top,#eee 0%,#ccc 50%,#fff 50%,#eee 100%);\n  background-image:linear-gradient(top,#eee 0%,#ccc 50%,#fff 50%,#eee 100%);\n  -webkit-box-shadow:0 0 1px rgba(0,0,0,0.4),\n    inset 0 1px 7px -1px #ccc,\n    inset 0 5px 1px #fafafa,\n    inset 0 6px 0 white;\n  -moz-box-shadow:0 0 1px rgba(0,0,0,0.4),\n    inset 0 1px 7px -1px #ccc,\n    inset 0 5px 1px #fafafa,\n    inset 0 6px 0 white;\n  box-shadow:0 0 1px rgba(0,0,0,0.4),\n    inset 0 1px 7px -1px #ccc,\n    inset 0 5px 1px #fafafa,\n    inset 0 6px 0 white;\n}\n\n.toggle input:checked:hover + label {\n  -webkit-box-shadow:0 1px 3px rgba(0,0,0,0.4),\n    inset 0 1px 7px -1px #ccc,\n    inset 0 5px 1px #fafafa,\n    inset 0 6px 0 white;\n  -moz-box-shadow:0 1px 3px rgba(0,0,0,0.4),\n    inset 0 1px 7px -1px #ccc,\n    inset 0 5px 1px #fafafa,\n    inset 0 6px 0 white;\n  box-shadow:0 1px 3px rgba(0,0,0,0.4),\n    inset 0 1px 7px -1px #ccc,\n    inset 0 5px 1px #fafafa,\n    inset 0 6px 0 white;\n}\n\n.toggle input:checked + label:before {\n  z-index:1;\n  top:11px;\n}\n\n.toggle input:checked + label:after {\n  bottom:9px;\n  color:#aaa;\n  text-shadow:none;\n  z-index:4;\n}\n"},"scriptrdata":[]}}*#*#*/
var content= '\n\
.toggle {\n\
  position:relative;\n\
  display:inline-block;\n\
  width:40px;\n\
  height:60px;\n\
  background-color:#bbb;\n\
  -webkit-border-radius:4px;\n\
  -moz-border-radius:4px;\n\
  border-radius:4px;\n\
  text-align:center;\n\
  zoom: 1.5;\n\
}\n\
\n\
.toggle input {\n\
  width:100%;\n\
  height:100%;\n\
  margin:0 0;\n\
  padding:0 0;\n\
  position:absolute;\n\
  top:0;\n\
  right:0;\n\
  bottom:0;\n\
  left:0;\n\
  z-index:2;\n\
  cursor:pointer;\n\
  opacity:0;\n\
  filter:alpha(opacity=0);\n\
}\n\
\n\
.toggle label {\n\
  display:block;\n\
  position:absolute;\n\
  top:1px;\n\
  right:1px;\n\
  bottom:1px;\n\
  left:1px;\n\
  background-image:-webkit-linear-gradient(top,#fff 0%,#ddd 50%,#fff 50%,#eee 100%);\n\
  background-image:-moz-linear-gradient(top,#fff 0%,#ddd 50%,#fff 50%,#eee 100%);\n\
  background-image:-ms-linear-gradient(top,#fff 0%,#ddd 50%,#fff 50%,#eee 100%);\n\
  background-image:-o-linear-gradient(top,#fff 0%,#ddd 50%,#fff 50%,#eee 100%);\n\
  background-image:linear-gradient(top,#fff 0%,#ddd 50%,#fff 50%,#eee 100%);\n\
  -webkit-box-shadow:0 2px 3px rgba(0,0,0,0.4),\n\
    inset 0 -1px 1px #888,\n\
    inset 0 -5px 1px #bbb,\n\
    inset 0 -6px 0 white;\n\
  -moz-box-shadow:0 2px 3px rgba(0,0,0,0.4),\n\
    inset 0 -1px 1px #888,\n\
    inset 0 -5px 1px #bbb,\n\
    inset 0 -6px 0 white;\n\
  box-shadow:0 2px 3px rgba(0,0,0,0.4),\n\
    inset 0 -1px 1px #888,\n\
    inset 0 -5px 1px #bbb,\n\
    inset 0 -6px 0 white;\n\
  -webkit-border-radius:3px;\n\
  -moz-border-radius:3px;\n\
  border-radius:3px;\n\
  font:normal 11px Arial,Sans-Serif;\n\
  color:#666;\n\
  text-shadow:0 1px 0 white;\n\
  cursor:text;\n\
}\n\
\n\
.toggle label:before {\n\
  content:attr(data-off);\n\
  position:absolute;\n\
  top:6px;\n\
  right:0;\n\
  left:0;\n\
  z-index:4;\n\
}\n\
\n\
.toggle label:after {\n\
  content:attr(data-on);\n\
  position:absolute;\n\
  right:0;\n\
  bottom:11px;\n\
  left:0;\n\
  color:#666;\n\
  text-shadow:0 -1px 0 #eee;\n\
}\n\
\n\
.toggle input:checked + label {\n\
  background-image:-webkit-linear-gradient(top,#eee 0%,#ccc 50%,#fff 50%,#eee 100%);\n\
  background-image:-moz-linear-gradient(top,#eee 0%,#ccc 50%,#fff 50%,#eee 100%);\n\
  background-image:-ms-linear-gradient(top,#eee 0%,#ccc 50%,#fff 50%,#eee 100%);\n\
  background-image:-o-linear-gradient(top,#eee 0%,#ccc 50%,#fff 50%,#eee 100%);\n\
  background-image:linear-gradient(top,#eee 0%,#ccc 50%,#fff 50%,#eee 100%);\n\
  -webkit-box-shadow:0 0 1px rgba(0,0,0,0.4),\n\
    inset 0 1px 7px -1px #ccc,\n\
    inset 0 5px 1px #fafafa,\n\
    inset 0 6px 0 white;\n\
  -moz-box-shadow:0 0 1px rgba(0,0,0,0.4),\n\
    inset 0 1px 7px -1px #ccc,\n\
    inset 0 5px 1px #fafafa,\n\
    inset 0 6px 0 white;\n\
  box-shadow:0 0 1px rgba(0,0,0,0.4),\n\
    inset 0 1px 7px -1px #ccc,\n\
    inset 0 5px 1px #fafafa,\n\
    inset 0 6px 0 white;\n\
}\n\
\n\
.toggle input:checked:hover + label {\n\
  -webkit-box-shadow:0 1px 3px rgba(0,0,0,0.4),\n\
    inset 0 1px 7px -1px #ccc,\n\
    inset 0 5px 1px #fafafa,\n\
    inset 0 6px 0 white;\n\
  -moz-box-shadow:0 1px 3px rgba(0,0,0,0.4),\n\
    inset 0 1px 7px -1px #ccc,\n\
    inset 0 5px 1px #fafafa,\n\
    inset 0 6px 0 white;\n\
  box-shadow:0 1px 3px rgba(0,0,0,0.4),\n\
    inset 0 1px 7px -1px #ccc,\n\
    inset 0 5px 1px #fafafa,\n\
    inset 0 6px 0 white;\n\
}\n\
\n\
.toggle input:checked + label:before {\n\
  z-index:1;\n\
  top:11px;\n\
}\n\
\n\
.toggle input:checked + label:after {\n\
  bottom:9px;\n\
  color:#aaa;\n\
  text-shadow:none;\n\
  z-index:4;\n\
}\n\
';  response.write(content);response.close();			