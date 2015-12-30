(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.pessoas.factory:PessoasService
     * @description
     * # PessoasService 
     * Factory of the app.PessoasService
     */

    angular
        .module('app.pessoas')
        .factory('app.pessoas.PessoasService', PessoasService);

    PessoasService.$inject = ['$injector'];

    function PessoasService($injector) {
        
        var Restangular = $injector.get('Restangular');

        var PublicMethods = {
            customGET: _customGET,
            getListFisica: _getListFisica,
            getListJuridica: _getListJuridica,
            get: _get,
            deletar: _deletar,
            salvar: _salvar
        };

        return PublicMethods;

        function _customGET(_q) {
            return Restangular.one('pessoas').customGET();
        }

        function _getListFisica() {
            return Restangular.all('pessoas').customGETLIST("", {isJuridica: false})
        }

        function _getListJuridica() {
            return Restangular.all('pessoas').customGETLIST("", {isJuridica: true})
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

