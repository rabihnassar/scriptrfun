
// Modify underscore template variable delimiters to Mustache style 
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
}


/*
 *	Formatting etc.
 */
var logLevel = ["DEBUG", "INFO", "WARN", "ERROR"]

function template(msg) {
  return "<div class='message'><span class='timestamp'>"+msg.timestamp+"</span><span class='level'>"+logLevel[msg.level]+
    "</span><span class='messageTxt txt"+msg.level+"'>"+syntaxHighlight(msg.txt)+"</span></div>" 
}

function template2(msg) {
  return "<div class='message'><span class='timestamp'>"+msg.timestamp+"</span><span class='level'>"+msg.level+
    "</span><span class='messageTxt txt"+msg.level+"'>"+syntaxHighlight(msg.message)+"</span></div>" 
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

/*
 *	Utility
 */

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


/*
 *	Command interpreter
 */
window.scriptr.terminal.Interpreter = (function () {
  var map = {}
  var term = null
  
  window.scriptr.terminal.interpreter = this

  function add(command) {
    map[command.command]=command
  }

  function exec(command) {
    var t = command.split(" ")
    var params
    if (t.length>1) params = command.substring(command.indexOf(" ")+1)

    if (params && (params.indexOf('-help')>=0)) {
      term.exec("help "+t[0], true)
    } else {
      scriptrCommand = t[0]

      if (map[scriptrCommand]) map[scriptrCommand].handler(params, term);
      else if ((command.trim()!="") && (map["post"])) {
        term.history().disable()
        term.exec("post "+command)
        term.history().enable()
      } 
    }
  }

  return {
    setTerminal: function(terminal) {
      term = terminal
    },
 	add: function(command) {
      add(command)
    },
    exec: function(command, term) {
      exec(command, term)
    },
    hasCommand: function(command) {
      return map[command]!=null
    },
    getCommandsList: function() {
      return _.allKeys(map) 
    },
    getCommand: function(command) {
      return map[command]
    }
  }
})()
  
/*
 * 	Native commands
 */
window.scriptr.terminal.Interpreter.add({
  command: 'echo',
  handler: function(params, term) {
    term.echo(params)
  },
})

window.scriptr.terminal.Interpreter.add({
  command: 'about',
  handler: function(params, term) {
    var welcome = $("#welcome").html()
    var greeting = $("#greeting").html()
    term.echo(welcome, {raw:true})
    term.echo(greeting, {raw:true})
  },
  help: "try it!"
})

window.scriptr.terminal.Interpreter.add({
  command: 'history',
  handler: function(params, term) {
    if (params && (params.trim()=='-clear')) term.history().clear();
    else term.history().data().forEach(function(h) {term.echo(h)})
      },
  help: {id: "help-history"}
})

window.scriptr.terminal.Interpreter.add({
  command: 'clear',
  handler: function(params, term) {
    term.clear()
  },
  help: "Clears the screen."
})

window.scriptr.terminal.Interpreter.add({
  command: "help",
  handler: function(params, term) {
    if (params) {
      var i = window.scriptr.terminal.Interpreter
      if (i.hasCommand(params)) {
        var html = (typeof i.getCommand(params).help == "string")?i.getCommand(params).help:jQuery("#"+i.getCommand(params).help.id).html()

        if (html) {
          var template = _.template(html)
          html = template(i.getCommand(params).help.values)
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

      var c = window.scriptr.terminal.Interpreter.getCommandsList();c.sort()
      
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

window.scriptr.terminal.Interpreter.add({
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

      window.scriptr.terminal.Interpreter.add({
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
          term.history().disable()
          term.exec(command, true)
          term.history().enable()
        },
        help: help
      })
    }
  },
  help: "Map paramters to simplify invoking scripts from command line without having to create a JSON."
})

window.scriptr.terminal.Interpreter.add({
  command: 'theme',
  handler: function(params, term) {
    switch(params.toLowerCase()){
      case "default":
        $('.terminal').removeClass('white');
        $('.cmd').removeClass('white');
        break;
      case "white":
        $('.terminal').addClass('white');
        $('.cmd').addClass('white');
        break;
      default:
        term.echo('Theme not found.')
    }
  },
  help: "Changes the terminal theme. It can be either 'white' or 'default'."
})

/*
 * Load and execute Autoexec
 */
function autoexec(t) {
  var autoexecUrl = '/Autoexec.terminal' + (window.scriptr.terminal.token?"?auth_token="+window.scriptr.terminal.token:"")  

  jQuery.get(autoexecUrl, function(data) {
    // we don't want autoexec commands in the history, suppress history saving when running autoexec 
    t.history().disable() // execute before pause, it doesn't work after
    t.pause()
    t.echo("Running commands listed in Autoexec.terminal -")
    data.split("\n").forEach(function(command) {
      if (!(command.trim().indexOf('#')==0)) t.exec(command, true)
        })
    t.resume()
    t.history().enable()
  });
}

jQuery(document).ready(function($) {
  
  $("#helpSection").load('help.html', {'auth_token': window.scriptr.terminal.token } , function(){
      var terminal = $('#terminal').terminal(
        function(command, term) {
          window.scriptr.terminal.Interpreter.exec(command)
        }, { 
          prompt: window.scriptr.terminal.prompt, 
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
      
      window.scriptr.terminal.Interpreter.setTerminal(terminal)

      var welcome = $("#welcome").html()
      var greeting = $("#greeting").html()
      terminal.echo(welcome, {raw:true})
      terminal.echo(greeting, {raw:true})

      var token =  window.scriptr.terminal.token;
      if (token) terminal.exec("set token="+token, true);
     
      autoexec(terminal)
      
      
  })
})
