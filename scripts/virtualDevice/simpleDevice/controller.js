/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var client = require("virtualDevice/backend/deviceClient")

function process(msg) {
    switch(msg.id) {
        case "slider":
            client.send("display", "Value "+msg.value)
            break;
        case "send":
            client.send("display", "you pressed send.")
            break;
        default:
            break;
    }   
}			