(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.pessoas.planos.controller:PlanosCtrl
	 * @description
	 * # PlanosCtrl
	 * Controller of the app.pessoas.planos
	 */
	angular
	  .module('app.pessoas.planos')
	  .controller('app.pessoas.planos.PlanosCtrl', PlanosCtrl);

	PlanosCtrl.$inject = ['$injector'];

	function PlanosCtrl($injector) {
		var viewModel = this;

		init();

		function init() {

		}
	}
})();