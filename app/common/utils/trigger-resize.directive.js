(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.utils
     * @description
     * # triggerResize
     * directive of the app.utils
     */

    angular
        .module('app.utils')
        .directive('triggerResize', triggerResize);

    triggerResize.$inject = ['$window', '$timeout'];

    function triggerResize($window, $timeout) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
            element.on('click', function() {
                $timeout(function() {
                    $window.dispatchEvent(new Event('resize'));
                });
            });
        }
    }
})();
