function registerHTTPVerb(method) {
  scriptrCommands.push({
    name : method,
    method : function(cmd){
      var script, params, showResponse=false, token
      var url = "api.scriptrapps.io"

      var s = $ptty.get_command_option('last')
      var t = s.split(" ")
      var command = t[0]
      var script = t[1]
      var _url

      try {
        params = parseForParam(s, "-p", true)
        headers = parseForParam(s, "-h", true)
        _url = parseForParam(s, "-u")
        if (_url) url = _url
        var showResponse = s.indexOf("-response")>0

        token = undefined

        http(method, url, script, params, showResponse, token)

      } catch (e) {
        var s=""
        for (var i=0;i<e.position-1;i++) s+=" "
        $ptty.echo("")
		$ptty.echo(e.message)
        $ptty.echo("")
      }

    },
    help: 'invokes a scriptr.io endpoint by using HTTP '+method+'.\n\nexample:\n'+method+' /my/script -params {"humidity": "33", "temp": "22"} -header {"header1":"value1"} -u api.scriptrapps.io -response\n'
  })
}

registerHTTPVerb("get")
registerHTTPVerb("put")
registerHTTPVerb("delete")
registerHTTPVerb("post")
registerHTTPVerb("patch")
registerHTTPVerb("option")
