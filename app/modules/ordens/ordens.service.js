(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.pessoas.factory:OrdensService
     * @description
     * # OrdensService
     * Factory of the app.OrdensService
     */

    angular
        .module('app.ordens')
        .factory('app.ordens.OrdensService', OrdensService);

    OrdensService.$inject = ['$injector'];

    function OrdensService($injector) {
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
            return Restangular.one('pessoas').customGET();
        }

        function _customGETLIST(_page, _pageSize, _q) {
            return Restangular.all('pessoas').customGETLIST();
        }

        function _get(id) {
            return Restangular.one('pessoas', id).get();
        }

        function _salvar(pessoa) {
            return !pessoa._id?
                Restangular.all('pessoas').post(pessoa) :
                Restangular.one('pessoas').customPUT(pessoa, pessoa._id);
        }

        function _deletar(idProfessional) {
            return Restangular.one('pessoas', idPessoa).remove();
        }
    }
    
})();

