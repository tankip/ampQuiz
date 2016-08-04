'use strict';

/**
 * @ngdoc function
 * @name ampQuizApp.controller:QuestiondialogCtrl
 * @description
 * # QuestiondialogCtrl
 * Controller of the ampQuizApp
 */
angular.module('ampQuizApp')
  .controller('QuestiondialogCtrl', function ($scope, $uibModal) {
    
    //Function to open the question dialog
    $scope.showQuestions = function() {
      $uibModal.open({
        templateUrl: '/views/questiondialog.html'
      });
    };

  });
  
