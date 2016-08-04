'use strict';

/**
 * @ngdoc overview
 * @name ampQuizApp
 * @description
 * # ampQuizApp
 *
 * Main module of the application.
 */
angular
  .module('ampQuizApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/questions', {
        templateUrl: 'views/questiondialog.html',
        controller: 'QuestiondialogCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
