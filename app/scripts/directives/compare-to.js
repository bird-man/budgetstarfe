'use strict';

/**
 * @ngdoc overview
 * @name compareTo
 * @description
 * # directive to show errors for form values that should be equal
 *
 * Directive to show errors for form values that should be equal
 */
(function() {
  var app = angular.module('budgetstarfe');

  var compareTo = function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        otherModelValue: '=compareTo'
      },
      link: function(scope, el, attr, ngModel) {
        ngModel.$validators.compareTo = function(modelValue) {
          return modelValue == scope.otherModelValue;
        };

        scope.$watch("otherModelValue", function() {
          ngModel.$validate;
        });
      }
    };
  };

  app.directive('compareTo', compareTo);

})();
