var $ptty

function Error(code, message, position) {
  this.code = code, this.message = message, this.position = position
  
  this.toString = function() {
    return "Error [" + this.code + "] - at position:" + this.position + ", "+  this.message
  }  
}

var logLevel = ["DEBUG", "INFO", "WARN", "ERROR"]

function template(msg) {
  return "<div class='message'><span class='timestamp'>"+msg.timestamp+"</span><div class='level'>"+logLevel[msg.level]+
    "</div><span class='messageTxt txt"+msg.level+"'>"+syntaxHighlight(msg.txt)+"</span></div>" 
}

function syntaxHighlight(json) {
  if (typeof json != "string") json = JSON.stringify(json)
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
    var cls = 'number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'key';
      } else {
        cls = 'string';
      }
    } else if (/true|false/.test(match)) {
      cls = 'boolean';
    } else if (/null/.test(match)) {
      cls = 'null';
    }
    return '<span class="' + cls + '">' + match + '</span>';
  });
}

function parseForParam(command, paramName, expectJson) {
  var t = command.trim().split(paramName+" ")
  var params
  if (t.length==2) {
    try{
      params = t[1].trim()
      if (expectJson) params = JSON.parse(params.split("}")[0] + "}"); else params = params.split(" ")[0].trim()
      return params
    } catch (e) {
      throw new Error (300, (expectJson)?(paramName+" parameter JSON argument not valid"):(paramName+" argument not valid"), command.indexOf(paramName))
    }
  }
}

function http(method, url, script, params, showResponse, token, success) {
  if (!token) token = SCRIPTR_TOKEN

  var url = "https://"+url+"/"+script
	var timestamp = (new Date()).getTime()
  
  var p = {
    url: url,
    data: params,
    headers: {
      'Authorization':'bearer '+token
    },
    method: method,
    dataType: 'json',
    success: function(data){
      $ptty.echo("Request execution time: "+((new Date()).getTime()-timestamp)+"ms")
      if (success) success(data)
      var msg = {
        timestamp: Date(),
        level: 0,
        txt: JSON.stringify(data,null,4)
      }
      if (showResponse) $ptty.echo(template(msg))
    },
    error: function(data) {
      if (data.responseJSON.response.metadata.status == 'failure') {
        $ptty.echo("Request execution time: "+((new Date()).getTime()-timestamp)+"ms")
        $ptty.echo("operation failed with error code: "+data.responseJSON.response.metadata.errorCode)
        $ptty.echo(data.responseJSON.response.metadata.errorDetail)
      }
    }
  }
  $.ajax(p)
}

function setup(callback) {
  channelManager = new(function(){
    // Open websocket to scriptr
    var client = new WebSocket("wss://api.scriptr.io/" + SCRIPTR_TOKEN);

    // Subscribe to events sent by scriptr to device
    client.onopen = function (event) {
      client.send(JSON.stringify({
        "method":"Subscribe",
        "params":{
          "channel": RECEIVE_CHANNEL
        }
      }), client);
    }

    // Receive message and display
    client.onmessage = function(event) {
      var msg = JSON.parse(event.data)
      if (typeof(msg.type) != "undefined") {
	      //if (msg.level==3) 
            callback(template(msg)) 
          
      }
    }

    client.onclose = function(event) {
      var msg = JSON.parse(event.data)
      if (typeof(msg.type) != "undefined") callback(template(msg)) 
    }
  }) 

}

$(document).ready(function() {

  $ptty = $('#terminal').Ptty({ 
//    theme: "scriptr",
    caret: "|",
    ps: "scriptr.io>",
    i18n : {
      welcome : 'Welcome to scriptr.io command line interface.\n\n',
      error_not_found : "command doesn't exist"
    }
  })
  
  $print = $ptty.echo 
  
  for (var i=0; i<scriptrCommands.length; i++) {
	  $ptty.register('command', scriptrCommands[i])
  }
  
  setup($ptty.echo)  
})

