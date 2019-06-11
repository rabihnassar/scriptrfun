var events={}
var components = []

function sendEvent() {
    var src = arguments[2].parentNode.id
    var event = arguments[0]
    var argument = arguments[1]
    
    console.info(src, event, argument)
    events[src][event](argument)
}

function addListener(id, event, handler) {
    if (!components[id]) components[id]={}
    components[id][event] = handler
}

function onEvent(componentId, EventId, value) {
    components[componentId][EventId](value)
}

