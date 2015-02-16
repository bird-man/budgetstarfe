'use strict';
/**
 * Created by chrissparrow on 2/16/15.
 */
describe('registerModalService', function() {
  var mockModal;
  var scope;
  var regModalService;

  beforeEach(function() {
    mockModal = {};
    module('budgetstarfe.register', function($provide) {
      $provide.value('$modal', mockModal);
    });

    mockModal.open = jasmine.createSpy();
  });

  beforeEach(inject(['registerModalService', '$rootScope', function(registerModalService, $rootScope) {
    scope = $rootScope.$new();
    regModalService = registerModalService;
  }]));

  it('should call $modal.open when show is called', function() {
    regModalService.show();
    expect(mockModal.open).toHaveBeenCalled();
  });
});
