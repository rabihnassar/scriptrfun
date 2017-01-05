var devices = require("device")
result = devices.get("scriptr")

response.write("RECEIVE_CHANNEL = 'debug'\n")
response.write("SCRIPTR_URL = 'api.scriptrapps.io'\n")
response.write("SCRIPTR_TOKEN = '"+result.result.auth_token+"'\n")

// whenever you manipulate the response object make sure to add your CORS settings to the header
response.addHeaders(configuration.crossDomainHeaders)
response.close()