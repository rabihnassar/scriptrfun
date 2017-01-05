jQuery(document).ready(function($) {

  function getUid() {
    return Date.now()
  }  
  
  function send(params, uid) {
    var t = params.split(" ")

    var message = {
      "method":t[0], //the "translate" method is a user script that translates messages from English to French.
      "id": uid, //will be returned as part of the generated id, in order to identify the response
    }
    var p = parseForParam(params, "-p", true)
    if (p) message.params = p

    window.websocketClient.send(JSON.stringify(message));        
  }

  var ws = {
    command: "ws",
    handler: function(params, term){
      var uid = getUid()

      var timestamp = (new Date()).getTime()
      var showResponse = (params.indexOf("-noresponse")<0)
      showLogs = (params.indexOf("-nolog")<0)

      if (!window.websocketClient) {
        term.pause()
        window.websocketClient = new WebSocket("wss://api.scriptr.io/" + SCRIPTR_TOKEN);
      } else {
        term.pause()
        send(params, uid)
      }

      window.websocketClient.onopen = function (event) {
        send(params, uid)
      }

      window.websocketClient.onclose = function (event) {
        term.resume()
      }

      window.websocketClient.onerror = function (event) {
        term.resume()
      }
      
      // Receive message and display
      window.websocketClient.onmessage = function(event) {
        var data = JSON.parse(event.data)
        var id = data.id.split('-') 

        if ((id.length>1) && (id[1]==uid)) {
          var hiddenLog = false
          if (showLogs) {
            try {
              if (data.scriptLog) {
                term.echo(" ")
                term.echo("Log (extracted from response.scriptLog):")
                data.scriptLog.forEach(function(l) {
                  term.echo(template2(l), {raw:true})
                })
              }
              delete data.scriptLog
              hiddenLog = true
            } catch(e) {}
          }
          if (showResponse) {
            term.echo(" ")
            term.echo("Script response" + (hiddenLog?" (hiding response.scriptLog):":":"))
            term.echo(JSON.stringify(data,null,4))
          }
          term.echo(" ")
          term.echo("Request execution time: "+((new Date()).getTime()-timestamp)+"ms",{raw:true})
          term.echo(" ")

          term.resume()
        }
      }

      // Reopen connection

    },
    help: {id:"help-ws"}
  }
  window.scriptrCommands.add(ws)
})
