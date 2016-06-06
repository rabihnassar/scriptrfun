/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 function process(client, msg) {
    switch(msg.id) {
        case "slider":
            client.send("display", "Value "+msg.value*2)
            break;
        case "send":
            client.send("display", "you pressed send.")
            break;
	    case "onOff":
            client.send("display", "switch is: " + msg.value)
            break;
        default:
            break;
    }   
}			