(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.icons.skycon:skycon
     * @description
     * # skycon
     * directive of the app.icons
     */
     
    angular
        .module('app.icons')
        .directive('skycon', skycon);

    function skycon() {

        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var skycons = new Skycons({
                'color': (attrs.color || 'white')
            });

            element.html('<canvas width="' + attrs.width + '" height="' + attrs.height + '"></canvas>');

            skycons.add(element.children()[0], attrs.skycon);

            skycons.play();
        }
    }
})();
