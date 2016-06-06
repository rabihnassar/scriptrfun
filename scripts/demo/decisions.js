/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"SimpleDecisionTable","plugindata":{"columns":[{"field":"recid","caption":"Rec. Id","size":"100%","resizable":true,"hidden":true,"noDrag":true},{"field":"rowtype","caption":"Type","size":"100%","hidden":true,"noDrag":true},{"field":"name","caption":"","size":"100%","noDrag":true,"editable":{"type":"text","inTag":"","outTag":"","style":"","items":[],"selected":"heater"},"sizeType":"%","sizeCalculated":"137px","min":20,"sizeCorrected":"12.5%"},{"field":"fieldType","caption":"Type","size":"100%","noDrag":true,"editable":{"type":"select","items":[{"id":"number","text":"number"},{"id":"string","text":"string"},{"id":"boolean","text":"boolean"}],"inTag":"","outTag":"","style":""},"sizeType":"%","sizeCalculated":"137px","min":20,"sizeCorrected":"12.5%"},{"field":"rule1","caption":"Rule 1","size":"100%","editable":{"type":"myType","inTag":"","outTag":"","style":"","items":[],"selected":"3"},"sizeType":"%","sizeCalculated":"137px","min":20,"sizeCorrected":"12.5%"},{"field":"rule2","caption":"Rule 2","size":"100%","editable":{"type":"myType","inTag":"","outTag":"","style":"","items":[],"selected":"2"},"sizeType":"%","sizeCalculated":"137px","min":20,"sizeCorrected":"12.5%"},{"field":"rule3","caption":"Rule 3","size":"100%","editable":{"type":"myType","inTag":"","outTag":"","style":"","items":[],"selected":"1"},"sizeType":"%","sizeCalculated":"137px","min":20,"sizeCorrected":"12.5%"},{"field":"rule4","caption":"Rule 4","size":"100%","editable":{"type":"myType","inTag":"","outTag":"","style":"","items":[],"selected":"5"},"sizeType":"%","sizeCalculated":"137px","min":20,"sizeCorrected":"12.5%"},{"field":"rule5","caption":"Rule 5","size":"100%","editable":{"type":"myType","inTag":"","outTag":"","style":"","items":[],"selected":"3"},"sizeType":"%","sizeCalculated":"137px","min":20,"sizeCorrected":"12.5%"},{"field":"rule6","caption":"Rule 6","size":"100%","editable":{"type":"myType","inTag":"","outTag":"","style":"","items":[],"selected":"2"},"sizeType":"%","sizeCalculated":"136px","min":20,"sizeCorrected":"12.5%"}],"records":[{"recid":0,"name":"temperature","rowtype":"condition","fieldType":"number","style":{"9":""},"rule1":"<10","rule2":"<20","rule3":"<30","rule4":"<10","rule5":"<20","rule6":"<30"},{"recid":1,"name":"roomOccupied","rowtype":"condition","fieldType":"boolean","style":{"9":""},"rule1":"false","rule2":"false","rule3":"false","rule4":"true","rule5":"true","rule6":"true"},{"recid":2,"name":"heater","rowtype":"action","fieldType":"string","attr":"action='true'","style":{"4":""},"rule1":"3","rule2":"2","rule3":"1","rule4":"5","rule5":"3","rule6":"2"}],"prescript":"","postscript":"//Variable \"decision\" is the object returned by the decision table execution.\n//Variable \"decision\" format is {\"action1\": \"value1\", \"action2\":  \"value2\"}.\nreturn decision;"},"scriptrdata":"//Get payload parameters\nvar pl = {};\nvar requestBody = request.body;\nif (!requestBody) {\n\tpl = request.parameters.payload;\n\tpl = JSON.parse(pl);\n} else {\n\tpl = requestBody;\n}\n\nvar decision = {};\n//PRESCRIPT START\n\n//PRESCRIPT END\n\nif(typeof pl != \"object\") {\n  return;\n} else { \n\t  if((pl != null && pl[\"temperature\"] != undefined && pl[\"temperature\"]<10) && (pl != null && pl[\"roomOccupied\"] != undefined && pl[\"roomOccupied\"] ===false)){\n       decision = { \"heater\": \"3\" }\n\t} \n\t else if((pl != null && pl[\"temperature\"] != undefined && pl[\"temperature\"]<20) && (pl != null && pl[\"roomOccupied\"] != undefined && pl[\"roomOccupied\"] ===false)){\n       decision = { \"heater\": \"2\" }\n\t} \n\t else if((pl != null && pl[\"temperature\"] != undefined && pl[\"temperature\"]<30) && (pl != null && pl[\"roomOccupied\"] != undefined && pl[\"roomOccupied\"] ===false)){\n       decision = { \"heater\": \"1\" }\n\t} \n\t else if((pl != null && pl[\"temperature\"] != undefined && pl[\"temperature\"]<10) && (pl != null && pl[\"roomOccupied\"] != undefined && pl[\"roomOccupied\"] ===true)){\n       decision = { \"heater\": \"5\" }\n\t} \n\t else if((pl != null && pl[\"temperature\"] != undefined && pl[\"temperature\"]<20) && (pl != null && pl[\"roomOccupied\"] != undefined && pl[\"roomOccupied\"] ===true)){\n       decision = { \"heater\": \"3\" }\n\t} \n\t else if((pl != null && pl[\"temperature\"] != undefined && pl[\"temperature\"]<30) && (pl != null && pl[\"roomOccupied\"] != undefined && pl[\"roomOccupied\"] ===true)){\n       decision = { \"heater\": \"2\" }\n\t} \n}\n\n//POSTSCRIPT START\n//Variable \"decision\" is the object returned by the decision table execution.\n//Variable \"decision\" format is {\"action1\": \"value1\", \"action2\":  \"value2\"}.\nreturn decision;\n//POSTSCRIPT END\n\n//Check if value is \"in\" or is \"not in\" array\n//return true or false\nfunction evalArrayOperation(value, operator,  array) {\n\tif(operator == \"in\") {\n\t\treturn (array.indexOf(value)>-1);\n\t} else {\n\t\treturn (array.indexOf(value) == -1) ;\n\t} \n}\n\n//isAny function, when condition expression is not important\nfunction isAny(param) {\n\treturn true;\n}"}}*#*#*/
//Get payload parameters
var pl = {};
var requestBody = request.body;
if (!requestBody) {
	pl = request.parameters.payload;
	pl = JSON.parse(pl);
} else {
	pl = requestBody;
}

