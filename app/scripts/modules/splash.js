'use strict';

/**
 * @ngdoc overview
 * @name budgetstarfe.splash
 * @description
 * # budgetstarfe.splash
 *
 * Module for the splash page
 */
(function() {
  var splashApp = angular.module('budgetstarfe.splash', ['ngRoute',
    'ui.bootstrap',
    'budgetstarfe.register']);

  splashApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/splash', {
      templateUrl: 'views/splash.html',
      controller: 'SplashController'
    });
    $routeProvider.when('/login', {
      templateUrl: 'views/login.html',
      controller: 'SplashController'
    });

  }]);

})();
