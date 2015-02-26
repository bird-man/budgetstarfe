'use strict';
/**
 * Created by chrissparrow on 2/21/15.
 */
describe('directive: compare-to', function() {
  var element;
  var scope;

  beforeEach(module('budgetstarfe'));

  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();

    element = '<form name="compareToForm" novalidate>' +
                '<input type="text" name="firstValue" ng-model="firstValue" />' +
                '<input type="text" name="secondValue" ng-model="secondValue" compare-to="firstValue"/>' +
              '</form>';

    element = $compile(element)(scope);
    scope.$digest();

  }));

  it('should have secondValue as valid initially', function() {
    expect(scope.compareToForm.secondValue.$valid).toBe(true);
  });

  it('should have secondValue as valid when equals firstValue', function() {
    scope.firstValue = 'Some Enchanted Evening';
    scope.secondValue = 'Some Enchanted Evening';
    scope.$digest();
    expect(scope.compareToForm.secondValue.$valid).toBe(true);
  });

  it('should have secondValue as invalid when does not equal firstValue', function(){
    scope.firstValue = 'Some Enchanted Evening';
    scope.secondValue = 'Some Enchanted Morning';
    scope.$digest();
    expect(scope.compareToForm.secondValue.$invalid).toBe(true);
  });
});
