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

  splashApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/splash', {
      templateUrl: 'views/splash/splash.html',
      controller: 'SplashController'
    });
    $routeProvider.when('/login', {
      templateUrl: 'views/splash/login.html',
      controller: 'SplashController'
    });

    $locationProvider.html5Mode(true);
  }]);
})();
