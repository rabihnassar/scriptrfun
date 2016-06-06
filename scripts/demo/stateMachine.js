/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"simpleStateMachine","plugindata":{"cells":[{"type":"fsa.StartState","size":{"width":20,"height":20},"position":{"x":50,"y":50},"angle":0,"id":"fb7091a6-9c57-42fa-8f1b-ae041f48f2da","z":1,"attrs":{"circle":{"fill":"#ff8c00","stroke":"#d87702","stroke-width":3},"text":{"text":"start"}}},{"type":"tm.Process","size":{"width":60,"height":60},"position":{"x":328,"y":35},"angle":0,"id":"bd0d968d-2ae2-433e-9f6a-4171883b2bc4","z":2,"attrs":{"text":{"font-weight":"bold","font-size":16,"fill":"#353535","text":"check-up needed","font-variant":"small-caps","text-transform":"capitalize"}}},{"type":"link","source":{"id":"fb7091a6-9c57-42fa-8f1b-ae041f48f2da"},"target":{"id":"bd0d968d-2ae2-433e-9f6a-4171883b2bc4"},"connector":{"name":"smooth"},"labels":[{"position":0.5,"attrs":{"text":{"text":"alert","font-weight":"bold"}}}],"id":"8ddb8257-90b1-4f1b-94b3-115220d391ea","script":"return true;","z":3,"attrs":{".connection":{"stroke":"#353535"},".marker-target":{"fill":"#353535","d":"M 10 0 L 0 5 L 10 10 z"},"text":{"fill":"#353535","font-size":16,"font-weight":"bold","font-variant":"small-caps","text-transform":"capitalize"}}},{"type":"tm.Process","size":{"width":60,"height":60},"position":{"x":439,"y":217},"angle":0,"id":"b13531c3-3e17-4672-afa9-4792e2a65892","z":4,"attrs":{"text":{"font-weight":"bold","font-size":16,"fill":"#353535","text":"service needed","font-variant":"small-caps","text-transform":"capitalize"}}},{"type":"link","source":{"id":"bd0d968d-2ae2-433e-9f6a-4171883b2bc4"},"target":{"id":"b13531c3-3e17-4672-afa9-4792e2a65892"},"connector":{"name":"smooth"},"labels":[{"position":0.5,"attrs":{"text":{"text":"alert","font-weight":"bold"}}}],"id":"7b8e5370-e86d-41a9-887e-935015e255d8","script":"return true;","z":5,"attrs":{".connection":{"stroke":"#353535"},".marker-target":{"fill":"#353535","d":"M 10 0 L 0 5 L 10 10 z"},"text":{"fill":"#353535","font-size":16,"font-weight":"bold","font-variant":"small-caps","text-transform":"capitalize"}}},{"type":"tm.Process","size":{"width":60,"height":60},"position":{"x":87,"y":260},"angle":0,"id":"97b12122-14b2-4ff2-8d9d-441a3913a35b","z":6,"attrs":{"text":{"font-weight":"bold","font-size":16,"fill":"#353535","text":"stop machine","font-variant":"small-caps","text-transform":"capitalize"}}},{"type":"link","source":{"id":"b13531c3-3e17-4672-afa9-4792e2a65892"},"target":{"id":"97b12122-14b2-4ff2-8d9d-441a3913a35b"},"connector":{"name":"smooth"},"labels":[{"position":0.5,"attrs":{"text":{"text":"alert","font-weight":"bold","font-size":16,"font-variant":"small-caps","text-transform":"capitalize"}}}],"id":"948e4fce-970b-4ef3-b767-e4d8268af8e0","script":"return true;","z":7,"attrs":{".connection":{"stroke":"#353535"},".marker-target":{"fill":"#353535","d":"M 10 0 L 0 5 L 10 10 z"},"text":{"fill":"#353535","font-size":16,"font-weight":"bold","font-variant":"small-caps","text-transform":"capitalize"}}},{"type":"link","source":{"id":"b13531c3-3e17-4672-afa9-4792e2a65892"},"target":{"id":"fb7091a6-9c57-42fa-8f1b-ae041f48f2da"},"connector":{"name":"smooth"},"labels":[{"position":0.5,"attrs":{"text":{"text":"reset","font-weight":"bold"}}}],"id":"2736ed69-4c44-455e-825f-8ea5f5db4a5a","script":"return true;","z":8,"attrs":{".connection":{"stroke":"#353535"},".marker-target":{"fill":"#353535","d":"M 10 0 L 0 5 L 10 10 z"},"text":{"fill":"#353535","font-size":16,"font-weight":"bold","font-variant":"small-caps","text-transform":"capitalize"}}},{"type":"link","source":{"id":"97b12122-14b2-4ff2-8d9d-441a3913a35b"},"target":{"id":"fb7091a6-9c57-42fa-8f1b-ae041f48f2da"},"connector":{"name":"smooth"},"labels":[{"position":0.5,"attrs":{"text":{"text":"reset","font-weight":"bold","font-size":16,"font-variant":"small-caps","text-transform":"capitalize"}}}],"id":"682acbe4-d543-41c7-853f-a724d359681f","script":"return true;","z":9,"attrs":{".connection":{"stroke":"#353535"},".marker-target":{"fill":"#353535","d":"M 10 0 L 0 5 L 10 10 z"},"text":{"fill":"#353535","font-size":16,"font-weight":"bold","font-variant":"small-caps","text-transform":"capitalize"}}}]},"scriptrdata":"\nvar START_STATE = \"start\"\nvar log = require(\"log\");\n//\n// Define Finite State Machine framework\n//\nfunction SimpleStateMachine(machineName, id) {\n\tif(machineName){\n\t\tthis.storage = this.loadStorage(id);\t\n\t\tlog.debug(\"SM constructor for [\" + machineName + \"]\");\n\t}\n\n\n}\nSimpleStateMachine.prototype.getId = function (){\n\treturn this.storage.id;\n}\n\nSimpleStateMachine.prototype.generateId = function(length){\n   \tvar random = \"\";\t\n   \tvar source = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\n\tvar numberOfCharacters = source.length;\n   \tfor( var i=0; i < length; i++ )\n       \trandom += source.charAt(Math.floor(Math.random() * 100 % numberOfCharacters));\n   \treturn random;\n}\n\nSimpleStateMachine.prototype.inspect = function () {\n\treturn JSON.stringify(this.storage);\n}\t\n\t\t\t\t\t\nSimpleStateMachine.prototype.event = function (name) {\n  \t\n\tvar state = this.transitions[this.storage.state]\n\tvar transition = state[name];\n\tif(transition){\n\t      \tlog.debug(\"found transition [\" + name + \"]\");\n\t\t\tvar branch = transition[\"branch\"];\n\t      \tvar code = transition[\"code\"];\n\t       \tif(code && branch){\n\t\t\tlog.debug('attempting transition: ' + \n\t\t\t\tthis.storage.state + ' -> ' + name)              \n        \tif(code.call(this)){\n\t            \t//  If transition succeeds\n\t            \tlog.debug('successfully set state set to: ' + name)\n\t                // change state\n\t                this.storage.state = branch\n\t\t\t//fields should have been updated by the user directly\n\t                this.persistStorage(this.storage.id)\n                    \n\t\t}else{\n\t\t\tlog.debug(\"transition failed by user code\");\n\t        }\n\t} else {\n\t\tlog.debug('transition failed, state: ' + this.storage.state)\n\t} \n\t} else {\n\t\tlog.debug(\"transition '\" + name + \"' doesn't exist!\")\n\t}\n}\t\t\t\t\t\t\n\nSimpleStateMachine.prototype.loadStorage = function (id, storageModel) {\n\tlog.debug(\"loading storage for [\" + id + \"]\")\n\t//based on the model copy from local storage or from GetDocument\n    if(storageModel == \"simple\"){\n\t\tif(!id){\n\t    \t//generate new random id\n\t        id = this.generateId(10);\n\t        storage.global[id] = {};\n\t        storage.global[id].state = \"start\";\n\t        storage.global[id].fields = \"\"; //will not be persisted if it remains empty\n      \t}\n\n\t\tvar fields = null;\n      \tif(storage.global[id][\"fields\"]){\n        \tfields = JSON.parse(storage.global[id][\"fields\"]);\n      \t}else{\n\t\t\tfields = {};\n      \t}\t\n      \t//instance storage\n      \tthis.storage = {\n        \t// mandatory fields \n          \tid: id,\n          \tstate: storage.global[id].state,\n          \tfields: fields\n      \t}      \n    }else{\n    \t\n\t\tthis.storage = {\n\t\t\t\tfields: {\n\t      \n\t\t\t}\n\t\t}\n\t\tif(id){\n          this.storage.id = id;\n          this.transaction = apsdb.beginTransaction();\n          \n          var response = apsdb.callApi(\"Query\", {\"apsdb.query\":\"apsdb.documentKey=\\\"\"+this.storage.id+\"\\\"\", \"apsdb.lock\": \"true\", \"apsdb.queryFields\":\"*\"}, null);\n          console.log(JSON.stringify(response));\n          if(response.metadata.status == \"success\"){\n              if(response.result.documents.length == 1){\n                  this.storage.isNew = false;\n                  //load fields into this.storage.fields\n                  this.document = response.result.documents[0];\n                  for(var key in this.document){\n                      //exclude all fields starting with apsdb along with \"state\", \"key\" and \"versionNumber\"\n                      if(String.match(key, /^apsdb\\./) == null && key != \"key\" && key != \"state\" && key != \"versionNumber\"){\n                          console.log(\"setting \" + key)\n                          this.storage.fields[key] = this.document[key];\n                      }\n                      this.storage.state = this.document.state;\n                  }\n                \tlog.debug(\"loaded document from db\" + JSON.stringify(this.document));\n              }else{\n                  this.storage.isNew = true;\n                  this.storage.state = \"start\";\n\t\t\t\t  this.document = {\n                  \t\"apsdb.documentKey\": id\n                  }\n              }\t\n          }else{\n              //complete failure, return an error\n              return JSON.stringify({\"errorCode\": \"SCRIPT_ERROR\", \"errorDetail\":\"failed to load machine from storage\"});\n          }\n      }else{\n          this.storage.id = this.generateId(10);\n          this.storage.isNew = true;\n          this.storage.state = \"start\";\n        this.document = {\n        \t\"apsdb.documentKey\": this.storage.id\n        }\n      }\n      \n};\n\t\n\t\n\treturn this.storage;\n}\nSimpleStateMachine.prototype.persistStorage = function (id, storageModel) {\n  \tlog.debug(\"persisting changes\")\n   \t//based on the model copy to local storage or call SaveDocument\n  \tif(storageModel == \"simple\"){\n\t\tstorage.global[id] = {};\n  \t\tstorage.global[id] = {\n\t\t\tstate: this.storage.state,\n      \t\tfields: JSON.stringify(this.storage.fields)\n    \t}      \n    }else{\n      \t\n\t\t//we need to save the machine stoarge in a document in the db. \n      \t//document is already loaded but use a new one anyway\n      \tthis.newDocument = {}\n      \tthis.newDocument.state = this.storage.state;\n      \t//was this a new document or was it loaded from the db?\n        this.newDocument[\"apsdb.update\"] = \"\" + !this.storage.isNew;\n        this.newDocument[\"apsdb.documentKey\"] = this.storage.id;\n      \t//the rest are fields, copy them all\n      \tfor(var key in this.storage.fields){\n\t\t\tvar value = this.storage.fields[key];\n          \tif(!value instanceof Array &&  typeof value !== \"string\"){\n            \tvalue = JSON.stringify(value);\n            }\n        \tthis.newDocument[key] = value;\n        }\n      \t//also remove anything that the user didn't pass in again (or removed)\n      \tfor(var key in this.document){\n        \tif(String.match(key, /^apsdb\\./) == null && key != \"key\" && key != \"state\" && key != \"versionNumber\"){\n            \tif(typeof this.storage.fields[key] === \"undefined\"){\n                \t//this was in storage and got removed, remove it from the document\n                  \tthis.newDocument[key + \".apsdb.delete\"] = \"\";//\n                }\n            }\n        }\n      \tlog.setLevel(\"debug\");\n      \tlog.debug(JSON.stringify(this.newDocument));\n      \tlog.debug(JSON.stringify(apsdb.callApi(\"SaveDocument\", this.newDocument, null)));\n      \tif(this.transaction) {//no transaction is started for new documents\n        \tthis.transaction.commit();  \n        }\n      \n    }\n\n}\n// Publishing StateMachine constructor\nvar StateMachineImpl = function(id) {\n\t// Call ancestor constructor\n  \tSimpleStateMachine.call (this, \"default\", id)\n}\n\nStateMachineImpl.prototype = new SimpleStateMachine()\nStateMachineImpl.prototype.constructor = StateMachineImpl\n\n// Define states and transitions\nStateMachineImpl.prototype.transitions = {\n\t\"start\" : {\n\t\t\t\"alert\" : {\n\t\t\t\t\t\"code\": function() {return true;},\n\t\t\t\t\t\"branch\": \"check-up needed\"\n\t\t\t\t\t\n\t\t\t}\n\t\t},\n\t\"check-up needed\" : {\n\t\t\t\"alert\" : {\n\t\t\t\t\t\"code\": function() {return true;},\n\t\t\t\t\t\"branch\": \"service needed\"\n\t\t\t\t\t\n\t\t\t}\n\t\t},\n\t\"service needed\" : {\n\t\t\t\"alert\" : {\n\t\t\t\t\t\"code\": function() {return true;},\n\t\t\t\t\t\"branch\": \"stop machine\"\n\t\t\t\t\t\n\t\t\t},\n\t\t\t\"reset\" : {\n\t\t\t\t\t\"code\": function() {return true;},\n\t\t\t\t\t\"branch\": \"start\"\n\t\t\t\t\t\n\t\t\t}\n\t\t},\n\t\"stop machine\" : {\n\t\t\t\"reset\" : {\n\t\t\t\t\t\"code\": function() {return true;},\n\t\t\t\t\t\"branch\": \"start\"\n\t\t\t\t\t\n\t\t\t}\n\t\t}\n}\n\n\n//main\nvar parameters;\nif(request.body){\n  \tlog.error(\"got body\")\n\tparameters = request.body;\n}else{\n  \tlog.error(\"no body\")\n\tparameters = request.parameters;\n}\n\nvar event = parameters.event;//get the required event\nvar id = parameters.id; //could be null, this will be handled by the SimpleStateMachine code\nvar loglevel = parameters.loglevel;\nif(loglevel){\n\tlog.setLevel(loglevel);\n}\n\nvar ssmi = new StateMachineImpl(id);\nif(event){\n  ssmi.event(event);\n}\nreturn ssmi.inspect();"}}*#*#*/

