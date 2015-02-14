'use strict';

/**
 * @ngdoc function
 * @name budgetstarfe.register.controller:RegisterController
 * @description
 * # RegisterController
 * Controller of the budgetstarfe.register module
 */
(function() {
  var registerApp = angular.module('budgetstarfe.register');

  registerApp.controller('RegisterController', function($modalInstance, $scope) {
    this.newUser = {};

    this.saveNewUser = function() {
      console.log(this.newUser.firstName);
      console.log(this.newUser.lastName);
      console.log(this.newUser.email);
      console.log(this.newUser.userName);
      console.log(this.newUser.password);
      console.log(this.newUser.confPassword);
      this.newUser = {};
      $modalInstance.close();
    };

    this.cancelNewUser = function() {
      //$scope.$broadcast('show-errors-reset');
      this.newUser = {};
      $modalInstance.dismiss('cancel');
    };
  })
})();
