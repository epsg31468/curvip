(function() {
    'use strict';

    angular.module('app.curriculum').directive('cventry', cventry);

    function cventry() {

        var directive= {
            restrict: 'EA',
            templateUrl: 'app/curriculum/cventry.html',
            scope: {
                entry: '='
            }
        };
        return directive;

    };

}())
