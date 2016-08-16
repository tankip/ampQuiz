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

    /**
     * A function to get the keys of the object
     * It receives an object containing keys in a string
     * It the returns an array containing the keys as numbers
     */
    function getKeys(obj) {
      var keys = [];
      angular.forEach(obj, function(value) {
        var key = parseInt(value);
        if (key) {
          keys.push(key);
        }
      });
      return keys;
    }

    /**
     * A function to shuffle the question keys array
     */
    function shuffleArray(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        
      }

      return array;
    }

    return {
      getGroups : getGroups,
      getQuestions : getQuestions,
      shuffleArray : shuffleArray,
      getKeys : getKeys
    };
  });
