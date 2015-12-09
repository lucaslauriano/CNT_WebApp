(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.estoque:EstoqueCtrl
     * @description
     * # EstoqueCtrl
     * Modal Controller de app.professionals
     */

    angular.module('app.estoque')
        .controller('app.estoque.EstoqueCtrl', EstoqueCtrl);

    EstoqueCtrl.$inject = [
        '$injector',
        '$rootScope',
        '$modal',
        '$log'
    ];

    function AlmoxCtrl($injector, $rootScope, $modal, $log) {
        var viewModel = this;

        var EstoqueService = $injector.get('app.estoque.EstoqueService');
        
        var PublicProperties = {

        };

        _.extend(viewModel, PublicProperties);

        init();

        function init() {
            EstoqueService.customGETLIST().then(function(estoque) {

            });

        }
    }
})();
