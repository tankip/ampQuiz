'use strict';

describe('Service: questionFactory', function () {

  // load the service's module
  beforeEach(module('ampQuizApp'));

  // instantiate service
  var questionFactory;
  beforeEach(inject(function (_questionFactory_) {
    questionFactory = _questionFactory_;
  }));

  it('should do something', function () {
    expect(!!questionFactory).toBe(true);
  });

});
