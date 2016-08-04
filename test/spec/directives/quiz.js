'use strict';

describe('Directive: quiz', function () {

  // load the directive's module
  beforeEach(module('ampQuizApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<quiz></quiz>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the quiz directive');
  }));
});
