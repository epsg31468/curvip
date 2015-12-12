(function () {
    'use strict';

    angular
        .module('app.curriculum')
        .controller('CurriculumController', CurriculumController);

    CurriculumController.$inject = ['logger', 'cvservice'];
    /* @ngInject */
    function CurriculumController(logger, cvservice) {
        var vm = this;

        vm.firstname = 'Firstname';
        vm.lastname = 'LastName';
        vm.cvitems=[];
        vm.persons=[{name: 'Björn'},{name: 'Martin'},{name: 'Daniela'},{name: 'Peter'}];
        vm.header = {};
        var tfo = { time: 'Dezember 2013 -- aktuell',
                    summary:'GIS Software Entwickler (Freelancer)',
                    company:'Telefónica Germany ($O_2$), via arvato systems',
                    place:'München',
                    keywords: ['Telefonica', 'Address', 'GIS','Jira'] // ...
                  };
        vm.tfo = tfo;
        vm.language={language: 'Deutsch',
                     rating:  5,
                     comment: 'Muttersprache'};

        activate();

        function processMe(data) {
            logger.info("ProcessMe: Start");
            var header = data.header;
            vm.firstname = header.firstname;
            vm.lastname = header.familyname;
            vm.cvitems = data.cvitems;
            vm.header = header;
            vm.studies = data.studies;
            vm.languages = data.languages;
            logger.info("ProcessMe: end");
        }
        function activate() {
            logger.info('Activated Curriculum View');
            cvservice.loadCv().then(processMe);
        }

    }
})();
