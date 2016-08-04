'use strict';

/**
 * @ngdoc function
 * @name ampQuizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ampQuizApp
 */
angular.module('ampQuizApp')
  .controller('MainCtrl',['$scope', '$uibModal', function ($scope, $uibModal) {

    $scope.showQuestions = function() {
      $uibModal.open({
        template: '<quiz></quiz>'
      });
    };

  }]);
