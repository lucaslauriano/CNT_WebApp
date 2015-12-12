(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.pessoas.planos.controller:app.pessoas.planos.PlanosCadCtrl
     * @description
     * # app.pessoas.planos.PlanosCadCtrl
     * Controller of the app.pessoas.planos
     */

    angular
        .module('app.pessoas.planos')
        .controller('app.pessoas.planos.PlanosCadCtrl', PlanosCadCtrl);

    PlanosCadCtrl.$inject = [
        '$injector'
    ];

    function PlanosCadCtrl($injector) {

        var PessoasService = $injector.get('app.pessoas.PessoasService');

        var viewModel = this;

        var PublicProperties = {
        	
        };

        _.extend(viewModel, PublicProperties);

        init();

        function init() {

        }

                  viewModel.slider7 = 10;
    }
})();
