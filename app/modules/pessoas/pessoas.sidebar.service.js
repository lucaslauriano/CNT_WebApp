(function() {
    'use strict';

    angular
        .module('app.pessoas')
        .service('PessoasSidebarLoader', PessoasSidebarLoader);

    PessoasSidebarLoader.$inject = ['$http'];
    function PessoasSidebarLoader($http) {
        this.getMenu = getMenu;

        //JSON com o texto para os itens de menus e menus.
        function getMenu(onReady, onError) {
          var menuJson = 'modules/pessoas/pessoas.sidebar-menu.json',
               menuURL = menuJson + '?v=' + (new Date().getTime()); // jumps cache
            
          onError = onError || function() { alert('Falha ao carregar menu'); };

          $http
            .get(menuURL)
            .success(onReady)
            .error(onError);
        }
    }
})();