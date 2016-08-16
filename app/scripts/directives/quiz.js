'use strict';

/**
 * @ngdoc directive
 * @name ampQuizApp.directive:quiz
 * @description
 * # quiz
 */
angular.module('ampQuizApp')
  .directive('quiz', ['quizfactory','questionFactory',function (quizfactory, questionFactory) {
    return {
      templateUrl: '../../views/quiz.html',
      restrict: 'E',
      controller: function ($scope) {

        
        $scope.totalPoints = 0;
        $scope.pointsGotten = 0;
        $scope.score = 0;
        $scope.totalQuestions = 0;

        var questionKeys = [];

        questionFactory.getGroups().get(function(data) {
          $scope.groupUrls  = data;
        });

        $scope.getQuestions = function() {
          
          questionFactory.getQuestions($scope.questionGroup).get().$promise
          .then(function(data) {
            $scope.questions = data;
            var keys = questionFactory.getKeys(Object.keys($scope.questions));
            questionKeys = questionFactory.shuffleArray(keys);
            getQuestion($scope.questions);
          })
          .catch(function(error) {
            console.log(error);
          });

        };

         /**
         * Function to fetch a question
         * It fetches one question at a time
         */
        function getQuestion(questions) {
          
          var id = questionKeys.shift();

          $scope.quizOver = false;
          $scope.inProgress = true;

          var q = questions[id];
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

        }


        $scope.reset = function() {
          $scope.inProgress = false;
          $scope.totalQuestions = 0;
          $scope.score = 0;
          $scope.totalPoints = 0;
          $scope.pointsGotten = 0;
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
          
          $scope.answered = false;
          getQuestion($scope.questions);

        };
  
        $scope.reset();

      }
    };
  }]);
