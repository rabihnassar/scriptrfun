/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="variables_set" id="1" inline="true" x="2" y="14"><field name="VAR">msg</field><value name="VALUE"><block type="scriptr_jsonstringify" id="2" inline="true"><value name="stringJson"><block type="dicts_create_with" id="3" inline="false"><mutation items="2"></mutation><field name="KEY0">id</field><field name="KEY1">value</field><value name="INPUT0"><block type="text" id="4"><field name="TEXT">slider</field></block></value><value name="INPUT1"><block type="text" id="5"><field name="TEXT">888</field></block></value></block></value></block></value><next><block type="scriptr_return" id="6" inline="false"><value name="return"><block type="scriptr_publish" id="7" inline="true"><value name="message"><block type="variables_get" id="8"><field name="VAR">msg</field></block></value><value name="channel"><block type="text" id="9"><field name="TEXT">virtualDeviceSend</field></block></value></block></value></block></next></block></xml>*#*#*/
var msg;


msg = ((function(){var obj = {"id": 'slider',
	"value": '888'}; if(typeof obj == "object") return JSON.stringify(obj); else return obj;})());
return publish ('virtualDeviceSend', msg,false)			