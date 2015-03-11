'use strict';

/**
 * @ngdoc overview
 * @name budgetstarfe.register.service.registerModalService
 * @description
 * # budgetstarfe.register.service
 *
 * User Registration modal service of the BudgetStar.
 */
(function() {
  var registerApp = angular.module('budgetstarfe.register');

  registerApp.service('registerModalService', ['$modal',
    function ($modal) {
      this.show = function() {
        var modalOptions = {
          backdrop: 'static',
          keyboard: true,
          modalFade: true,
          templateUrl: '/budgetstarfe/app/views/register-form.html',
          controller: 'RegisterController',
          controllerAs: 'registerCtrl'
        };

        $modal.open(modalOptions);
      };
    }
  ]);

})();
