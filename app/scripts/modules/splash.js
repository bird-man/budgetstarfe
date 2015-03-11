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
    'ngResource',
    'budgetstarfe.register']);

  splashApp.constant('client_id', 'l3t=GGF==IfBpNUZ.F5aL6.6pes?-8d=qST1WUnR');
  splashApp.constant('client_secret', '3W;Y=;6z4LJ1SDT;Cl.kApC4koS5F85kCZt4x8.yy=7IVghNX_1Uq4=SLe5?_Gs=qQ5YsYXt?Z=_tnxK;._9UyA_s!Kt7.H5_m6WllG5g4JJbWxjvAi-Xbo_QE1EfR8p');
  splashApp.constant('beURI', 'http://localhost:8000');
  splashApp.value('currentUser', {
    last_name: '',
    first_name: '',
    username: '',
    email: '',
    access_token: '',
    refresh_token: '',
    scope: '',
    expires_in: 0,
    token_type: ''
  });

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
