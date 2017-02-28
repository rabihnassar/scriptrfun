scriptr.Tabs = function(jq2) {
  var visibleDiv = "hierarchyEditor"
  var $

  var selector = function(n) {return "#"+n}
  
  var onclick = function(event) {
    var divName = 'tab-content-'+event.target.replace(".", "\\.")

    if (visibleDiv!=event.target) {
      $("#"+visibleDiv).hide()

      if (event.target=='hierarchy') {
        $('#hierarchyEditor').show()
        visibleDiv = 'hierarchyEditor'
      } else {
        if ($(selector(divName)).length==0) {
        } else {
          $(selector(divName)).show()
        }
        visibleDiv = divName
      }   
    }
  }

  var _init = function(jq2) {
	$ = jq2
    $('#tabs').w2tabs({
      name: 'tabs',
      active: 'hierarchy',
      tabs: [
        { id: 'hierarchy', caption: 'Models' }
      ],
      onClick: onclick,
      onClose: function(event) {
        console.log('object '+ event.target + ' is destroyed')
        $('#tab-content-'+event.target.replace(".", "\\.")).remove()
        w2ui.tabs.click('hierarchy')
      }
    })
  }  
  
  _init(jq2)
  
  return {
    openTab: function(name, path) {
      var divName = 'tab-content-'+name
      var url = "https://www.scriptr.io/workspace?menu=0&tree=0&toolbar=1&console=0&name="+path

      w2ui.tabs.add({id: name, caption: name, closable: true})

      var d = $("<div></div>").appendTo("#tab-content")
      d.attr("id", divName)
      d.hide()
      
      // TODO: disable tabs until content loads
      
      var ifr=$('<iframe/>', {
        src: url, //"https://scriptr.io",
        frameborder: 0,
        marginheight: 0,
        marginwidth: 0,
        width: "100%",
        height: "100%",
        scrolling: "no",
        load: function(){
	      // TODO: re-enable tabs
          console.log('loaded')
        }
      })
      
      $('#tabs_tabs_tab_'+name.replace(".","\\.")+" .w2ui-tab").addClass("selectedTab")
      
      d.append(ifr);       
      
      w2ui.tabs.click(name)
    }
  }
}

