(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.utils
     * @description
     * # animateEnabled
     * directive of the app.utils
     */

    angular
        .module('app.utils')
        .directive('animateEnabled', animateEnabled);

    animateEnabled.$inject = ['$animate'];

    function animateEnabled($animate) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.$watch(function() {
                return scope.$eval(attrs.animateEnabled, scope);
            }, function(newValue) {
                $animate.enabled(!!newValue, element);
            });
        }
    }
})();
