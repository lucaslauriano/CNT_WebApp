(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.pessoas.planos.controller:app.pessoas.planos.PlanosAddCtrl
     * @description
     * # app.pessoas.planos.PlanosAddCtrl
     * Controller of the app.pessoas.planos
     */

    angular
        .module('app.pessoas.planos')
        .controller('app.pessoas.planos.PlanosAddCtrl', PlanosAddCtrl);

    PlanosAddCtrl.$inject = [
        '$injector'
    ];

    function PlanosAddCtrl($injector) {

        var PlanosService = $injector.get('app.pessoas.planos.PlanosService');
        var PessoasService = $injector.get('app.pessoas.PessoasService');


        var viewModel = this;

        var PublicProperties = {
        	
        };

        _.extend(viewModel, PublicProperties);

        init();

        function init() {
            PessoasService.getListFisica().then(function(fisicas) {
                 viewModel.fisicas = fisicas;
            });
        }
    }
})();
