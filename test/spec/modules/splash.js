'use strict';
/**
 * Created by chrissparrow on 2/12/15.
 */

describe('Testing budgetstarfe.splash Module', function() {
  var splashApp;

  beforeEach(function() {
    splashApp = angular.module('budgetstarfe.splash');
  });

  it('should be registered', function() {
    expect(splashApp).not.toBeNull();
  });

  describe('budgetstarfe.splash Dependencies:', function() {
    var deps;
    var hasModule = function(m) {
      return deps.indexOf(m) >= 0;
    };

    beforeEach(function() {
      deps = splashApp.value('appName').requires;
    });

    it('should have ngRoute as a dependency', function() {
      expect(hasModule('ngRoute')).toBe(true);
    });

    it('should have ui.bootstrap as a dependency', function() {
      expect(hasModule('ui.bootstrap')).toBe(true);
    });

    it('should have budgetstarfe.register as a dependency', function() {
      expect(hasModule('budgetstarfe.register')).toBe(true);
    });
  });

  describe('budgetstarfe.splash Routes:', function() {
    it('should map routes to controllers', function() {
      module('budgetstarfe.splash');

      inject(function($route) {
        expect($route.routes['/splash'].controller).toBe('SplashController');
        expect($route.routes['/splash'].templateUrl).toEqual('views/splash/splash.html');

        expect($route.routes['/login'].controller).toBe('SplashController');
        expect($route.routes['/login'].templateUrl).toEqual('views/splash/login.html');
      });
    });
  });
});
