(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.vendas.factory:PessoaService
     * @description
     * # PessoaService
     * Factory of the app.PessoaService
     */

    angular
        .module('app.vendas')
        .factory('app.vendas.VendasService', VendasService);

    VendasService.$inject = ['$injector'];

    function VendasService($injector) {
        var Restangular = $injector.get('Restangular');

        var PublicMethods = {
            customGET: _customGET,
            customGETLIST: _customGETLIST,
            get: _get,
            deletar: _deletar,
            salvar: _salvar
        };

        return PublicMethods;

        function _customGET(_q) {
            return Restangular.one('vendas').customGET();
        }

        function _customGETLIST(_page, _pageSize, _q) {
            return Restangular.all('vendas').customGETLIST();
        }

        function _get(id) {
            return Restangular.one('vendas', id).get();
        }

        function _salvar(pessoa) {
            return !pessoa._id?
                Restangular.all('vendas').post(pessoa) :
                Restangular.one('vendas').customPUT(pessoa, pessoa._id);
        }

        function _deletar(idProfessional) {
            return Restangular.one('vendas', idPessoa).remove();
        }
    }
    
})();

