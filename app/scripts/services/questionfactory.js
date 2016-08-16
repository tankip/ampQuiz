'use strict';

/**
 * @ngdoc service
 * @name ampQuizApp.questionFactory
 * @description
 * # questionFactory
 * Factory in the ampQuizApp.
 */
angular.module('ampQuizApp')
  .factory('questionFactory', function ($resource) {
    
    function getGroups() {
      return $resource('/data/group.json');
    }

    function getQuestions(url) {
      return $resource(url);
    }

    return {
      getGroups : getGroups,
      getQuestions : getQuestions
    };
  });
