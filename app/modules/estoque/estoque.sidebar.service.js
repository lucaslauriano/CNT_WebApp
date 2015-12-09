(function() {
    'use strict';

    angular
        .module('app.estoque')
        .service('EstoqueSidebarLoader', EstoqueSidebarLoader);

    EstoqueSidebarLoader.$inject = ['$http'];
    function EstoqueSidebarLoader($http) {
        this.getMenu = getMenu;

        //JSON com o texto para os itens de menus e menus.
        function getMenu(onReady, onError) {
          var menuJson = 'modules/estoque/estoque.sidebar-menu.json',
               menuURL = menuJson + '?v=' + (new Date().getTime()); // jumps cache
            
          onError = onError || function() { alert('Falha ao carregar menu'); };

          $http
            .get(menuURL)
            .success(onReady)
            .error(onError);
        }
    }
})();