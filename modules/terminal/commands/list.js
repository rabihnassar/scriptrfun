jQuery(document).ready(function($) {
  
  function list(refresh, term) {
    var token
    if (!token) token = SCRIPTR_TOKEN

    term.pause()

    var url = "https://api.scriptr.io/modules/terminal/backend/listScripts"
    var timestamp = (new Date()).getTime()

    var p = {
      url: url,
      data: {"refresh": refresh},
      headers: {
        'Authorization':'bearer '+token
      },
      method: "get",
      dataType: 'json',
      success: function(data){
        data.response.result.forEach(function(s){term.echo(s)})
        term.echo(" ")
        term.resume()
      },
      error: function(data) {
        if (data.responseJSON.response.metadata.status == 'failure') {
          term.echo("Request execution time: "+((new Date()).getTime()-timestamp)+"ms",{raw:true})
          term.echo("operation failed with error code: "+data.responseJSON.response.metadata.errorCode,{raw:true})
          term.echo(data.responseJSON.response.metadata.errorDetail,{raw:true})
          term.resume()
        }
      }
    }
    $.ajax(p)
  }

  window.scriptrCommands.add({
    command: "list",
    handler: function(params, term){
      var refresh=false
      if (params) refresh = (params.indexOf("-r")>0)

      list(refresh, term)

      //      for (var i=0; i<data.response.result.length; i++) $ptty.echo(data.response.result[i])
    },
    help: {id:"help-list"}
  })
})