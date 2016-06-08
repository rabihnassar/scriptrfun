/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 // SUBSCRIBE THIS SCRIPT TO virtualDeviceSend channel

var log = require("log")
log.setLevel("debug")
var clientLib = require("virtualDevice/backend/client")

var client = new clientLib.Client()

var msg = client.getMessage()

client.setDevice(msg.deviceId)

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