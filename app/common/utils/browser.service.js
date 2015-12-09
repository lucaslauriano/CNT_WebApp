(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.utils
     * @description
     * # Browser
     * service of the app.utils
     */

    angular
        .module('app.utils')
        .service('Browser', Browser);

    Browser.$inject = ['$window'];
    function Browser($window) {
      return $window.jQBrowser;
    }
})();