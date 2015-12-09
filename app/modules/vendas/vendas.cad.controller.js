(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.vendas.VendasCadCtrl:VendasCadCtrl
     * @description
     * # VendasCadCtrl
     * Controller of the app.vendas
     */

    angular
        .module('app.vendas')
        .controller('app.vendas.VendasCadCtrl', VendasCadCtrl);

    VendasCadCtrl.$inject = [
        '$injector'
    ];

    function VendasCadCtrl($injector, $location) {

        var VendasService = $injector.get('app.vendas.VendasService');

        var viewModel = this;

        var PublicProperties = {

        };

        _.extend(viewModel, PublicProperties);

        init();

        function init() {

        }
    }
})();
