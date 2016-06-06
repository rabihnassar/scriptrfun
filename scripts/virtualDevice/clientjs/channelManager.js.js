/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"\nvar SEND_CHANNEL = \"virtualDeviceSend\"\nvar RECEIVE_CHANNEL = \"virtualDeviceReceive\" \n\nchannelManager = new(function(){\n    var _boundWidgets = {}\n    \n    // Open websocket to scriptr\n    var client = new WebSocket(\"wss://api.scriptr.io/TThDN0E0OURCQQ==\");\n    \n    // Subscribe to events sent by scriptr to device\n    client.onopen = function (event) {\n        client.send(JSON.stringify({\n            \"method\":\"Subscribe\",\n            \"params\":{\n                \"channel\": RECEIVE_CHANNEL\n            }\n        }), client);\n    }\n\n    // Receive message and dispatch\n    client.onmessage = function(event) {\n        var message = JSON.parse(event.data);\n        try{\n            for(id in _boundWidgets) {\n                if (id==message.id) _boundWidgets[id].c(_boundWidgets[id].w, message.payload)\n            } \n        }catch(e){\n            console.log(e)\n        }\n    }\n    \n    this.bindWidget = function (widget, callback) {\n        if (widget.attr(\"id\")) {\n            _boundWidgets[widget.attr(\"id\")] = {w:widget, c:callback}\n        }\n    }\n    \n    this.send = function(sourceId, value) {\n        var message = {\n            \"method\": \"Publish\",  \n            \"params\":{\n                \"channel\": SEND_CHANNEL,\n                \"message\": JSON.stringify(\n                    {\n                        id: sourceId,\n                      \tdeviceId: DEVICE_ID || \"scriptrDevice\",\n                        value: value\n                    }\n                )\n            }\n        }\n        client.send(JSON.stringify(message))\n    }\n}) \n"},"scriptrdata":[]}}*#*#*/
var content= '\n\
var SEND_CHANNEL = \"virtualDeviceSend\"\n\
var RECEIVE_CHANNEL = \"virtualDeviceReceive\" \n\
\n\
channelManager = new(function(){\n\
    var _boundWidgets = {}\n\
    \n\
    // Open websocket to scriptr\n\
    var client = new WebSocket(\"wss://api.scriptr.io/TThDN0E0OURCQQ==\");\n\
    \n\
    // Subscribe to events sent by scriptr to device\n\
    client.onopen = function (event) {\n\
        client.send(JSON.stringify({\n\
            \"method\":\"Subscribe\",\n\
            \"params\":{\n\
                \"channel\": RECEIVE_CHANNEL\n\
            }\n\
        }), client);\n\
    }\n\
\n\
    // Receive message and dispatch\n\
    client.onmessage = function(event) {\n\
        var message = JSON.parse(event.data);\n\
        try{\n\
            for(id in _boundWidgets) {\n\
                if (id==message.id) _boundWidgets[id].c(_boundWidgets[id].w, message.payload)\n\
            } \n\
        }catch(e){\n\
            console.log(e)\n\
        }\n\
    }\n\
    \n\
    this.bindWidget = function (widget, callback) {\n\
        if (widget.attr(\"id\")) {\n\
            _boundWidgets[widget.attr(\"id\")] = {w:widget, c:callback}\n\
        }\n\
    }\n\
    \n\
    this.send = function(sourceId, value) {\n\
        var message = {\n\
            \"method\": \"Publish\",  \n\
            \"params\":{\n\
                \"channel\": SEND_CHANNEL,\n\
                \"message\": JSON.stringify(\n\
                    {\n\
                        id: sourceId,\n\
                      	deviceId: DEVICE_ID || \"scriptrDevice\",\n\
                        value: value\n\
                    }\n\
                )\n\
            }\n\
        }\n\
        client.send(JSON.stringify(message))\n\
    }\n\
}) \n\
';  response.write(content);response.close();			