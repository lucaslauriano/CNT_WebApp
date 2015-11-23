(function() {
    'use strict';

    angular
        .module('app.almox')
        .service('AlmoxSidebarLoader', AlmoxSidebarLoader);

    AlmoxSidebarLoader.$inject = ['$http'];
    function AlmoxSidebarLoader($http) {
        this.almoxGetMenu = almoxGetMenu;

        //JSON com o texto para os itens de menus e menus.
        function almoxGetMenu(onReady, onError) {
          var menuJson = 'modules/almox/almox.sidebar-menu.json',
               menuURL = menuJson + '?v=' + (new Date().getTime()); // jumps cache
            
          onError = onError || function() { alert('Falha ao carregar menu'); };

          $http
            .get(menuURL)
            .success(onReady)
            .error(onError);
        }
    }
})();