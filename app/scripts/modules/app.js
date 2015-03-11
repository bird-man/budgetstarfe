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

  app.config(['$routeProvider', '$locationProvider', '$resourceProvider', function($routeProvider, $locationProvider, $resourceProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.otherwise({redirectTo: '/splash'});

    $resourceProvider.defaults.stripTrailingSlashes = false;
  }]);

  app.constant('client_id', 'l3t=GGF==IfBpNUZ.F5aL6.6pes?-8d=qST1WUnR');
  app.constant('client_secret', '3W;Y=;6z4LJ1SDT;Cl.kApC4koS5F85kCZt4x8.yy=7IVghNX_1Uq4=SLe5?_Gs=qQ5YsYXt?Z=_tnxK;._9UyA_s!Kt7.H5_m6WllG5g4JJbWxjvAi-Xbo_QE1EfR8p');
  app.constant('beURI', 'http://localhost:8000');
  app.value('currentUser', {
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
})();
