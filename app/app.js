'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.controllers',
  'myApp.services'
]).
  constant('APIURL', 'http://localhost:8000/news_mock.json').
  config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/a');
    //
    // Now set up the states
    $stateProvider
      .state('state1', {
        url: '/a',
        templateUrl: 'news/index.html',
        controller: 'NewsController',
        controllerAs: 'nc'
      })
  });
