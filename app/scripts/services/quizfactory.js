'use strict';

/**
 * @ngdoc service
 * @name ampQuizApp.quizfactory
 * @description
 * # quizfactory
 * Factory in the ampQuizApp.
 */
angular.module('ampQuizApp')
  .factory('quizfactory', function ($http) {
    var questions;
    
    $http.get('/data/questions.json').then(function(quizData) {
      
      questions = quizData.data;

    });
    
    return {
      getQuestion: function(id) {
        if(id < questions.length) {
          return questions[id];
        } else {
          return false;
        }
      }
    };
  });
