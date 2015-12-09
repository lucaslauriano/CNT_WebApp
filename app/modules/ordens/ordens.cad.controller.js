(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.professional.OrdensCadCtrl:OrdensCadCtrl
     * @description
     * # OrdensCadCtrl
     * Controller of the app.professional
     */

    angular
        .module('app.ordens')
        .controller('app.ordens.OrdensCadCtrl', OrdensCadCtrl);

    OrdensCadCtrl.$inject = [
        '$injector'
    ];

    function OrdensCadCtrl($injector, $location) {

        var OrdensService = $injector.get('app.ordens.OrdensService');

        var viewModel = this;

        var PublicProperties = {

        };

        _.extend(viewModel, PublicProperties);

        init();

        function init() {

        }
    }
})();
