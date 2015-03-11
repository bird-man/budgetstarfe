'use strict';
/**
 * Created by chrissparrow on 3/9/15.
 */
describe('Testing budgetstarfe.register Module', function() {
  var registerApp;

  beforeEach(function() {
    registerApp = angular.module('budgetstarfe.register');
  });

  it('should be registered', function() {
    expect(registerApp).not.toBeNull();
  });

  describe('budgetstarfe.register Dependencies:', function() {
    var deps;
    var hasModule = function(m) {
      return deps.indexOf(m) >= 0;
    };

    beforeEach(function() {
      deps = registerApp.value('appName').requires;
    });

    it('should have ui.bootstrap as a dependency', function() {
      expect(hasModule('ui.bootstrap')).toBe(true);
    });

  });
});

