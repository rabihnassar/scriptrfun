/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var debug = require("library/debug.js")
var console = new debug.Console()

Documents = function(storage) {
    this.storage = storage

  	if (this.storage.local._docId==null) this.storage.local._docId = 0
  
    this._getNewId = function() {
		this.storage.local._docId = this.storage.local._docId+1
    	return this.storage.local._docId
    }

    this.new = function() {
      	var id = this._getNewId()
        var newDoc = {_id:id, _creationDate: new Date()}
        this.put(newDoc)
        return newDoc
    }    
    
    this.put = function(doc) {
      doc._lastUpdateDate = new Date()
      this.storage.local["_doc"+doc._id] = JSON.stringify(doc) 
	}
    
    this.get = function(id) { 
      return JSON.parse(this.storage.local["_doc"+id]) 
    }
    
	this.list = function() {
      var list = []
      for (var doc in this.storage.local) {
        if ((doc!="_docId") && (doc.charAt(0)=="_")) list.push(doc)
      }
      return list
    }

    this.delete = function(id) {
      delete this.storage.local["_doc"+id]
    }
    
    this.deleteAll = function() {
      for (var doc in this.storage.local) {
        delete this.storage.local[doc]
      }
      this.storage.local._docId = 0
    }
}	   				   				   				   				   				


   							