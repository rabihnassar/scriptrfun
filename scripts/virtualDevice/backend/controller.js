/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var log = require("log");
log.setLevel("debug");

var client = require("virtualDevice/backend/deviceClient")

var msg = client.getMessage()

switch(msg.deviceId) {
  case "simple":
    var c = require("virtualDevice/simpleDevice/controller")
    c.process(msg)
    break;
  case "big":
    var c = require("virtualDevice/bigDevice/controller")
    c.process(msg)
  default:
    break;
}			