'use strict';
/**
 * Created by chrissparrow on 2/16/15.
 */
describe('Service: registerModalService', function() {
  var mockModal;
  var scope;
  var regModalService;
  var $provide;

  beforeEach(module('budgetstarfe.register'));

  beforeEach(inject(function(registerModalService, $rootScope, $modal) {
    regModalService = registerModalService;

    spyOn($modal, 'open').and.callFake(function() {
      console.log('$modal.open has been called');
    });

    scope = $rootScope.$new();

    spyOn(console, 'log');
  }));

  it('should call $modal.open when show is called', function() {
    regModalService.show();
    expect(console.log).toHaveBeenCalledWith('$modal.open has been called');
  });
});
