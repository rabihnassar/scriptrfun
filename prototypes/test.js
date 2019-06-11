require("/modules/framr/Framr").init(this, {classPath: "./modules/"})

logger.setLevel("DEBUG")

var loadFile = require("/prototypes/lib/loadFile").loadFile

var txt = loadFile("pageSample.json")

var page = {
    styleSheet: "https://rabih.scriptrapps.io/prototypes/page.css",
    sections: {
        myList: {
            hint: {color: "green", disabled: false}, // sample of meta data or styling to inject into component to be interpreted by component
            component: "someList",
            events: {
                itemSelect: function(value) {
                    onEvent('showMyItem', value)
                } 
            }
        },
        myItem: {
            component: "someDetail"
        }
    }
}


logger.log(txt)

return JSON.parse(txt)