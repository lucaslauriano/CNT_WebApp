(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.pessoas.planos.factory:PlanosService
     * @description
     * # PlanosService
     * Factory of the app.pessoas.planos
     */
    angular
        .module('app.pessoas.planos')
        .factory('app.pessoas.planos.PlanosService', PlanosService);

    PlanosService.$inject = ['$injector'];

    function PlanosService($injector) {
        var Restangular = $injector.get('Restangular');

        var PublicMethods = {
            customGET: _customGET,
            getList: _getList,
            get: _get,
            deletar: _deletar,
            salvar: _salvar
        };

        return PublicMethods;

        function _customGET(_q) {
            return Restangular.one('planos').customGET();
        }

        function _getList(_page, _pageSize, _q) {
            return Restangular.all('planos').customGETLIST();
        }

        function _get(id) {
            return Restangular.one('planos', id).get();
        }

        function _salvar(pessoa) {
            return !pessoa._id ?
                Restangular.all('planos').post(pessoa) :
                Restangular.one('planos').customPUT(pessoa, pessoa._id);
        }

        function _deletar(idProfessional) {
            return Restangular.one('planos', idPessoa).remove();
        }
    }
})();
