/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var config = require("configuration");

function reMapTemp(tempValue, in_min, in_max, out_min, out_max){
        return (tempValue - in_min) * (out_max - out_min) / (in_max - in_min) + out_min; 
}

var apiResponse = apsdb.callHttp("http://api.wunderground.com/api/"+config.wundergroundApiKey
                                 	+"/conditions/q/"+config.wundergroundLocation+".json");
 if( apiResponse.status == 200){
     var parsedResponse = JSON.parse(apiResponse.body);
     var currentTemp = parsedResponse.current_observation.temp_f;
     var output_value = 0;
     if (currentTemp < 0) {
       output_value = 0;
     } else if (currentTemp > 100){
       output_value = 100;
     }else {
       output_value = reMapTemp(currentTemp, 0, 100, 0, 91);
     }
     return output_value;
 }else{
     return "oops not ok response!"
 }   							