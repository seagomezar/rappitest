(function() {
'use strict';

  angular
    .module('myApp.controllers', [])
    .controller('NewsController', NewsController);

  NewsController.$inject = ['newsService', '$log'];
  function NewsController(newsService, $log) {
    var vm = this;


    activate();

    ////////////////

    function activate() { 
      $log.info('newsController working');
      newsService.getNews().then(function (data){
        vm.news = data;
      });
    }
  }
})();