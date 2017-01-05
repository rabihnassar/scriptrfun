(function(angular) {
  'use strict';
angular.module('finance3', [])
  .factory('currencyConverter', ['$http', function($http) {
    var YAHOO_FINANCE_URL_PATTERN =
          '//query.yahooapis.com/v1/public/yql?q=select * from ' +
          'yahoo.finance.xchange where pair in ("PAIRS")&format=json&' +
          'env=store://datatables.org/alltableswithkeys&callback=JSON_CALLBACK';
    var currencies = ['USD', 'EUR', 'CNY'];
    var usdToForeignRates = {};
	var models = {}
    var convert = function(amount, inCurr, outCurr) {
      return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
    };
    usdToForeignRates = {USD: 1, EUR: 2, CNY: 3}

    var getModels = function() {
      return models
    }
    
    
    var refresh = function() {
      var url = YAHOO_FINANCE_URL_PATTERN.
                 replace('PAIRS', 'USD' + currencies.join('","USD'));
      return $http.jsonp(url).then(function(response) {
console.log(response)        
        var newUsdToForeignRates = {};
        angular.forEach(response.data.query.results.rate, function(rate) {
          var currency = rate.id.substring(3,6);
          newUsdToForeignRates[currency] = window.parseFloat(rate.Rate);
        });
        usdToForeignRates = newUsdToForeignRates;
      });
    };

    var refresh2 = function() {
      $http({
        method: 'GET',
        url: 'https://rabih.scriptrapps.io/devices/backend/listScripts'
      }).then(function(response) {
        	models = response.data.response.result 
console.log(response.data.response.result)
      }, function errorCallback(response) {
      });
    }

    refresh();
    refresh2()

    return {
      currencies: currencies,
      convert: convert,
      models: models
    };
  }]);
})(window.angular);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/