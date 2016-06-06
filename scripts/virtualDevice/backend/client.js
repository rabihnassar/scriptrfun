/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var messaging = require("pubsub")

function Client() {
  var deviceId
  
  this.getMessage = function() {return JSON.parse(request.rawBody)}
  this.getRawMessage = function() {return request.rawBody}
  
  // var deviceId = this.getMessage().deviceId
  
  this.setDevice = function(id) {
    deviceId = id
  }
  
  this.send = function(widgetId, payload) {
	messaging.publish("virtualDeviceReceive", 
                      JSON.stringify({
      					"id":widgetId, 
      					"deviceId": deviceId, 
      					"payload":payload}));
  }
}
			