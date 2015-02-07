'use strict';

angular.module('budgetstarfe.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm) {
    elm.text(version);
  };
}]);
