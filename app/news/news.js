(function () {
  'use strict';

  angular
    .module('myApp.controllers', ['ngAnimate'])
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

    vm.showList = false;
    vm.ready = false;

    vm.showNews = function(){
      vm.showList = !vm.showList;
      vm.showNew({});
    };

    vm.showNew = function(currentNew){

      vm.headTitle = '';
      vm.news.filter(function(e){
        if(e.id === currentNew.id){
          if(currentNew.show){
            currentNew.show = false;
          }
          else{
            vm.headTitle = currentNew.title;
            currentNew.show = true;
          }
        }
        else{
          e.show = false;
        }
      });
    };


    activate();

    ////////////////

    function activate() {
      newsService.getNews().then(function (data) {
        vm.news = data;
        vm.ready = true;
      });
    }
  }
})();