/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var log = require("log")
log.setLevel("debug")
var messaging = require("pubsub")

function Client() {
  this.getMessage = function() {return JSON.parse(request.rawBody)}
  this.getRawMessage = function() {return request.rawBody}
  
  var deviceId = this.getMessage().deviceId
    
  this.send = function(widgetId, payload) {
	messaging.publish("virtualDeviceReceive", 
                      JSON.stringify({
      					"id":widgetId, 
      					"deviceId": deviceId, 
      					"payload":payload}));
  }
}

var client = new Client()

var msg = client.getMessage()

switch(msg.deviceId) {
  case "simple":
    var c = require("virtualDevice/simpleDevice/controller")
    c.process(client, msg)
    break;

  case "big":
    var c = require("virtualDevice/bigDevice/controller")
    c.process(client, msg)
    break;
    
  default:
    break;
}			