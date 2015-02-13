'use strict';

describe('Controller: SplashController', function () {
  var registerModalService;
  var $location;

  // load the controller's module and setup the mock service
  beforeEach(function() {
    var mockRegisterModalService = {};
    module('budgetstarfe.splash', function($provide){
      $provide.value('registerModalService', mockRegisterModalService);
    });

    inject(function() {
      mockRegisterModalService.show = function() {
        console.log('Called registerModalService.show');
      };
    });

    spyOn(console, 'log');

  });

  var SplashCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$location_, _registerModalService_) {
    scope = $rootScope.$new();
    $location = _$location_;
    registerModalService = _registerModalService_;

    SplashCtrl = $controller('SplashController', {$location: $location, registerModalService: registerModalService});
  }));

  it('should not have a logged in session', function () {
    expect(SplashCtrl.session.loggedIn).toBe(false);
  });

  it('should call registerModalService.show() when registering', function() {
    SplashCtrl.register();
    expect(console.log).toHaveBeenCalledWith('Called registerModalService.show');
  });

  it('should add the user to session when logging in', function() {
    var user = {lastName: 'Flintstone', firstName: 'Fred'};
    SplashCtrl.login(user);
    expect(SplashCtrl.session.loggedIn).toBe(true);
    expect(SplashCtrl.session.user.lastName).toEqual('Flintstone');
    expect(SplashCtrl.session.user.firstName).toEqual('Fred');
    expect($location.path()).toEqual('/splash');
  });

  it('should remove the user from session when logging out', function() {
    SplashCtrl.logout();
    expect(SplashCtrl.session.loggedIn).toBe(false);
    expect(SplashCtrl.session.user).toBeNull();
    expect($location.path()).toEqual('/splash');
  });
});

