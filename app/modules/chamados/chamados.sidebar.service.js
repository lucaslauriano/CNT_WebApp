(function() {
    'use strict';

    angular
        .module('app.chamados')
        .service('ChamadosSidebarLoader', ChamadosSidebarLoader);

    ChamadosSidebarLoader.$inject = ['$http'];
    function ChamadosSidebarLoader($http) {
        this.getMenu = getMenu;

        //JSON com o texto para os itens de menus e menus.
        function getMenu(onReady, onError) {
          var menuJson = 'modules/chamados/chamados.sidebar-menu.json',
               menuURL = menuJson + '?v=' + (new Date().getTime()); // jumps cache
            
          onError = onError || function() { alert('Falha ao carregar menu'); };

          $http
            .get(menuURL)
            .success(onReady)
            .error(onError);
        }
    }
})();