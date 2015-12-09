(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.estoque.factory:EstoqueService
     * @description
     * # EstoqueService
     * Factory of the app.EstoqueService
     */

    angular
        .module('app.estoque')
        .factory('app.estoque.EstoqueService', EstoqueService);

    EstoqueService.$inject = ['$injector'];

    function EstoqueService($injector) {
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
            return Restangular.one('estoque').customGET();
        }

        function _customGETLIST(_page, _pageSize, _q) {
            return Restangular.all('estoque').customGETLIST();
        }

        function _get(id) {
            return Restangular.one('estoque', id).get();
        }

        function _salvar(pessoa) {
            return !pessoa._id?
                Restangular.all('estoque').post(pessoa) :
                Restangular.one('estoque').customPUT(pessoa, pessoa._id);
        }

        function _deletar(idProfessional) {
            return Restangular.one('estoque', idPessoa).remove();
        }
    }
    
})();

