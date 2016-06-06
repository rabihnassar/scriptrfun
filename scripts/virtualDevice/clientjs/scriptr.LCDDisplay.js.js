/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"$.widget( \"scriptr.LCDDisplay\", {\n    // Default options.\n    options: {\n        html: \"> READY\"\n    },\n    _create: function() {\n        this.element.addClass(\"LCDDisplay\")\n        \n        this.html = this.element.html\n        this.element.html(\"\")\n        this.label = this.element.attr(\"label\")\n        \n        //var text = this.options.text;\n        this._TitleNode = $( \"<div class='label'></div>\" ).appendTo(this.element)\n        this._TitleNode.html(this.label)\n        this._displayNode = $( \"<div class=''></div>\" ).appendTo(this.element)\n        this._displayNode.addClass( \"display\" )\n        this.refresh()\n    },\n    _setOption: function( key, value ) {\n        if ( key === \"text\" ) {\n            this._super( key, value );\n        }\n    },\n    _setOptions: function( options ) {\n        this._super( options );\n        this.refresh();\n    },\n    refresh: function() {\n        this._displayNode.html(this.options.text);\n    },\n    text: function(html) {\n        // No value passed, act as a getter.\n        if ( html === undefined ) {\n            return this.options.html;\n        }\n \n        // Value passed, act as a setter.\n        this.options.html = html\n        this._displayNode.html( html );\n    }\n})\n"},"scriptrdata":[]}}*#*#*/
var content= '$.widget( \"scriptr.LCDDisplay\", {\n\
    // Default options.\n\
    options: {\n\
        html: \"> READY\"\n\
    },\n\
    _create: function() {\n\
        this.element.addClass(\"LCDDisplay\")\n\
        \n\
        this.html = this.element.html\n\
        this.element.html(\"\")\n\
        this.label = this.element.attr(\"label\")\n\
        \n\
        //var text = this.options.text;\n\
        this._TitleNode = $( \"<div class=\'label\'></div>\" ).appendTo(this.element)\n\
        this._TitleNode.html(this.label)\n\
        this._displayNode = $( \"<div class=\'\'></div>\" ).appendTo(this.element)\n\
        this._displayNode.addClass( \"display\" )\n\
        this.refresh()\n\
    },\n\
    _setOption: function( key, value ) {\n\
        if ( key === \"text\" ) {\n\
            this._super( key, value );\n\
        }\n\
    },\n\
    _setOptions: function( options ) {\n\
        this._super( options );\n\
        this.refresh();\n\
    },\n\
    refresh: function() {\n\
        this._displayNode.html(this.options.text);\n\
    },\n\
    text: function(html) {\n\
        // No value passed, act as a getter.\n\
        if ( html === undefined ) {\n\
            return this.options.html;\n\
        }\n\
 \n\
        // Value passed, act as a setter.\n\
        this.options.html = html\n\
        this._displayNode.html( html );\n\
    }\n\
})\n\
';  response.write(content);response.close();			