(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .service('SidebarLoader', SidebarLoader);

    SidebarLoader.$inject = ['$http'];
    function SidebarLoader($http) {
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