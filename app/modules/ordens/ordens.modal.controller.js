(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.pessoas:ProfessionalModalCtrl
     * @description
     * # ProfessionalModalCtrl
     * Modal Controller de app.pessoas
     */

    angular
        .module('app.pessoas')
        .controller('app.pessoas.ProfessionalModalCtrl', ProfessionalModalCtrl);

    ProfessionalModalCtrl.$inject = [
        '$injector',
        '$modalInstance',
        '$location',
        '$rootScope',
        '$log',
        'id'
    ];

    function ProfessionalModalCtrl($injector, $modalInstance, $location, $rootScope, $log, id) {

        var PessoasService = $injector.get('app.pessoas.PessoasService');

        var viewModel = this;

        var PublicProperties = {
            cancel: _cancel,
            closeModal: _closeModal,
            isSalvarDisabled: _isSalvarDisabled,
            salvar: _salvar
        };

        _.extend(viewModel, PublicProperties);

        init();

        function init() {
            PessoasService.get(id).then(function(pessoa) {
                viewModel.pessoa = pessoa.data;

            });
        }

        // function attView(){
        //     $rootScope.$emit('att',  viewModel.pessoa.email);
        // }

        // function isInvalid() {
        //     return viewModel.listDetail.$invalid;
        // }

        // function goToListarProfessionals() {
        //     $location.path('/listProfessionals');
        // }
        
        function _cancel() {
            $modalInstance.dismiss('cancel');
        }
        
        function _closeModal() {
            $modalInstance.close();
        }

        function _isSalvarDisabled() {
            if (!pessoa.id) {
                return isInvalid();
            }
            return isClean();
        }
        
        function _salvar() {
            return PessoasService.salvar(viewModel.pessoa).then(function() {
                $modalInstance.close();
            }).then(function() {
                attView();
            });
        }
    }
})();
