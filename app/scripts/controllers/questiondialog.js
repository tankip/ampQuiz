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

    
    
    function DialogController($scope, $uibModal, $http) {
      $scope.score = 0;
      $scope.activeQuestion = -1;
      $scope.activeQuestionAnswered = 0;
      $scope.percentage = 0;
      $scope.totalPoints = 0;
      $scope.pointsGotten = 0;
          
      $scope.hide = function() {
        $uibModal.hide();
      };

      $scope.cancel = function() {
        $uibModal.cancel();
      };

      $scope.answer = function(answer) {
        $uibModal.hide(answer);
      };

      //get the questiond from the json file
      $http.get('/data/patient_info.json').then(function(quizData) {
        $scope.myQuestions = quizData.data;
        $scope.totalQuestions = $scope.myQuestions.length;
        angular.forEach($scope.myQuestions, function(value) {
          $scope.totalPoints += value.points;
        });       
      });


      /*
      *Function to selectAnswer from the provided choices
      *It takes the question index and the answer index together with the points awarded to the question
      */
      $scope.selectAnswer = function(qIndex, aIndex, points) {
        var questionState = $scope.myQuestions[qIndex].questionState;

        if( questionState !== 'answered' ) {

          $scope.myQuestions[qIndex].selectedAnswer = aIndex;
          var correctAnswer = $scope.myQuestions[qIndex].correct;
          $scope.myQuestions[qIndex].correctAnswer  = correctAnswer;

          if( aIndex === correctAnswer ) {
            $scope.myQuestions[qIndex].correctness = 'correct';
            $scope.score += 1;
            $scope.pointsGotten += points;
          } else {
            $scope.myQuestions[qIndex].correctness = 'incorrect';
          }

          $scope.myQuestions[qIndex].questionState = 'answered';
        }
        $scope.percentage = (($scope.pointsGotten / $scope.totalPoints) * 100).toFixed(1);

      };

      //Check if the question is selected
      $scope.isSelected = function(qIndex,aIndex) {
        return $scope.myQuestions[qIndex].selectedAnswer === aIndex;
      };

      //Check is the answer selected is correct
      $scope.isCorrect = function(qIndex,aIndex) {
        return $scope.myQuestions[qIndex].correctAnswer === aIndex;
      };

      //Move to the next question
      $scope.selectContinue = function() {
        return $scope.activeQuestion += 1;
      };

    }

    //Function to open the question dialog
    $scope.showQuestions = function() {
      $uibModal.open({
        controller: DialogController,
        templateUrl: '/views/questiondialog.html'
      });

    };

  });
  
