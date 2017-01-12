jQuery(document).ready(function($) {
  function getUser(f) {
    var p = {
      url: "/modules/terminal/backend/info?auth_token="+window.scriptr.terminal.token,
      method: "get",
      dataType: 'json',
      success: function(data) {
        f(data.response.result.user.id?data.response.result.user.id:data.response.result.user.name)
      },
      error: function(data) {
        f(null)
      }
    }
    $.ajax(p)
  }

  function displayVariables(term) {
    term.echo("token="+window.scriptr.terminal.token)
    term.echo("url="+window.scriptr.terminal.url)
    term.echo(" ")
  }
  
  window.scriptr.terminal.Interpreter.add({
    command: "set",
    handler: function(params, term){
      if (params) {
        var t = params.split("=")  

        switch(t[0].trim()) {
          case "token":
            window.scriptr.terminal.token=t[1].trim()
            term.pause()
              getUser(function(userId) {
            	term.resume()
                if (!userId) {
                  term.echo("Bad token!") 
                  term.echo(" ")
                  userId=""
                }
                term.set_prompt(userId+"&zwnj;@"+scriptr.terminal.prompt)
               })
            break;
          case "url":
            window.scriptr.terminal.url=t[1].trim()
            break;
        }
      } else {
        displayVariables(term)
      }
    },
    help: {id:"help-set"}
  })

})
