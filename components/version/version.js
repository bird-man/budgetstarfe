'use strict';

angular.module('budgetstarfe.version', [
  'budgetstarfe.version.interpolate-filter',
  'budgetstarfe.version.version-directive'
])

.value('version', '0.1');
