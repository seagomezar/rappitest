(function () {
  'use strict';

  angular
    .module('myApp.controllers', [])
    .controller('NewsController', NewsController)
    .filter('capitalize', function () {
      return function (input, all) {
        var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
        return (!!input) ? input.replace(reg, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }) : '';
      }
    });

  NewsController.$inject = ['newsService', '$log'];
  function NewsController(newsService, $log) {
    var vm = this;

    vm.showNew = function(currentNew){
      vm.news.filter(function(e){
        if(e.id === currentNew.id){
          if(currentNew.show == 1){
            vm.headTitle = '';
            currentNew.show = 0;
          }
          else{
            vm.headTitle = currentNew.title;
            currentNew.show = 1;
          }
        }
        else{
          e.show = 0;
        }
      });
    };


    activate();

    ////////////////

    function activate() {
      $log.info('newsController working');
      newsService.getNews().then(function (data) {
        vm.news = data;
      });
    }
  }
})();