var decision = {};
//PRESCRIPT START

//PRESCRIPT END

if(typeof pl != "object") {
  return;
} else { 
	  if((pl != null && pl["temperature"] != undefined && pl["temperature"]<10) && (pl != null && pl["roomOccupied"] != undefined && pl["roomOccupied"] ===false)){
       decision = { "heater": "3" }
	} 
	 else if((pl != null && pl["temperature"] != undefined && pl["temperature"]<20) && (pl != null && pl["roomOccupied"] != undefined && pl["roomOccupied"] ===false)){
       decision = { "heater": "2" }
	} 
	 else if((pl != null && pl["temperature"] != undefined && pl["temperature"]<30) && (pl != null && pl["roomOccupied"] != undefined && pl["roomOccupied"] ===false)){
       decision = { "heater": "1" }
	} 
	 else if((pl != null && pl["temperature"] != undefined && pl["temperature"]<10) && (pl != null && pl["roomOccupied"] != undefined && pl["roomOccupied"] ===true)){
       decision = { "heater": "5" }
	} 
	 else if((pl != null && pl["temperature"] != undefined && pl["temperature"]<20) && (pl != null && pl["roomOccupied"] != undefined && pl["roomOccupied"] ===true)){
       decision = { "heater": "3" }
	} 
	 else if((pl != null && pl["temperature"] != undefined && pl["temperature"]<30) && (pl != null && pl["roomOccupied"] != undefined && pl["roomOccupied"] ===true)){
       decision = { "heater": "2" }
	} 
}

//POSTSCRIPT START
//Variable "decision" is the object returned by the decision table execution.
//Variable "decision" format is {"action1": "value1", "action2":  "value2"}.
return decision;
//POSTSCRIPT END

//Check if value is "in" or is "not in" array
//return true or false
function evalArrayOperation(value, operator,  array) {
	if(operator == "in") {
		return (array.indexOf(value)>-1);
	} else {
		return (array.indexOf(value) == -1) ;
	} 
}

//isAny function, when condition expression is not important
function isAny(param) {
	return true;
}			