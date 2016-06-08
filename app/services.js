(function() {
'use strict';

    angular
        .module('myApp.services')
        .service('Service', Service);

    Service.$inject = ['$http','APIURL', $log];
    function Service($http, APIURL, $log) {
        return {
            getNews: getNews
        };
        function getNews(params) {
            return $http.get(APIURL)
            .then(getNewsComplete)
            .catch(getNewsFailed);

            function getNewsComplete(response) {
                return response.data.results;
            }

            function getNewsFailed(error) {
                $log.error('XHR Failed for getAvengers.' + error.data);
            }
        }
    }
})();