(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.lazyload
     * @description
     * # LazyLoadConfig
     * Configuration of the app.lazyload
     */
     
    angular
        .module('app.lazyload')
        .config(LazyLoadConfig);

    LazyLoadConfig.$inject = [
        '$ocLazyLoadProvider',
        'APP_REQUIRES'
    ];

    function LazyLoadConfig($ocLazyLoadProvider, APP_REQUIRES) {
        // Lazy Load modules configuration
        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: APP_REQUIRES.modules
        });

    }
})();
