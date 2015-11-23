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
        '$injector',
        '$location'
    ];

    function PessoasCadCtrl($injector, $location) {

     /*   var PessoasService = $injector.get('app.pessoas.PessoasService');*/
        var viewModel = this;
       
        var PublicProperties = {
/*            cancelar: _cancelar,
            deletar: _deletar,
            isSalvarDisabled: _isSalvarDisabled,
            salvar: _salvar,*/
            submitForm: _submitForm,
            validateInput: _validateInput
        };

        _.extend(viewModel, PublicProperties);

        init();

        function init() {
            /* viewModel.pessoa = angular.copy(pessoa);*/

          viewModel.notBlackListed = function(value) {

          var blacklist = ['some@mail.com','another@email.com'];
            return blacklist.indexOf(value) === -1;
          };

          viewModel.words = function(value) {
            return value && value.split(' ').length;
          };

          viewModel.submitted = false;

           var directive = {
            link: link,
            restrict: 'A',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {
          var validate = $parse(attrs.validateSteps)(scope),
              wiz = new Wizard(attrs.steps, !!validate, element);
          scope.wizard = wiz.init();
        }

        function Wizard (quantity, validate, element) {
          
          var self = this;
          self.quantity = parseInt(quantity,10);
          self.validate = validate;
          self.element = element;
          
          self.init = function() {
            self.createsteps(self.quantity);
            self.go(1); // always start at fist step
            return self;
          };

          self.go = function(step) {
            
            if ( angular.isDefined(self.steps[step]) ) {

              if(self.validate && step !== 1) {
                var form = $(self.element),
                    group = form.children().children('div').get(step - 2);

                if (false === form.parsley().validate( group.id )) {
                  return false;
                }
              }

              self.cleanall();
              self.steps[step] = true;
            }
          };

          self.active = function(step) {
            return !!self.steps[step];
          };

          self.cleanall = function() {
            for(var i in self.steps){
              self.steps[i] = false;
            }
          };

          self.createsteps = function(q) {
            self.steps = [];
            for(var i = 1; i <= q; i++) self.steps[i] = false;
          };

        }

        }

                  // Submit form
        function _submitForm() {
            viewModel.submitted = true;
            if (viewModel.formValidate.$valid) {
              console.log('Submitted!!');
            } else {
              console.log('Not valid!!');
              return false;
            }
          };

        function _validateInput (name, type) {
            var input = viewModel.formValidate[name];
            return (input.$dirty || viewModel.submitted) && input.$error[type];
          };

        /*function isClean() {
            return angular.equals(pessoa, viewModel.pessoa);
        }

        function isInvalid() {
            return viewModel.listDetail.$invalid;
        }

        function goToListarPessoas() {
            $location.path('/list');
        }

        function _cancelar() {
            goToListarPessoas();
        }

        function _deletar() {
            return ProfessionalService.deletar(viewModel.pessoa.id).then(function() {
                goToListarPessoas();
            });
        }

        function _isSalvarDisabled() {
            if (!pessoa.id) {
                return isInvalid();
            }
            return isClean();
        }

        function _salvar() {
            return ProfessionalService.salvar(viewModel.pessoa).then(function() {
                goToListarPessoas();
            });
        }*/
    }
})();
