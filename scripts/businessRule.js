/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var amount = request.parameters.amount
if (amount > 100 ) return amount * 20
if (amount < 100 ) return amount * 40

   							