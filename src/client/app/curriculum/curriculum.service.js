(function ()  {
    'use strict';
    angular.module('app.curriculum').factory('cvservice', cvservice);

    cvservice.$inject = ['dataservice', '$q', 'logger'];

    function cvservice(dataservice, $q, logger) {

        var cvservice = {
            loadCv: loadCv
        };

        return cvservice;

        function loadCv() {

            logger.info('cv loaded!');
            return dataservice.getCv();
        }
    };


})()
