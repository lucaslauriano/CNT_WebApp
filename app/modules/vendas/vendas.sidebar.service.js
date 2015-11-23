(function() {
    'use strict';

    angular
        .module('app.vendas')
        .service('VendasSidebarLoader', VendasSidebarLoader);

    VendasSidebarLoader.$inject = ['$http'];
    function VendasSidebarLoader($http) {
        this.getMenu = getMenu;

        //JSON com o texto para os itens de menus e menus.
        function getMenu(onReady, onError) {
          var menuJson = 'modules/vendas/vendas.sidebar-menu.json',
               menuURL = menuJson + '?v=' + (new Date().getTime()); // jumps cache
            
          onError = onError || function() { alert('Falha ao carregar menu'); };

          $http
            .get(menuURL)
            .success(onReady)
            .error(onError);
        }
    }
})();