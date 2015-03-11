'use strict';
/**
 * Created by chrissparrow on 3/5/15.
 */
describe('CredentialFactory', function() {
  var scope;
  var httpMock;
  var CredentialMock;
  var beURIMock;
  var clientID;
  var clientSecret;

  beforeEach(module('budgetstarfe.splash'));

  beforeEach(inject(function($rootScope, Credential, $httpBackend, beURI, client_id, client_secret) {
    scope = $rootScope.$new();
    httpMock = $httpBackend;
    CredentialMock = Credential;
    beURIMock = beURI;
    clientID = client_id;
    clientSecret = client_secret;
  }));

  afterEach(function() {
    httpMock.verifyNoOutstandingExpectation();
    httpMock.verifyNoOutstandingRequest();
  });

  it('should fetch authentication info', function() {
    var username = 'robin.mccurdy';
    var password = '$Robin2014';
    httpMock.expect('POST', beURIMock + '/o/token', function(data) {
      var requestGood = false;
      var goodComps = 0;
      var requestComps = data.split('&');
      angular.forEach(requestComps, function(item, index) {
        var comp = item.split('=');
        switch(comp[0]) {
          case 'username':
                if (comp[1] === encodeURIComponent(username)) {
                  goodComps ++;
                }
                break;
          case 'password':
                if (comp[1] === encodeURIComponent(password)) {
                  goodComps ++;
                }
                break;
          case 'client_id':
                if (comp[1] === encodeURIComponent(clientID)) {
                  goodComps ++;
                }
                break;
          case 'client_secret':
                if (comp[1] === encodeURIComponent(clientSecret)) {
                  goodComps ++;
                }
        }
      })

      return goodComps === 4;
    }, function(header) {
      var goodHeader = false;
      if (header['Content-Type'] === 'application/x-www-form-urlencoded;charset=utf-8') {
        goodHeader = true;
      }
      return goodHeader;
    }).respond(200, {"refresh_token": "zOCnbJ4vHNgsqooX55QKThRtpfHsah",
      "scope": "write groups read",
      "expires_in": 36000,
      "token_type": "Bearer",
      "access_token": "3owji2lc7Ew79Y2PefzTQFgya3NUKB"});

    var cred = new CredentialMock();
    cred.username = username;
    cred.password = password;
    cred.$authenticate();
    httpMock.flush();
  });
});
