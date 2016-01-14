/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var db = require("ScriptrDB") 

var tireID = request.parameters.tireId
var sensorData = JSON.parse(request.parameters.sensorData)
var status = true
try {
	db.createDocument(sensorData)  
} catch (e) {
  console.log("Issue saving data");
  status = false 
}

return status
   							