'use strict';

describe('Controller: SplashController', function () {
  var registerModalServiceMock;
  var CredentialMock;
  var scope;
  var SplashCtrl;
  var location;
  var injector;

  var pretendingError = false;

  //load the controller's module
  beforeEach(module('budgetstarfe.splash'));

  // load the controller's module and setup the mock service
  beforeEach(inject(function($controller, $rootScope, $location, currentUser, $injector) {
    scope = $rootScope.$new();
    location = $location;

    injector = $injector;

    registerModalServiceMock = {
      show: function() {
        console.log('Called registerModalService.show');
      }
    };

    CredentialMock = {
      $authenticate:  function(parms, callback, errorCallback) {
        var response = {
          refresh_token: 'A refresh token',
          scope: 'write groups read',
          expires_in: 36000,
          token_type: 'Bearer',
          access_token: 'An access token'
        };

        var responseHeaders = {};
        var httpResponse = {};

        if (pretendingError) {
          errorCallback(httpResponse);
        }
        else {
          callback(response, responseHeaders);
        }
      }
    };

    spyOn(console, 'log');

    SplashCtrl = $controller('SplashController', {$location: $location, registerModalService: registerModalServiceMock, Credential: CredentialMock, currentUser: currentUser});
  }));

  it('should not have a logged in session', inject(function(currentUser) {
    expect(currentUser.loggedIn).toBe(false);
  }));

  it('should call registerModalService.show() when registering', function() {
    spyOn(registerModalServiceMock, 'show').and.callThrough();
    SplashCtrl.register();
    expect(console.log).toHaveBeenCalledWith('Called registerModalService.show');
  });

  it('should add the currentUser to session when logging in', inject(function(currentUser) {
    spyOn(CredentialMock, '$authenticate').and.callThrough();
    SplashCtrl.login('robin.mccurdy', '$Robin2014');
    expect(currentUser.loggedIn).toBe(true);
    expect(currentUser.username).toEqual('robin.mccurdy');
    expect(currentUser.refresh_token).toEqual('A refresh token');
    expect(currentUser.scope).toEqual('write groups read');
    expect(currentUser.expires_in).toEqual(36000);
    expect(currentUser.token_type).toEqual('Bearer');
    expect(currentUser.access_token).toEqual('An access token');
    expect(location.path()).toEqual('/splash/');
  }));

  it('should write a message to the log when login fails', inject(function(currentUser) {
    pretendingError = true;
    spyOn(CredentialMock, '$authenticate').and.callThrough();
    SplashCtrl.login('robin.mccurdy', '$Robin2014');
    expect(console.log).toHaveBeenCalledWith('Error logging in');
    expect(currentUser.loggedIn).toBe(false);
    expect(currentUser.username).toEqual('');
    expect(currentUser.refresh_token).toEqual('');
    expect(currentUser.scope).toEqual('');
    expect(currentUser.expires_in).toEqual(0);
    expect(currentUser.token_type).toEqual('');
    expect(currentUser.access_token).toEqual('');
    expect(location.path()).toEqual('/splash/');
  }));

  it('should remove the user from session when logging out', inject(function(currentUser) {
    SplashCtrl.logout();
    expect(currentUser.loggedIn).toBe(false);
    expect(currentUser.username).toEqual('');
    expect(currentUser.refresh_token).toEqual('');
    expect(currentUser.scope).toEqual('');
    expect(currentUser.expires_in).toEqual(0);
    expect(currentUser.token_type).toEqual('');
    expect(currentUser.access_token).toEqual('');
    expect(location.path()).toEqual('/splash/');
  }));
});