var START_STATE = "start"
var log = require("log");
//
// Define Finite State Machine framework
//
function SimpleStateMachine(machineName, id) {
	if(machineName){
		this.storage = this.loadStorage(id);	
		log.debug("SM constructor for [" + machineName + "]");
	}


}
SimpleStateMachine.prototype.getId = function (){
	return this.storage.id;
}

SimpleStateMachine.prototype.generateId = function(length){
   	var random = "";	
   	var source = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var numberOfCharacters = source.length;
   	for( var i=0; i < length; i++ )
       	random += source.charAt(Math.floor(Math.random() * 100 % numberOfCharacters));
   	return random;
}

SimpleStateMachine.prototype.inspect = function () {
	return JSON.stringify(this.storage);
}	
					
SimpleStateMachine.prototype.event = function (name) {
  	
	var state = this.transitions[this.storage.state]
	var transition = state[name];
	if(transition){
	      	log.debug("found transition [" + name + "]");
			var branch = transition["branch"];
	      	var code = transition["code"];
	       	if(code && branch){
			log.debug('attempting transition: ' + 
				this.storage.state + ' -> ' + name)              
        	if(code.call(this)){
	            	//  If transition succeeds
	            	log.debug('successfully set state set to: ' + name)
	                // change state
	                this.storage.state = branch
			//fields should have been updated by the user directly
	                this.persistStorage(this.storage.id)
                    
		}else{
			log.debug("transition failed by user code");
	        }
	} else {
		log.debug('transition failed, state: ' + this.storage.state)
	} 
	} else {
		log.debug("transition '" + name + "' doesn't exist!")
	}
}						

