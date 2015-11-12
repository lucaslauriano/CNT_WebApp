(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name Colors.service:Colors
     * @description: *Services to retrieve global colors
     * # Colors
     * Service of the Colors
     */

    angular
        .module('app.colors')
        .service('Colors', Colors);

    Colors.$inject = ['APP_COLORS'];

    function Colors(APP_COLORS) {
        this.byName = byName;

        function byName(name) {
          return (APP_COLORS[name] || '#fff');
        }
    }
})();