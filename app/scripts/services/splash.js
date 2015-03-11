'use strict';
/**
 * @ngdoc overview
 * @name budgetstarfe.splash.service
 * @description
 * # budgetstarfe.splash.Credential
 *
 * Credential authentication factory of the BudgetStar.
 */
(function() {
  var splashApp = angular.module('budgetstarfe.splash');

  splashApp.factory('Credential', ['$resource', 'beURI', 'client_id', 'client_secret', function($resource, beURI, client_id, client_secret) {
    return $resource(beURI + '/o/token/', null, {authenticate: {
      method: 'POST',
      isArray: false,
      headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
      transformRequest: function(data, headersGetter) {
        var str = [];
        for (var key in data) {
          str.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        str.push(encodeURIComponent('client_id') + '=' + encodeURIComponent(client_id));
        str.push(encodeURIComponent('client_secret') + '=' + encodeURIComponent(client_secret));

        return str.join('&');
      }
    }})
  }]);

})();
