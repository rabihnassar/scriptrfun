(function(angular) {
  'use strict';
angular.module('invoice3', ['finance3'])
  .controller('InvoiceController', ['currencyConverter', function InvoiceController(currencyConverter) {
    this.models = currencyConverter.models; ["A", "B", "C"]
    this.qty = 1;
    this.cost = 2;
    this.inCurr = 'EUR';
    this.currencies = currencyConverter.currencies;

    this.total = function total(outCurr) {
      return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
    };
    this.pay = function pay() {
      window.alert('Thanks!');
    };
  }]);
})(window.angular);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/