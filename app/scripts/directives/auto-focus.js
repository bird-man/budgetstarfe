'use strict';
/**
 * @ngdoc overview
 * @name autoFocus
 * @description
 * # directive to set focus on an element when it appears
 *
 * Directive to set focus on an element when it appears
 */
(function() {
  var app = angular.module('budgetstarfe');

  app.directive('autoFocus', ['$timeout', function($timeout) {
    return {
      restrict: 'A',
      link: function($scope, el, attr) {
        var form = el.closest('form');
        var it = form.find("[auto-focus]");
        console.log(it);
        console.log(it.length);

        if (form.find("[auto-focus]").length > 1) {
          throw new Error('auto-focus can only appear on one element of a form');
        }

        $timeout(function() {
          el[0].focus(0);
        }, 0);
        console.log(el[0]);
      }
    };
  }]);

})();
