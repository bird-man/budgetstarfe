'use strict';

/**
 * @ngdoc overview
 * @name budgetstarfe
 * @description
 * # budgetstarfe
 *
 * Main module of the application.
 */
(function() {
  var app = angular.module('budgetstarfe', [
      'ngCookies',
      'ngMessages',
      'ngResource',
      'ngRoute'
    ]);

  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/splash'});
  }]);

})();
