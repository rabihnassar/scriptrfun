/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="variables_set" id="1" inline="true" x="-2" y="-7"><field name="VAR">msg</field><value name="VALUE"><block type="scriptr_jsonstringify" id="2" inline="true"><value name="stringJson"><block type="dicts_create_with" id="3" inline="false"><mutation items="2"></mutation><field name="KEY0">control</field><field name="KEY1">value</field><value name="INPUT0"><block type="text" id="4"><field name="TEXT">display2</field></block></value><value name="INPUT1"><block type="text_join" id="5" inline="false"><mutation items="2"></mutation><value name="ADD0"><block type="text" id="6"><field name="TEXT">Testing channels: </field></block></value><value name="ADD1"><block type="math_random_int" id="7" inline="true"><value name="FROM"><block type="math_number" id="8"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number" id="9"><field name="NUM">1000</field></block></value></block></value></block></value></block></value></block></value><next><block type="scriptr_Console_log" id="10" inline="true"><field name="level">log</field><value name="message"><block type="variables_get" id="11"><field name="VAR">msg</field></block></value><next><block type="scriptr_return" id="12" inline="false"><value name="return"><block type="scriptr_publish" id="13" inline="true"><value name="message"><block type="variables_get" id="14"><field name="VAR">msg</field></block></value><value name="channel"><block type="text" id="15"><field name="TEXT">virtualDeviceIn</field></block></value></block></value></block></next></block></next></block></xml>*#*#*/
var msg;

function math_random_int(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


msg = ((function(){var obj = {"control": 'display2',
	"value": String('Testing channels: ') + String(math_random_int(1, 1000))}; if(typeof obj == "object") return JSON.stringify(obj); else return obj;})());
(function(){ console.log(msg)})();return publish ('virtualDeviceIn', msg,false)			