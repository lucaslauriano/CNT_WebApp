(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.chamados:ChamadosCtrl
     * @description
     * # ChamadosCtrl
     * Modal Controller de app.chamados
     */

    angular.module('app.chamados')
        .controller('app.chamados.ChamadosCtrl', ChamadosCtrl);

    ChamadosCtrl.$inject = [
        '$injector',
        '$rootScope',
        '$modal',
        '$log'
    ];

    function ChamadosCtrl($injector, $rootScope, $modal, $log) {
        var viewModel = this;


            viewModel.currentPage = 1;
            viewModel.q = '';

        var ChamadosService = $injector.get('app.chamados.ChamadosService');
        var PublicProperties = {
            
        };

        _.extend(viewModel, PublicProperties);

        init();

        function init() {
            ChamadosService.customGETLIST().then(function(pessoas) {

            });

        }
    }
})();
