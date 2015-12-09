(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.utils
     * @description
     * # now
     * directive of the app.utils
     */

    angular
        .module('app.utils')
        .directive('now', now);

    now.$inject = [
        'dateFilter',
        '$interval'
    ];

    function now(dateFilter, $interval) {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
            var format = attrs.format;

            function updateTime() {
                var dt = dateFilter(new Date(), format);
                element.text(dt);
            }

            updateTime();
            var intervalPromise = $interval(updateTime, 1000);

            scope.$on('$destroy', function() {
                $interval.cancel(intervalPromise);
            });

        }
    }
})();
