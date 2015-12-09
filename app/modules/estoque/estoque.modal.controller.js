(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.estoque:EstoqueModalCtrl
     * @description
     * # EstoqueModalCtrl
     * Modal Controller de app.estoque
     */

    angular
        .module('app.estoque')
        .controller('app.estoque.EstoqueModalCtrl', EstoqueModalCtrl);

    EstoqueModalCtrl.$inject = [
        '$injector',
        '$modalInstance',
        '$location',
        '$rootScope',
        '$log',
        'id'
    ];

    function EstoqueModalCtrl($injector, $modalInstance, $location, $rootScope, $log, id) {

        var EstoqueService = $injector.get('app.estoque.EstoqueService');

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
            EstoqueService.get(id).then(function(pessoa) {
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