SimpleStateMachine.prototype.loadStorage = function (id, storageModel) {
	log.debug("loading storage for [" + id + "]")
	//based on the model copy from local storage or from GetDocument
    if(storageModel == "simple"){
		if(!id){
	    	//generate new random id
	        id = this.generateId(10);
	        storage.global[id] = {};
	        storage.global[id].state = "start";
	        storage.global[id].fields = ""; //will not be persisted if it remains empty
      	}

		var fields = null;
      	if(storage.global[id]["fields"]){
        	fields = JSON.parse(storage.global[id]["fields"]);
      	}else{
			fields = {};
      	}	
      	//instance storage
      	this.storage = {
        	// mandatory fields 
          	id: id,
          	state: storage.global[id].state,
          	fields: fields
      	}      
    }else{
    	
		this.storage = {
				fields: {
	      
			}
		}
		if(id){
          this.storage.id = id;
          this.transaction = apsdb.beginTransaction();
          
          var response = apsdb.callApi("Query", {"apsdb.query":"apsdb.documentKey=\""+this.storage.id+"\"", "apsdb.lock": "true", "apsdb.queryFields":"*"}, null);
          console.log(JSON.stringify(response));
          if(response.metadata.status == "success"){
              if(response.result.documents.length == 1){
                  this.storage.isNew = false;
                  //load fields into this.storage.fields
                  this.document = response.result.documents[0];
                  for(var key in this.document){
                      //exclude all fields starting with apsdb along with "state", "key" and "versionNumber"
                      if(String.match(key, /^apsdb\./) == null && key != "key" && key != "state" && key != "versionNumber"){
                          console.log("setting " + key)
                          this.storage.fields[key] = this.document[key];
                      }
                      this.storage.state = this.document.state;
                  }
                	log.debug("loaded document from db" + JSON.stringify(this.document));
              }else{
                  this.storage.isNew = true;
                  this.storage.state = "start";
				  this.document = {
                  	"apsdb.documentKey": id
                  }
              }	
          }else{
              //complete failure, return an error
              return JSON.stringify({"errorCode": "SCRIPT_ERROR", "errorDetail":"failed to load machine from storage"});
          }
      }else{
          this.storage.id = this.generateId(10);
          this.storage.isNew = true;
          this.storage.state = "start";
        this.document = {
        	"apsdb.documentKey": this.storage.id
        }
      }
      
};
	
	
	return this.storage;
}
SimpleStateMachine.prototype.persistStorage = function (id, storageModel) {
  	log.debug("persisting changes")
   	//based on the model copy to local storage or call SaveDocument
  	if(storageModel == "simple"){
		storage.global[id] = {};
  		storage.global[id] = {
			state: this.storage.state,
      		fields: JSON.stringify(this.storage.fields)
    	}      
    }else{
      	
		//we need to save the machine stoarge in a document in the db. 
      	//document is already loaded but use a new one anyway
      	this.newDocument = {}
      	this.newDocument.state = this.storage.state;
      	//was this a new document or was it loaded from the db?
        this.newDocument["apsdb.update"] = "" + !this.storage.isNew;
        this.newDocument["apsdb.documentKey"] = this.storage.id;
      	//the rest are fields, copy them all
      	for(var key in this.storage.fields){
			var value = this.storage.fields[key];
          	if(!value instanceof Array &&  typeof value !== "string"){
            	value = JSON.stringify(value);
            }
        	this.newDocument[key] = value;
        }
      	//also remove anything that the user didn't pass in again (or removed)
      	for(var key in this.document){
        	if(String.match(key, /^apsdb\./) == null && key != "key" && key != "state" && key != "versionNumber"){
            	if(typeof this.storage.fields[key] === "undefined"){
                	//this was in storage and got removed, remove it from the document
                  	this.newDocument[key + ".apsdb.delete"] = "";//
                }
            }
        }
      	log.setLevel("debug");
      	log.debug(JSON.stringify(this.newDocument));
      	log.debug(JSON.stringify(apsdb.callApi("SaveDocument", this.newDocument, null)));
      	if(this.transaction) {//no transaction is started for new documents
        	this.transaction.commit();  
        }
      
    }

}
// Publishing StateMachine constructor
var StateMachineImpl = function(id) {
	// Call ancestor constructor
  	SimpleStateMachine.call (this, "default", id)
}

StateMachineImpl.prototype = new SimpleStateMachine()
StateMachineImpl.prototype.constructor = StateMachineImpl

// Define states and transitions
StateMachineImpl.prototype.transitions = {
	"start" : {
			"alert" : {
					"code": function() {return true;},
					"branch": "check-up needed"
					
			}
		},
	"check-up needed" : {
			"alert" : {
					"code": function() {return true;},
					"branch": "service needed"
					
			}
		},
	"service needed" : {
			"alert" : {
					"code": function() {return true;},
					"branch": "stop machine"
					
			},
			"reset" : {
					"code": function() {return true;},
					"branch": "start"
					
			}
		},
	"stop machine" : {
			"reset" : {
					"code": function() {return true;},
					"branch": "start"
					
			}
		}
}


//main
var parameters;
if(request.body){
  	log.error("got body")
	parameters = request.body;
}else{
  	log.error("no body")
	parameters = request.parameters;
}

var event = parameters.event;//get the required event
var id = parameters.id; //could be null, this will be handled by the SimpleStateMachine code
var loglevel = parameters.loglevel;
if(loglevel){
	log.setLevel(loglevel);
}

var ssmi = new StateMachineImpl(id);
if(event){
  ssmi.event(event);
}
return ssmi.inspect();			