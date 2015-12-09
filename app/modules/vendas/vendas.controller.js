(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.vendas:VendasCtrl
     * @description
     * # VendasCtrl
     * Modal Controller de app.professionals
     */

    angular.module('app.vendas')
        .controller('app.vendas.VendasCtrl', VendasCtrl);

    VendasCtrl.$inject = [
        '$injector',
        '$rootScope',
        '$modal',
        '$log'
    ];

    function VendasCtrl($injector, $rootScope, $modal, $log) {
        var viewModel = this;

        var VendasService = $injector.get('app.vendas.VendasService');
        var PublicProperties = {
            
        };

        _.extend(viewModel, PublicProperties);

        init();

        function init() {
            VendasService.customGETLIST().then(function(vendas) {

            });

        }
    }
})();
