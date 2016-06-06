/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var log = require("log");
var messaging = require("pubsub");

function send(widgetId, payload) {
	messaging.publish("virtualDeviceReceive", JSON.stringify({"id":widgetId, "payload":payload}));
}

function getMessage() {
	return JSON.parse(request.rawBody)
}

function getRawMessage() {
	return request.rawBody
}			