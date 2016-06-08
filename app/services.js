(function() {
'use strict';

    angular
        .module('Module')
        .service('Service', Service);

    Service.$inject = ['$http'];
    function Service($http) {
        return {
            getNews: getNews
        };
        function getNews(params) {
            
        }
    }
})();