'use strict';

/**
 * @ngdoc overview
 * @name budgetstarfe
 * @description
 * # budgetstarfe
 *
 * Main module of the application.
 */
angular
  .module('budgetstarfe', [
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
