'use strict';

describe('Service: quizfactory', function () {

  // load the service's module
  beforeEach(module('ampQuizApp'));

  // instantiate service
  var quizfactory;
  beforeEach(inject(function (_quizfactory_) {
    quizfactory = _quizfactory_;
  }));

  it('should do something', function () {
    expect(!!quizfactory).toBe(true);
  });

});
