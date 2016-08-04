'use strict';

/**
 * @ngdoc directive
 * @name ampQuizApp.directive:quiz
 * @description
 * # quiz
 */
angular.module('ampQuizApp')
  .directive('quiz', function (quizfactory) {
    return {
      templateUrl: '../../views/quiz.html',
      restrict: 'E',
      controller: function ($scope) {

        $scope.totalPoints = 0;
        $scope.pointsGotten = 0;
        $scope.score = 0;
        $scope.totalQuestions = 0;

        $scope.start = function() {
          $scope.id = 0;
          $scope.quizOver = false;
          $scope.inProgress = true;
          $scope.getQuestion();
          $scope.selected = false;
        };

        $scope.reset = function() {
          $scope.inProgress = false;
          $scope.totalQuestions = 0;
          $scope.score = 0;
          $scope.totalPoints = 0;
          $scope.pointsGotten = 0;
        };

        /**
         * Function to fetch a question
         * It fetches one question at a time
         */
        $scope.getQuestion = function() {
          var q = quizfactory.getQuestion($scope.id);
          if(q) {
            $scope.question = q.question;
            $scope.options = q.answers;
            $scope.answer = q.correct;
            $scope.points = q.points;
            $scope.tag = q.tag;
            $scope.answerMode = true;
            $scope.totalQuestions += 1;
          } else {
            $scope.quizOver = true;
          }
        };

        /**
         * Function to selectAnswer
         * It takes the options(question options) and the answer for that question
         * Also takes the points provided for that question
         * It checks whether the answer selected is correct or not
         * It also calculates the totalPoints earned by the user
         */
        $scope.selectAnswer = function(option, answer, points) {

          $scope.answered = true;

          $scope.totalPoints += points; 
          
          $scope.answerMode = false;

          if(option.id === answer) {
            $scope.correctness = true;
            $scope.pointsGotten += points;
            $scope.score += 1;
          } else {
            $scope.pointsGotten += 0;
            $scope.correctness = false;
            $scope.score += 0;
          }

          $scope.percentage = (($scope.pointsGotten / $scope.totalPoints) * 100).toFixed(1);

        };

        /**
         * Function to fetch the nextQuestion
         */
        $scope.nextQuestion = function() {
          $scope.id++;
          $scope.answered = false;
          $scope.getQuestion();
        };
  
        $scope.reset();

      }
    };
  });
