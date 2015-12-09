(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.core
     * @description
     * # app.core.config
     * Configuration of the app.core
     */
     
    angular
        .module('app.core')
        .config(CoreConfig);

    CoreConfig.$inject = [
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide'
    ];

    function CoreConfig($controllerProvider, $compileProvider, $filterProvider, $provide) {

        var core = angular.module('app.core');

        core.controller = $controllerProvider.register;
        core.directive = $compileProvider.directive;
        core.filter = $filterProvider.register;
        core.factory = $provide.factory;
        core.service = $provide.service;
        core.constant = $provide.constant;
        core.value = $provide.value;
    }
})();
