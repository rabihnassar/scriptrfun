/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="controls_if" id="1" inline="false" x="-9" y="2"><value name="IF0"><block type="logic_compare" id="2" inline="true"><field name="OP">GT</field><value name="A"><block type="dict_get" id="3" inline="true"><field name="ITEM">temp</field><value name="DICT"><block type="scriptr_request" id="4"><field name="request">parameters</field></block></value></block></value><value name="B"><block type="math_number" id="5"><field name="NUM">30</field></block></value></block></value><statement name="DO0"><block type="variables_set" id="6" inline="true"><field name="VAR">message</field><value name="VALUE"><block type="text_join" id="7" inline="false"><mutation items="3"></mutation><value name="ADD0"><block type="text" id="8"><field name="TEXT">It's </field></block></value><value name="ADD1"><block type="dict_get" id="9" inline="true"><field name="ITEM">temp</field><value name="DICT"><block type="scriptr_request" id="10"><field name="request">parameters</field></block></value></block></value><value name="ADD2"><block type="text" id="11"><field name="TEXT">'C !</field></block></value></block></value><next><block type="scriptr_return" id="12" inline="false"><value name="return"><block type="scriptr_sendmail" id="13" inline="true"><value name="to"><block type="text" id="14"><field name="TEXT">manager@freezers.com</field></block></value><value name="from"><block type="text" id="15"><field name="TEXT">Your living room</field></block></value><value name="subject"><block type="text" id="16"><field name="TEXT">it's warm in here</field></block></value><value name="body"><block type="variables_get" id="17"><field name="VAR">message</field></block></value></block></value></block></next></block></statement></block></xml>*#*#*/
var message;


if ((request.parameters)["temp"] > 30) {
  message = ['It\'s ',(request.parameters)["temp"],'\'C !'].join('');
  return sendMail ('manager@freezers.com', 'Your living room', 'it\'s warm in here', message)}
			