jQuery(document).ready(function($) {
// use this client https://eclipse.org/paho/clients/js/
  window.scriptr.terminal.Interpreter.add({
    command: "mqtt",
    handler: function(params, term){
        term.echo("NOT IMPLEMENTED")
		
        term.echo(" ")
    },
    help: {id:"help-mqtt"}
  })

})
