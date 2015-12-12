(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($http, $q, exception, logger) {
        var service = {
            getCv: getCv,
            //getMessageCount: getMessageCount
        };
        var tfo = { time: 'Dezember 2013 - Dezember 2014',
                    summary:'GIS Software Entwickler (Freelancer)',
                    company:'Cool Sofware AG',
                    place:'München',
                    description: 'Working with Angular, making coffee.',
                    keywords: ['Cool', 'Angular','Coffee'] // ...
                  };
        var tuebingen = { time: '2001-2007',
                    summary:'Diplomstudiengang Informatik',
                    company:'Eberhard-Karls-Universität',
                    place:'Tübingen',
                    description: 'This and that.',
                          keywords: ['Informatik', 'Formale Sprachen', 'Theoretische Informatik', 'Computergraphik', 'Compilerbau']
                  };
        var langs = [{language: 'Deutsch',
                      rating:  5,
                      comment: 'Muttersprache'},
                     {language: 'Englisch',
                      rating:  4,
                      comment: 'Verhandlungssicher'},
                     {language: 'Spanisch',
                      rating:  2,
                      comment: 'Grundkentnisse'},
                     {language: 'Französisch',
                      rating:  2,
                      comment: 'Grundkentnisse'},



                    ];

        var data = {
            'header': {
                'familyname': 'Mustermann',
                'firstname': 'Max',
                'address': ['Beispielstr. 23', '01234 Musterstadt', 'Deutschland'],
                //                'phone':   % optional, remove the line if not wanted
                'mobile': '+49 176 xxxyyyyzzz',
                'email': 'max@test.com',
                'web': 'http://www.angularjs.org/',
                'updated': '2015-12-11',
                summary: ['Senior this and that', 'Good at this', 'Also this']
                //\fax{+49 89 86 37 94 78}                          % optional, remove the line if not wanted
            },
            'cvitems': [tfo],
            studies: [tuebingen],
            languages: langs
        };
        return service;

        function getCv() { return $q.when(data); }


        // function getPeople() {
        //     return $http.get('/api/people')
        //         .then(success)
        //         .catch(fail);

        //     function success(response) {
        //         return response.data;
        //     }

        //     function fail(e) {
        //         return exception.catcher('XHR Failed for getPeople')(e);
        //     }
        // }
    }
})();
