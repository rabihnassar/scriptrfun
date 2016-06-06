/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var client = require("virtualDevice/backend/deviceClient")

client.send("display", "Say what")
client.send("btn", "on")

for (i=0;i<250;i++) {
	client.send("display", i)
	client.send("btn", (i%2==0)?"on":"off")
	client.send("btn1", (i%2==1)?"on":"off")
    client.send("gauge", i)
}			