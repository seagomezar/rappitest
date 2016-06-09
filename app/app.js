'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.controllers',
  'myApp.services'
]).
  constant('APIURL', 'http://localhost:8000/news_mock.json').
  config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'news/index.html',
    controller: 'NewsController',
    controllerAs: 'nc'
  })
  });
