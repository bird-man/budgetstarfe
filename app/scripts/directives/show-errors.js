'use strict';

/**
 * @ngdoc overview
 * @name showErrors
 * @description
 * # directive to show form validation errors
 *
 * Directive to show form validation errors
 */
(function() {
  var app = angular.module('budgetstarfe');

  app.provider('showErrorsConfig', function() {
    var _showSuccess = false;

    this.showSuccess = function(showSuccess) {
      return _showSuccess = showSuccess;
    };

    this.$get = function() {
      return {showSuccess: _showSuccess};
    };
  });

  app.directive('showErrors', ['$timeout', 'showErrorsConfig', function($timeout, showErrorsConfig) {
    var getShowSuccess;
    var linkFn;

    getShowSuccess = function(options) {
      var showSuccess = showErrorsConfig.showSuccess;
      if (options && options.showSuccess != null) {
        showSuccess = options.showSuccess;
      }
      return showSuccess;
    };

    linkFn = function(scope, el, attrs, formCtrl) {
      var toggleClasses;
      var blurred = false;
      var options = scope.$eval(attrs.showErrors);
      var showSuccess = getShowSuccess(options);
      //find the text box element, which has the 'name' attribute
      var inputEl = el[0].querySelector('[name]');
      //convert the native text box element to an angular element
      var inputNgEl = angular.element(inputEl);
      //get the name on the text box
      var inputName = inputNgEl.attr('name');

      if (!inputName) {
        throw 'show-errors element has no child input elements with a \'name\' attribute';
      }

      //only apply the has-error class after the user leaves the text box
      inputNgEl.bind('blur change', function() {
        blurred = true;
        return toggleClasses(formCtrl[inputName].$invalid);
      });


      scope.$watch(function() {
        return formCtrl[inputName] && formCtrl[inputName].$invalid;
      },
      function(invalid) {
        if (!blurred) {
          return;
        }
        return toggleClasses(invalid);
      });

      scope.$on('show-errors-check-validity', function() {
        return toggleClasses(formCtrl[inputName].$invalid);
      });

      scope.$on('show-errors-reset', function() {
        return $timeout(function() {
          el.removeClass('has-error');
          el.removeClass('has-success');
          return blurred = false;
        }, 0, false);
      });

      return toggleClasses = function(invalid) {
        el.toggleClass('has-error', invalid);
        if (showSuccess) {
          return el.toggleClass('has-success', !invalid);
        }
      };
    };

    return {
      restrict: 'A',
      require: '^form',
      compile: function(elem, attrs) {
        if (!elem.hasClass('form-group')) {
          throw 'show-errors element does not have the \'form-group\' class';
        }
        return linkFn;
      }
    };
  }]);
})();
