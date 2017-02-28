scriptr.Utils = (function() {
  
  var dialog = function(title, message, icon, callback) {
	var $ = jQuery.noConflict()
    
    $("body").append("<div id='dialog-confirm'></div>")
    
    $( "#dialog-confirm" ).html('<p class="dialogText"><span class="ui-icon '+icon+'" style="float:left; margin:12px 12px 20px 0;background-size: 30px; "></span>'+message+'</p>')
    
    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height: "auto",
      width: 400,
      modal: true,
      closeOnEscape: true,
      title: title,
      buttons: {
        Confirm: function() {
          $( this ).dialog( "close" )
          $( "#dialog-confirm" ).remove()
          callback(true)
        },
        Cancel: function() {
          $( this ).dialog( "close" )
          $( "#dialog-confirm" ).remove()
          callback(false)
        }
      }
    })
  }
  
  return {
    dialog: dialog
  }
})()

