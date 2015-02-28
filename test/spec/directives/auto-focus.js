'use strict';
/**
 * Created by chrissparrow on 2/25/15.
 */
describe('Directive: auto-focus', function() {
  var element;
  var scope;
  var $compile;

  beforeEach(module('budgetstarfe'));

  beforeEach(inject(function($rootScope, _$compile_) {
    scope = $rootScope.$new();
    $compile = _$compile_;

  }));

  it('should only allow one auto-focus on a form', function() {
    element = '<form name="myForm" id="myForm">' +
                '<input type="text" id="in1" name="in1" auto-focus />' +
                '<input type="text" id="in2" name="in2" auto-focus />' +
              '</form>';

    expect(function() {element = $compile(element)(scope);}).toThrowError('auto-focus can only appear on one element of a form');
  });

  it('should place focus on the element for which it is an attribute', function() {
    element = '<form name="myForm" id="myForm">' +
                '<input type="text" id="in1" name="in1" auto-focus />' +
                '<input type="text" id="in2" name="in2" />' +
              '</form>';

    element = $compile(element)(scope);

    expect($('#in1').is('input:focus')).toBe(true);
  });

  it('should only place focus on the element for which it is an attribute', function() {
    element = '<form name="myForm" id="myForm">' +
                '<input type="text" id="in1" name="in1" />' +
                '<input type="text" id="in2" name="in2" auto-focus />' +
              '</form>';

    element = $compile(element)(scope);

    expect($('#in1').is('input:focus')).toBe(false);
    expect($('#in2').is('input:focus')).toBe(true);
  });
});
