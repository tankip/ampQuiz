'use strict';

describe('Controller: QuestiondialogCtrl', function () {

  // load the controller's module
  beforeEach(module('ampQuizApp'));

  var QuestiondialogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuestiondialogCtrl = $controller('QuestiondialogCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(QuestiondialogCtrl.awesomeThings.length).toBe(3);
  });
});
