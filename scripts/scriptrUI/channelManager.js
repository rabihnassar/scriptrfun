angular.
  module('channelManager', ['ngWebSocket']).
   provider('WS',  function wsProvider() {
      var wsUrl = null;
      var publishChannel = null;
 	  var subscribeChannel = null;

      this.setWsUrl = function (textString) {
      	wsUrl = textString;
      };

	  this.setPublishChannel = function (textString) {
      	publishChannel = textString;
      };

	  this.setSubscribeChannel = function (textString) {
      	subscribeChannel = textString;
      };

      this.$get = ["$websocket", function wsFactory($websocket) {
      //Open a WebSocket connection
      var dataStream = $websocket(wsUrl);
      var collection = {};
      dataStream.onOpen(function() {
        dataStream.send(JSON.stringify({
            "method":"Subscribe",
            "params":{
              "channel": subscribeChannel
            }
          }))
      });
        
      dataStream.onMessage(function(message) {
         collection["data"] = JSON.parse(message.data);
      });
        
      var methods = {
        collection: collection,
        send: function(message) {
          dataStream.send({
               "method":"Publish",
               "params":{
                 "channel": publishChannel,
               	 "message": JSON.stringify(message)
               }
          });
        }
      };
     return methods;
	}]
}).controller("ScriptrRLTController", function WdgController($scope, WS) {
   $scope.msg = WS.collection;
   $scope.model = {};
   $scope.$watch('msg', function (newVal, oldVal) {
      if (typeof newVal !== 'undefined') {
         if($scope.msg["data"] && $scope.msg["data"]) {
              $scope.model = $scope.msg["data"]
              $scope.handleMessage();
         }
      }
  }, true); //True, maybe better keep value stringifyed and parse it here for performance issues.
  

  $scope.publish = function(message) {
     WS.send(message);
  };
});

