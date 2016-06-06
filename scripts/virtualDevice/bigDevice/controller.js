/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var client = require("virtualDevice/backend/deviceClient")

function process(msg) {
    log.debug(msg)
    client.send("display1", JSON.stringify(msg))
    client.send("btn", msg.value)

    if (msg.id=="slider") client.send("gauge", msg.value)

    if (msg.id=="push1") client.send("signal1", "on")
    if (msg.id=="push2") client.send("signal2", "on")
    if (msg.id=="push3") client.send("signal3", "on")

    if (msg.id=="pushOff1") client.send("signal1", "off")
    if (msg.id=="pushOff2") client.send("signal2", "off")
    if (msg.id=="pushOff3") client.send("signal3", "off")

    if (msg.id=="send") {
        client.send("display", "Sending values now")

        for (var i=0; i<1000; i=i+10) {
          client.send("gauge", i)
          client.send("signal2", "on")
          client.send("signal2", "off")
          client.send("signal3", "on")
          client.send("signal3", "off")
        }
        client.send("display", ">Ready")
    }
  
}			