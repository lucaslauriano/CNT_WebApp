(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.financeiro.FinanceiroCadCtrl:FinanceiroCadCtrl
     * @description
     * # FinanceiroCadCtrl
     * Controller of the app.financeiro
     */

    angular
        .module('app.financeiro')
        .controller('app.financeiro.FinanceiroCadCtrl', FinanceiroCadCtrl);

    FinanceiroCadCtrl.$inject = [
        '$injector'
    ];

    function FinanceiroCadCtrl($injector) {

        var FinanceiroService = $injector.get('app.financeiro.FinanceiroService');

        var viewModel = this;

        var PublicProperties = {

        };

        _.extend(viewModel, PublicProperties);

        init();

        function init() {

        }
    }
})();
