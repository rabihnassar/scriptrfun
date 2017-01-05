function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++) 
  {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam) 
    {
      return sParameterName[1];
    }
  }
}

function Error(code, message, position) {
  this.code = code, this.message = message, this.position = position
  
  this.toString = function() {
    return "Error [" + this.code + "] - at position:" + this.position + ", "+  this.message
  }  
}

var logLevel = ["DEBUG", "INFO", "WARN", "ERROR"]

function template(msg) {
  return "<div class='message'><span class='timestamp'>"+msg.timestamp+"</span><span class='level'>"+logLevel[msg.level]+
    "</span><span class='messageTxt txt"+msg.level+"'>"+syntaxHighlight(msg.txt)+"</span></div>" 
}

function template2(msg) {
  return "<div class='message'><span class='timestamp'>"+msg.timestamp+"</span><span class='level'>"+msg.level+
    "</span><span class='messageTxt txt"+msg.level+"'>"+syntaxHighlight(msg.message)+"</span></div>" 
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

window.ttt = {}

function Commands() {
  //var commands = []
  var map = {}
  
  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  }

  this.add = function(command) {
	//commands.push(command)
    map[command.command]=command
  }

  this.exec = function(command, term) {
    var t = command.split(" ")
    var params
    if (t.length>1) params = command.substring(command.indexOf(" ")+1)

    if (params && (params.indexOf('-help')>=0)) {
	  term.exec("help "+t[0], true)
    } else {
      scriptrCommand = t[0]

      if (map[scriptrCommand]) map[scriptrCommand].handler(params, term);
      else if (command.trim()!="") term.exec("post "+command) //map["post"].handler(command, term)
    }
  }
  
  this.add({
    command: "help",
    handler: function(params, term) {
      if (params) {
        if (map[params]) {
          var html = (typeof map[params].help == "string")?map[params].help:jQuery("#"+map[params].help.id).html()

          if (html) {
            var template = _.template(html)
            html = template(map[params].help.values)
          } else html='No help found'

          term.echo("<b>"+params+"</b> - "+html, {raw:true})
		  term.echo(" ")
        } else {
          term.echo("<b>"+params+"</b> - not a command.", {raw:true})
		  term.echo(" ")
        }
      } else {

        var help = jQuery("#help-help").html() 
        var template = _.template(help)
        
        var c=[];for(var k in map) c.push(k);c.sort()
        var s = ""
        c.forEach(function(k){
          s+="<span class='helpCmd'>"+k+"</span>&nbsp;&nbsp;&nbsp;&nbsp;"
        })

        var html = template({commands: s})
        
        term.echo(html, {raw:true})
      }
    },
    help: {id: "help-duh"}
  })
  
  this.add({
    command: 'history',
    handler: function(params, term) {
      term.history().data().forEach(function(h) {term.echo(h)})
    },
    help: "Shows list of typed in commands."
  })

  this.add({
    command: 'clear',
    handler: function(params, term) {
      term.clear()
    },
    help: "Clears the screen."
  })
  
  this.add({
    command: 'echo',
    handler: function(params, term) {
      term.echo(params)
    },
  })
  
  var self = this
  
  this.add({
    command: 'mapCommand',
    handler: function(params, term) {
      var help = ""
      var paramList = []
      var t = params.split(" ")
      paramList = t
      if (params.indexOf('-delete')>0) {
        delete map[t[0]]
      } else {
        if (params.indexOf('-description')>0) {
          help = params.substring(params.indexOf('-description')+'-description'.length)
          params.substring(params.indexOf('-description'))
        }

        var noresponse = params.indexOf('-noresponse')>0
        var nolog = params.indexOf('-nolog')>0

        
        self.add({
          command: t[0],
          handler: function(params, term){
            var json = {}
            params = params.split(" ")
            i = 0

            params.forEach(function() {
              json[paramList[i+1]] = params[i]
              i++
            })
            var command = "post "+t[0]+" -p "+JSON.stringify(json)+ (noresponse?" -noresponse":"") + (nolog?" -nolog":"")        
            term.exec(command, true)
          },
          help: help
        })
      }
    },
    help: "Map paramters to simplify invoking scripts from command line without having to create a JSON."
    
  })
}

function setup(term) {
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
            term.echo(template(msg), {raw:true}) 
      }
    }

    client.onclose = function(event) {
      var msg = JSON.parse(event.data)
      if (typeof(msg.type) != "undefined") term.echo(template(msg), {raw:true}) 
    }
  }) 

}

jQuery(document).ready(
  function($) {
  	window.scriptrCommands = new Commands()

    $("#helpSection").load('help.html', function() {
      var welcome = $("#welcome").html()
      var greeting = $("#greeting").html()


      var t=$('body').terminal(
       function(command, term) {
         window.scriptrCommands.exec(command, term)
        }, { 
          prompt: 'scriptr.io>', 
          greetings: "", 
          historyFilter: function (h) {
            var t = h.trim().split(" ")

            if (t.length>1) {
              var arg=(t[1].split("="))[0]
              if ((t[0]=='set') && (arg=='token')) return false
            } 

            return true
          }
        }      
      )

      t.echo(welcome, {raw:true})
      t.echo(greeting, {raw:true})
      window.terminal = t

      var token = GetURLParameter('token')
      if (token) t.exec("set token="+token, true)

      var autoexecUrl = '../../Autoexec.terminal' + (token?"?auth_token="+token:"")  
      
      jQuery.get(autoexecUrl, function(data) {
        t.pause()
        t.echo("Autoexec.terminal found. Running it:")
        data.split("\n").forEach(function(command) {
          if (!(command.trim().indexOf('#')==0)) t.exec(command, true)
        })
        t.resume()
      });

      t.pause()
      var command = GetURLParameter('command')
      if (command) t.exec(command)
      t.resume()
    })

    
    
    //setup(t)
  }
);



