'use strict';

/**
 * @ngdoc overview
 * @name pwStrength
 * @description
 * # directive to show the strength of a password
 *
 * Directive to show the strength of a password
 */
(function() {
  var app = angular.module('budgetstarfe');

  app.directive('pwStrength', ['$compile', function($compile) {
    var linkFn;

    linkFn = function(scope, el, attrs, formCtrl) {
      var strengthOptions = {};
      strengthOptions.ui = {
        container: '#pwd-container',
        showVerdictsInsideProgressBar: true,
        showStatus: true,
        showErrors: false,
        viewports: {
          progress: '.pwstrength_viewport_progress'
        }
      };
      strengthOptions.common = {
        debug: false,
        zxcvbn: true,
        minChar: 8,
        usernameField: '#userName',
        userInputs: [ '#firstName', '#lastName', '#email']
      };

      var pwdContainer = el.closest('div#pwd-container');
      if (!pwdContainer.length) {
        throw new Error('pw-strength must be within a div with id="pwd-container"');
      }

      if (!pwdContainer.children('div.pwstrength_viewport_progress').length) {
        throw new Error('pw-strength pwd-container div must have div with class="pwstrength_viewport_progress"');
      }

      var addCurrentYear = false;
      if (scope.options && scope.options.currentYear) {
        addCurrentYear = true;

        if (!el.closest('form').find('input[id="currentYear"]').length) {
          throw new Error('pw-strength if currentYear: true the form must have a hidden input with id="currentYear"');
        }

      }

      if (scope.options.userInputs && Array.isArray(scope.options.userInputs)) {
        strengthOptions.common.userInputs = scope.options.userInputs;
      }

      if (addCurrentYear) {
        strengthOptions.common.userInputs.push("#currentYear");
      }

      var selector = '#' + el.attr('id');

      $(selector).pwstrength(strengthOptions);
    };

    return {
      restrict: 'A',
      require: '^form',
      scope: {
        options: '=pwStrength'
      },
      link: linkFn
    }
  }]);
})();
