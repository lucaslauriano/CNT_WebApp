(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.utils
     * @description
     * # resetKey
     * directive of the app.utils
     */

    angular
        .module('app.utils')
        .directive('resetKey', resetKey);

    resetKey.$inject = [
        '$state',
        '$localStorage'
    ];

    function resetKey($state, $localStorage) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
                resetKey: '@'
            }
        };
        return directive;

        function link(scope, element) {
            element.on('click', function(e) {
                e.preventDefault();

                if (scope.resetKey) {
                    delete $localStorage[scope.resetKey];
                    $state.go($state.current, {}, {
                        reload: true
                    });
                } else {
                    $.error('No storage key specified for reset.');
                }
            });
        }
    }
})();
