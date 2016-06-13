(function() {
  'use strict';

  // Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'myApp.controllers',
  'myApp.services'
])
.constant('APIURL', 'http://localhost:8100/news_mock.json')
.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'news/index.html',
      controller: 'NewsController',
      controllerAs: 'nc'
    })
  });
})();


