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
      'ngRoute',
      'budgetstarfe.splash',
      'budgetstarfe.register'
    ]);

  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.otherwise({redirectTo: '/splash'});
  }]);
})();
