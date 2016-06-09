(function() {
'use strict';

    angular.module('myApp.services',[]).service('newsService', newsService);

    newsService.$inject = ['$http','APIURL', '$log'];
    function newsService($http, APIURL, $log) {
        return {
            getNews: getNews
        };
        function getNews(params) {
            return $http.get(APIURL).then(getNewsComplete).catch(getNewsFailed);

            function getNewsComplete(response) {
                $log.debug(response.data);
                return response.data;
            }

            function getNewsFailed(error) {
                $log.error('XHR Failed for getAvengers.' + error.data);
            }
        }
    }
})();