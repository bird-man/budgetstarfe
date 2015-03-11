'use strict';

/**
 * @ngdoc function
 * @name budgetstarfe.splash.controller:SplashController
 * @description
 * # SplashController
 * Controller of the budgetstarfe.splash module
 */
(function() {
  var splashApp = angular.module('budgetstarfe.splash');
  splashApp.controller('SplashController', ['$location', 'registerModalService', 'Credential', 'currentUser', function($location, registerModalService, Credential, currentUser) {
    currentUser.loggedIn = false;

    this.register = function() {
      registerModalService.show();
    };

    this.login = function(username, password) {
      var credential = Credential;
      credential.username = username;
      credential.password = password;
      credential.$authenticate([], function(response, responseHeaders){
        currentUser.loggedIn = true;
        currentUser.refresh_token = response.refresh_token;
        currentUser.scope = response.scope;
        currentUser.expires_in = response.expires_in;
        currentUser.token_type = response.token_type;
        currentUser.access_token = response.access_token;
        currentUser.username = username;
      },
      function(httpResponse) {
        console.log('********* in Error Function');
        console.log('Error logging in');
        currentUser.loggedIn = false;
        currentUser.refresh_token = '';
        currentUser.scope = '';
        currentUser.expires_in = 0;
        currentUser.token_type = '';
        currentUser.access_token = '';
        currentUser.username = '';
      });
      $location.path('/splash/');
    };

    this.logout = function() {
      currentUser.loggedIn = false;
      currentUser.refresh_token = '';
      currentUser.scope = '';
      currentUser.expires_in = 0;
      currentUser.token_type = '';
      currentUser.access_token = '';

      $location.path('/splash/');
    };

  }]);

})();
