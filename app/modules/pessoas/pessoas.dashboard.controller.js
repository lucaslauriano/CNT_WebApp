/**=========================================================
 * Module: dashboard-controller.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.pessoas')
        .controller('app.pessoas.PessoasDashboardCtrl', PessoasDashboardCtrl);

    PessoasDashboardCtrl.$inject = [
      '$scope', 
      'ChartData', 
      '$timeout'
    ];

    function PessoasDashboardCtrl($scope, ChartData, $timeout) {

        var viewModel = this;

        activate();

        function activate() {

        }
    }
})();