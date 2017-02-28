scriptr.MessageBundle = (function() {
  var $ = jq2

  jq2 = jQuery.noConflict();
  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  }; 
  
  // loadMessages
  $("#messages").load('messages.html', null , function(text){})

  function parseHelp(tag, params) {
    var html = jQuery("#"+tag).html()
    if (html) {
      var template = _.template(html)
      return template(params)
    } 
    return ""
  }
  
  return {
    getMessage: function(tag, params) {return parseHelp(tag, params)}
  }
})()