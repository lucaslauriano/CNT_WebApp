(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.professional.controller:PessoasCadCtrl
     * @description
     * # PessoasCadCtrl
     * Controller of the app.professional
     */
    angular
        .module('app.pessoas')
        .controller('app.pessoas.PessoasCadCtrl', PessoasCadCtrl);

    PessoasCadCtrl.$inject = [
        '$injector'
    ];

    function PessoasCadCtrl($injector) {

     /*   var PessoasService = $injector.get('app.pessoas.PessoasService');*/
        var vm = this;
       
        var PublicProperties = {
        };

        _.extend(vm, PublicProperties);

        init();

        function init() {
          vm.notBlackListed = function(value) {
            var blacklist = ['some@mail.com','another@email.com'];
            return blacklist.indexOf(value) === -1;
          };

          vm.words = function(value) {
            return value && value.split(' ').length;
          };

          vm.submitted = false;
          vm.validateInput = function(name, type) {
            var input = vm.formValidate[name];
            return (input.$dirty || vm.submitted) && input.$error[type];
          };

          // Submit form
          vm.submitForm = function() {
            vm.submitted = true;
            if (vm.formValidate.$valid) {
              console.log('Submitted!!');
            } else {
              console.log('Not valid!!');
              return false;
            }
          };

       }
    }
})();
