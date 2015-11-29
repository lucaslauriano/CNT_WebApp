(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.almox.controller:AlmoxCadCtrl
     * @description
     * # AlmoxCadCtrl
     * Controller of the app.alomox
     */
    angular
        .module('app.almox')
        .controller('app.almox.AlmoxCadCtrl', AlmoxCadCtrl);

    AlmoxCadCtrl.$inject = [
        '$injector'
    ];

    function AlmoxCadCtrl($injector) {

        var AlmoxService = $injector.get('app.almox.AlmoxService');

        var viewModel = this;

        var PublicProperties = {
            /*          cancelar: _cancelar,
                        deletar: _deletar,
                        isSalvarDisabled: _isSalvarDisabled,
                        salvar: _salvar,*/
            submitForm: _submitForm,
            validateInput: _validateInput
        };

        _.extend(viewModel, PublicProperties);

        init();

        function init() {
            
        }

        // Submit form
        function _submitForm() {
            viewModel.submitted = true;
            if (viewModel.formValidate.$valid) {
                console.log('Submitted!!');
            } else {
                console.log('Not valid!!');
                return false;
            }
        };

        function _validateInput(name, type) {
            var input = viewModel.formValidate[name];
            return (input.$dirty || viewModel.submitted) && input.$error[type];
        };

        function isClean() {
            return angular.equals(data, viewModel.data);
        }

        function isInvalid() {
            return viewModel.listDetail.$invalid;
        }

        function goToListarPessoas() {
            $location.path('/list');
        }

        function _cancelar() {
            goToListarPessoas();
        }

        function _deletar() {
            return ProfessionalService.deletar(viewModel.pessoa.id).then(function() {
                goToListarPessoas();
            });
        }

        function _isSalvarDisabled() {
            if (!pessoa.id) {
                return isInvalid();
            }
            return isClean();
        }

        function _salvar() {
            return ProfessionalService.salvar(viewModel.pessoa).then(function() {
                goToListarPessoas();
            });
        }
    }
})();
