(function() {
    'use strict';
    
    /**
     * @ngdoc overview
     * @name app.core
     * @description
     * # app.core
     * description
     * Carrega dependencias da Aplicação
     */

    angular
        .module('app.core', [
            'ngAnimate',
            'ngCookies',
            'ngStorage',
            'ngAria',
            'ngRoute',
            'ngMessages',
            'ngTouch',
            'ngSanitize',
            'ngResource',
            'pascalprecht.translate',
            'tmh.dynamicLocale',
            'oc.lazyLoad',
            'angular-loading-bar',
            'ui.bootstrap',
            'ui.router',
            'ui.utils',
            'ui.scrollpoint',
            'ui.router',
            'restangular'
        ]);
})();


