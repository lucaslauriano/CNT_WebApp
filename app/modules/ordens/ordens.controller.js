(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.professionals:OrdensCtrl
     * @description
     * # OrdensCtrl
     * Modal Controller de app.professionals
     */

    angular.module('app.ordens')
        .controller('app.ordens.OrdensCtrl', OrdensCtrl);

    OrdensCtrl.$inject = [
        '$injector',
        '$rootScope',
        '$modal',
        '$log'
    ];

    function OrdensCtrl($injector, $rootScope, $modal, $log) {
        var viewModel = this;


            viewModel.currentPage = 1;
            viewModel.q = '';

        var PessoasService = $injector.get('app.ordens.OrdensService');
        var PublicProperties = {
            
        };

        _.extend(viewModel, PublicProperties);

        init();

        function init() {
            PessoasService.customGETLIST().then(function(pessoas) {

            });

        }
    }
})();
