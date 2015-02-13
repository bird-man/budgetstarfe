/**
 * Created by chrissparrow on 2/11/15.
 */
'use strict';

describe('budgetstarfe Module:', function() {
  var budgetstarfe;
  beforeEach(function() {
    budgetstarfe = angular.module('budgetstarfe');
  });

  it('should be registered', function() {
    expect(budgetstarfe).not.toBeNull();
  });

  describe('budgetstarfe Dependencies:', function() {
    var deps;
    var hasModule = function(m) {
      return deps.indexOf(m) >= 0;
    };

    beforeEach(function() {
      deps = budgetstarfe.value('appName').requires;
    });

    it('should have ngCookies as a dependency', function() {
      expect(hasModule('ngCookies')).toBe(true);
    });

    it('should have ngMessages as a dependency', function() {
      expect(hasModule('ngMessages')).toBe(true);
    });

    it('should have ngResource as a dependency', function() {
      expect(hasModule('ngResource')).toBe(true);
    });

    it('should have ngRoute as a dependency', function() {
      expect(hasModule('ngRoute')).toBe(true);
    });

  });

  describe('budgetstarfe Routes:', function() {
    it('should map routes to controllers', function() {
      module('budgetstarfe');

      inject(function($route) {
        expect($route.routes[null].redirectTo).toEqual('/splash');
      });
    });
  });

});

