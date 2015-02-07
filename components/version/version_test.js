'use strict';

describe('budgetstarfe.version module', function() {
  beforeEach(module('budgetstarfe.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
