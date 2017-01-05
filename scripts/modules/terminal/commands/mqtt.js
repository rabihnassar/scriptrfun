jQuery(document).ready(function($) {
// use this client https://eclipse.org/paho/clients/js/
  window.scriptrCommands.add({
    command: "mqtt",
    handler: function(params, term){
        term.echo("NOT IMPLEMENTED")
		
        term.echo(" ")
    },
    help: {id:"help-mqtt"}
  })

})
