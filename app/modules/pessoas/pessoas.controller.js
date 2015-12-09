(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.professionals:PessoasCtrl
     * @description
     * # PessoasCtrl
     * Modal Controller de app.professionals
     */

    angular.module('app.pessoas')
        .controller('app.pessoas.PessoasCtrl', PessoasCtrl);

    PessoasCtrl.$inject = [
        '$injector',
        '$rootScope',
        '$modal',
        '$log'
    ];

    function PessoasCtrl($injector, $rootScope, $modal, $log) {
        var viewModel = this;

        var PessoasService = $injector.get('app.pessoas.PessoasService');
        
        var PublicProperties = {
            
        };

        _.extend(viewModel, PublicProperties);

        init();

        function init() {
            PessoasService.getList().then(function(pessoas) {
                 viewModel.pessoas = pessoas;
            });

        }
    }
})();
