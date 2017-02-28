
scriptr.PropertiesSheet = function(panel) {
    var $ = jq2
    
    var icons = [
      {id:1, icon:"Device"},
      {id:2, icon:"Vehicle"},
      {id:3, icon:"Car"},
      {id:4, icon:"Thermostat"},
      {id:5, icon:"Nest"}
    ]
	var typesMap = {
      "Number":1,
      "boolean":2,
      "Date":3,
      "Geolocation":4,
      "String":5
    }
    var types=[]; for (var type in typesMap) types.push(typesMap[type], type)
      
    //
    // Transform Data to Grids format
    //
    function adaptData(data) {
      var model = JSON.parse(data.response.result)
      var properties = [], methods = [], attributes = []
      var i=0

            
      for (var k in model) {
        var value = model[k]
        if (k!="attributes") if (k!="_methods") if (k!="_types")
          if (k=="tags") {
            var tags = []
            model.tags.forEach(function(tag) {
              tags.push({recid: i++, property: tag.tag, value: tag.value, editable: true})
            })
            properties.push({recid: i++, property: "tags", w2ui: {children: tags}, expanded   : true})
          } else {
            var record = {recid: i++, property: k, value: value, editable: true}
            properties.push(record)
          }
      }
      console.debug(JSON.stringify(properties, null, 4))

      for (var k in model._methods) {
        methods.push({recid: i++, method: k, code: model._methods[k]});
      }

      for (var k in model.attributes) {
        var type = { id: typesMap[model._types[k]], text: model._types[k] }
        attributes.push({recid: i++, attribute: k, type: type, defaultValue: model.attributes[k]})
      }
console.log(JSON.stringify(model.attributes, null, 4))
      return {
        properties: properties,
        attributes: attributes,
        methods: methods
      }

      console.debug(JSON.stringify(properties, null, 4))        
    }
    
    //
    // REST Call to retrieve server data
    //
    function getObjectProperties(model, callback) {
      var p = {
        url: "/devicemodels/edit/api/get",
        data: {className: model},
        method: "GET",
        dataType: 'json',
        success: function(data) {
          var gridData = adaptData(data)
          callback(gridData)
        },
        error: function(data) {
        }
      }
      $.ajax(p)
    }
  
  function createGrids(panel) {
    // Create div nodes in panel
    n = $("<div style='height:33%'></div>").appendTo(w2ui.layout.el(panel))
    n.attr("id", "properties")
    n = $("<div style='height:33%'></div>").appendTo(w2ui.layout.el(panel))
    n.attr("id", "attributes")
    n = $("<div style='height:33%'></div>").appendTo(w2ui.layout.el(panel))
    n.attr("id", "methods")

    var propertiesGrid = { 
      name: 'properties', 
      columns: [                
        {field: 'property', caption: 'property', size: '50%' },
        {field: 'value', caption: 'Value', size: '50%', editable: {type: 'text'}}
      ],
      show: {
        header: false,
        toolbar: true,
        toolbarSearch: false,
        toolbarColumns : false,
        toolbarReload: false,
        toolbarDelete: true,
        toolbarSave: true,
        toolbarAdd: true,
      }
    }  
    $("#properties").w2grid(propertiesGrid)
    var types = [
      {id:1, type:"String"},
      {id:2, type:"Number"},
      {id:3, type:"boolean"},
      {id:4, type:"Date"},
      {id:5, type:"Geolocation"}
    ]

    var attributesGrid = { 
      name: 'attributes', 
      columns: [                
        { field: 'attribute', caption: 'Attribute', size: '50%' },
        { field: 'type', caption: 'Type', size: '50%', sortable: true, resizable: true, 
         editable: { type: 'select', items: [{ id: '', type: '' }].concat(types) }, 
         render: function (record, index, col_index) {
console.log(record, index, col_index)           
           var html = '';
           for (var p in types) {
             if (types[p].id == this.getCellValue(index, col_index)) html = types[p].type;
           }
           return "WHATEVER"
           return html;
         }
        },
        { field: 'defaultValue', caption: 'Default Value', size: '50%' }
      ]
    }
    $("#attributes").w2grid(attributesGrid)
console.log(JSON.stringify(attributesGrid, null, 4))

    var methodsGrid = { 
      name: 'methods', 
      columns: [                
        { field: 'method', caption: 'Methods', size: '50%' },
        { field: 'code', caption: 'Code', size: '50%' }
      ]
    }
    $("#methods").w2grid(methodsGrid)
  }

  
  var _panel
  function _init(panel) {
    createGrids(panel)
  }  

  _init(panel)

  // get data here
  function open(modelName) {
    getObjectProperties(modelName, function(gridData) {
      w2ui.properties.clear()
      w2ui.attributes.clear()
      w2ui.methods.clear()

      w2ui.properties.add(gridData.properties)
      w2ui.methods.add(gridData.methods)
      w2ui.attributes.add(gridData.attributes)
    })
  }
  
  return {
    open: open
  }
  
}    

scriptr.PropertiesSheetOld = function(panel) {
    var $ = jq2
    
    function showMenu(node) {
        node.w2menu({
            openAbove: window.above,
            align: window.align,
            items: [
                {id: 1, text: 'Insert Item'},
                {id: 2, text: 'Delete Item'}
            ]
        });
    }    
  
    
  var _panel
  function _init(panel) {
    createGrids(panel)

    getObjectProperties(function(gridData) {
      w2ui.properties.clear()
      w2ui.attributes.clear()
      w2ui.methods.clear()

      w2ui.properties.add(gridData.properties)
      w2ui.methods.add(gridData.methods)
      w2ui.attributes.add(gridData.attributes)
    })      
  }  

  _init(panel)

  

  // get data here
  function open(modelName) {
    getObjectProperties(modelName, callback)  
  }
  
  
  return {
    open: open

  }
}