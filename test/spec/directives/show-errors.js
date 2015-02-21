'use strict';
/**
 * Created by chrissparrow on 2/16/15.
 */
describe('directive: show-errors', function() {
  var element;
  var scope;

  beforeEach(module('budgetstarfe'));

  beforeEach(inject(function($rootScope, $compile) {
    scope = $rootScope.$new();

    element = '<form name="registerForm" novalidate role="form">' +
                '<div class="form-group" show-errors="{showSuccess: true}">' +
                  '<div class="input-group">' +
                    '<input type="text" class="input-md form-control" name="firstName" id="firstName" data-ng-model="firstName" placeholder="Enter your First Name" required data-ng-maxlength="30"/>' +
                  '</div>' +
                '</div>';

    scope.firstName = '';

    element = $compile(element)(scope);
    scope.$digest();
  }));

  it('should not have has-errors class on the form-group div initially', function() {
    expect($($(element).children()[0]).hasClass('has-error')).toBe(false);
    expect($($(element).children()[0]).hasClass('has-success')).toBe(false);
  });

  it('should have has-errors class on the form-group div on blur', function() {
    scope.$broadcast('show-errors-check-validity');
    element.find('input').blur();
    expect($($(element).children()[0]).hasClass('has-error')).toBe(true);
    expect($($(element).children()[0]).hasClass('has-success')).toBe(false);
  });

  it('should have has-errors class on the form-group div too many chars', function() {
    scope.firstName = '1234567890123456780123456780123456780';
    scope.$digest();
    element.find('input').blur();
    expect($($(element).children()[0]).hasClass('has-error')).toBe(true);
    expect($($(element).children()[0]).hasClass('has-success')).toBe(false);
  });

  it('should have has-success class on the form-group div when populated correctly', function() {
    scope.firstName = 'Freddie';
    scope.$digest();
    scope.$broadcast('show-errors-check-validity');
    expect($($(element).children()[0]).hasClass('has-success')).toBe(true);
    expect($($(element).children()[0]).hasClass('has-error')).toBe(false);
  });

  it('should have no has-* classes on the form-group div on reset', function() {

    scope.$broadcast('show-errors-reset');
    expect($($(element).children()[0]).hasClass('has-error')).toBe(false);
    expect($($(element).children()[0]).hasClass('has-success')).toBe(false);
  });
});
