(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.professionals:PessoasCtrl
     * @description
     * # PessoasCtrl
     * Modal Controller de app.professionals
     */

    angular.module('app.almox')
        .controller('app.almox.PessoasCtrl', PessoasCtrl);

    PessoasCtrl.$inject = [
        '$injector',
        '$rootScope',
        '$modal',
        '$log'
    ];

    function PessoasCtrl($injector, $rootScope, $modal, $log) {
        var viewModel = this;


            viewModel.currentPage = 1;
            viewModel.q = '';

        var PessoasService = $injector.get('app.Pessoas.PessoasService');
        var PublicProperties = {
            
        };

        _.extend(viewModel, PublicProperties);

        init();

        function init() {
            PessoasService.customGETLIST().then(function(pessoas) {

            });

        }
    }
})();
