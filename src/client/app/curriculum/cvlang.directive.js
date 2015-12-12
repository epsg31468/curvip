(function() {
    'use strict';

    angular.module('app.curriculum').directive('cvlang', cvlang);

    function cvlang() {

        var directive= {
            restrict: 'EA',
            templateUrl: 'app/curriculum/langitem.html',
            scope: {
                lng: '=langdata'
  //              maxRating: 5
                /*,
                ratingArray: new Array(5),
                ratingComplementArray: new Array(1)
*/
            }
        };
        return directive;

    };

}())
