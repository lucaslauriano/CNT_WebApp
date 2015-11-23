(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.professionals:FinanceiroCtrl
     * @description
     * # FinanceiroCtrl
     * Modal Controller de app.professionals
     */

    angular.module('app.financeiro')
        .controller('app.financeiro.FinanceiroCtrl', FinanceiroCtrl);

    FinanceiroCtrl.$inject = [
        '$injector',
        '$rootScope',
        '$modal',
        '$log'
    ];

    function FinanceiroCtrl($injector, $rootScope, $modal, $log) {
        var viewModel = this;


            viewModel.currentPage = 1;
            viewModel.q = '';

        var FinanceiroService = $injector.get('app.financeiroCtrl.FinanceiroService');
        var PublicProperties = {
            
        };

        _.extend(viewModel, PublicProperties);

        init();

        function init() {
            FinanceiroService.customGETLIST().then(function(pessoas) {

            });

        }
    }
})();
