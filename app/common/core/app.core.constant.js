(function() {
    'use strict';

    /**
     * @ngdoc overview
     * @name app.core
     * @description
     * # app.core
     * Constants do app.core
     */
     
    angular
        .module('app.core')
        .constant('APP_MEDIAQUERY', {
            'desktopLG': 1200,
            'desktop': 992,
            'tablet': 768,
            'mobile': 480
        });
})();
