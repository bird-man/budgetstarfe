'use strict';
/**
 * Created by chrissparrow on 2/21/15.
 */
describe('directive: pw-strength', function() {
  var element;
  var scope;
  var $compile;
  var registerCtrl;
  var modalInstance;

  beforeEach(module('budgetstarfe'));

  beforeEach(inject(function($rootScope, _$compile_, $controller) {
    scope = $rootScope.$new();
    $compile = _$compile_;

    modalInstance = {
      close: jasmine.createSpy('modalInstance.close'),
      dismiss: jasmine.createSpy('modalInstance.dismiss'),
      result: {
        then: jasmine.createSpy('modalInstance.result.then')
      }
    };

    registerCtrl = $controller('RegisterController', {$modalInstance: modalInstance, $scope: scope})
    scope.$digest();
  }));

  it('should raise an error if not within a form', function() {
    element = '<div id="pwd-container">' +
                '<input type="password" name="password" data-ng-model="registerCtrl.newUser.password" pw-strength="{currentYear: true, usernameField: \'#userName\', userInputs: [\'#firstName\']}" />' +
              '</div>';
    try {
      element = $compile(element)(scope);
      expect(false).toBe(true);
    }
    catch(err) {
      expect(err.message.indexOf('$compile/ctreq')).toBeGreaterThan(-1);
    }
  });

  it('should raise an error if not within a pwd-container div', function() {
    element = '<form name="pwForm" novalidate role="form">' +
                '<input type="password" name="password" data-ng-model="registerCtrl.newUser.password" pw-strength="{currentYear: true, usernameField: \'#userName\', userInputs: [\'#firstName\']}" />' +
              '</form>';
    expect(function() {element = $compile(element)(scope);}).toThrowError('pw-strength must be within a div with id="pwd-container"');
  });

  it('should raise an error if the document does not have a div w/ class pwstrength_viewport_progress', function() {
    element = '<form name="pwForm" novalidate role="form">' +
                '<div id="pwd-container">' +
                  '<input type="password" name="password" data-ng-model="registerCtrl.newUser.password" pw-strength="{currentYear: true, usernameField: \'#userName\', userInputs: [\'#firstName\']}" />' +
                '</div>' +
              '</form>';
    expect(function() {element = $compile(element)(scope);}).toThrowError('pw-strength pwd-container div must have div with class="pwstrength_viewport_progress"');
  });

  it('should raise an exception if currentYear is true and the form does not have a hidden field with id=currrentYear', function() {
    element = '<form name="pwForm" novalidate role="form">' +
                '<div id="pwd-container">' +
                  '<input type="password" name="password" data-ng-model="registerCtrl.newUser.password" pw-strength="{currentYear: true, usernameField: \'#userName\', userInputs: [\'#firstName\']}" />' +
                  '<div class="pwstrength_viewport_progress"></div>' +
                  '<div id=messages></div>' +
                '</div>' +
              '</form>';
    expect(function() {element = $compile(element)(scope);}).toThrowError('pw-strength if currentYear: true the form must have a hidden input with id="currentYear"');
  });

});
