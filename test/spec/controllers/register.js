'use strict';

describe('Controller:  RegisterController', function() {

  beforeEach(module('budgetstarfe.register'));

  var registerCtrl;
  var scope;
  var modalInstance;
  var newUser = {
    firstName: 'Fred',
    lastName: 'Flintstone',
    email: 'fred.flinestone@email.com',
    userName: 'fred.flintstone',
    password: 'password',
    confPassword: 'password'
  };

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();

    modalInstance = {
      close: jasmine.createSpy('modalInstance.close'),
      dismiss: jasmine.createSpy('modalInstance.dismiss'),
      result: {
        then: jasmine.createSpy('modalInstance.result.then')
      }
    };

    registerCtrl = $controller('RegisterController', {$modalInstance: modalInstance, $scope: scope});
  }));

  it('should have an empty newUser to start with', function() {
    expect(registerCtrl.newUser).toEqual({});
  });

  it ('should have config.currentYear set to the current year', function() {
    var thisYear = new Date().getFullYear();
    expect(registerCtrl.config.currentYear).toEqual(thisYear);
  });

  it('should have written the newUser to the console then clear it on save', function() {
    spyOn(console, 'log');
    registerCtrl.newUser = newUser;

    registerCtrl.saveNewUser();
    expect(console.log).toHaveBeenCalledWith(newUser.firstName);
    expect(console.log).toHaveBeenCalledWith(newUser.lastName);
    expect(console.log).toHaveBeenCalledWith(newUser.email);
    expect(console.log).toHaveBeenCalledWith(newUser.userName);
    expect(console.log).toHaveBeenCalledWith(newUser.password);
    expect(console.log).toHaveBeenCalledWith(newUser.confPassword);
    expect(registerCtrl.newUser).toEqual({});
  });

  it('should not have written the newUser to the console on dismiss', function() {
    spyOn(console, 'log');
    registerCtrl.newUser = newUser;

    registerCtrl.cancelNewUser();
    expect(console.log).not.toHaveBeenCalledWith(newUser.firstName);
    expect(console.log).not.toHaveBeenCalledWith(newUser.lastName);
    expect(console.log).not.toHaveBeenCalledWith(newUser.email);
    expect(console.log).not.toHaveBeenCalledWith(newUser.userName);
    expect(console.log).not.toHaveBeenCalledWith(newUser.password);
    expect(console.log).not.toHaveBeenCalledWith(newUser.confPassword);
    expect(registerCtrl.newUser).toEqual({});
  });
});
