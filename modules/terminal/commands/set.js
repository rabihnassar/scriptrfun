jQuery(document).ready(function($) {

  function displayVariables(term) {
    term.echo("token="+SCRIPTR_TOKEN)
    term.echo("url="+SCRIPTR_URL)
    term.echo(" ")
  }
  
  window.scriptrCommands.add({
    command: "set",
    handler: function(params, term){
      if (params) {
        var t = params.split("=")  

        switch(t[0].trim()) {
          case "token":
            SCRIPTR_TOKEN=t[1].trim()
            term.echo("token="+SCRIPTR_TOKEN)
            break;
          case "url":
            SCRIPTR_URL=t[1].trim()
            term.echo("url="+SCRIPTR_URL)
            break;
        }

        term.echo(" ")
      } else {
        displayVariables(term)
      }
    },
    help: {id:"help-set"}
  })

})
