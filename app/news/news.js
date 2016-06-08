(function() {
'use strict';

  angular
    .module('myApp.controllers', [])
    .controller('NewsController', NewsController);

  NewsController.$inject = ['$scope', 'newsService', '$log'];
  function NewsController($scope, newsService, $log) {
    var vm = this;
    

    activate();

    ////////////////

    function activate() { 
      $log.info('newsController working');
    }
  }
})();