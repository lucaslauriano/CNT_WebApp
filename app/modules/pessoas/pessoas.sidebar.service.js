(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.pessoas.factory:PessoasSidebarLoader
     * @description
     * # PessoasSidebarLoader 
     * Factory of the app.pessoas.PessoasSidebarLoader
     */

    angular
        .module('app.pessoas')
        .service('PessoasSidebarLoader', PessoasSidebarLoader);

    PessoasSidebarLoader.$inject = ['$http'];

    function PessoasSidebarLoader($http) {
      
        this.getMenu = getMenu;

        function getMenu(onReady, onError) {
          var menuJson = 'modules/pessoas/pessoas.sidebar-menu.json',
               menuURL = menuJson + '?v=' + (new Date().getTime()); 
            
          onError = onError || function() { alert('Falha ao carregar menu'); };

          $http
            .get(menuURL)
            .success(onReady)
            .error(onError);
        }
    }
})();