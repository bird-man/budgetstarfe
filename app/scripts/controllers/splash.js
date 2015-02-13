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
  splashApp.controller('SplashController', ['$location', 'registerModalService', function($location, registerModalService) {
    this.session = {
      loggedIn: false
    };

    this.register = function() {
      registerModalService.show();
    };

    this.login = function(user) {
      this.session.loggedIn = true;
      this.session.user = user;
      $location.path('/splash');
    };

    this.logout = function() {
      this.session.loggedIn = false;
      this.session.user = {};
      $location.path('/splash');
    };

  }]);

})();
