(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.professional.PessoasCadCtrl:PessoasCadCtrl
     * @description
     * # PessoasCadCtrl
     * Controller of the app.professional
     */

    angular
        .module('app.pessoas')
        .controller('app.pessoas.PessoasCadCtrl', PessoasCadCtrl);

    PessoasCadCtrl.$inject = [
        '$injector',
        '$log',
        '$scope',
        '$modal',
        '$timeout',
        'SweetAlert'
    ];

    function PessoasCadCtrl($injector, $log, $scope, $modal, $timeout, SweetAlert) {

        var PessoasService = $injector.get('app.pessoas.PessoasService');

        var viewModel = this;

        var PublicProperties = {
            openModal: _openModal,
            demo1: _demo1,
            demo2: _demo2,
            demo3: _demo3,
            demo4: _demo4,
            demo5: _demo5,
            demo6: _demo6
        };

        _.extend(viewModel, PublicProperties);

        init();

        function init() {



          // PANEL DISMISS EVENTS
          $scope.$on('panel-remove', function(event, id, deferred){
            console.log('Panel #' + id + ' removing');
            deferred.resolve();
          });

          // Panel removed ( only if above was resolved() )
          $scope.$on('panel-removed', function(event, id){

            console.log('Panel #' + id + ' removed');

          });

          // PANEL REFRESH EVENTS
          $scope.$on('panel-refresh', function(event, id) {
            var secs = 1;
            
            console.log('Refreshing during ' + secs +'s #'+id);

            $timeout(function(){
              $scope.$broadcast('removeSpinner', id);
              console.log('Refreshed #' + id);
            }, 3000);
          });
        }
        
        
            $scope.$watch('panelDemo1',function(newVal){
              
              console.log('panelDemo1 collapsed: ' + newVal);

          });

          viewModel.templates = [{
            name: 'Pessoa Física',
            url: 'modules/pessoas/pessoas.fisica.html'
          }, {
              name: 'Pessoa Jurídica',
              url: 'modules/pessoas/pessoas.juridica.html'
          }];

        function _demo1() {
            SweetAlert.swal('Here\'s a message');
          };

        function _demo2() {
            SweetAlert.swal('Here\'s a message!', 'It\'s pretty, isn\'t it?');
          };

        function _demo3() {
            SweetAlert.swal('Good job!', 'You clicked the button!', 'success');
          };

        function _demo5() {
            SweetAlert.swal({
                title: 'Are you sure?',
                text: 'Your will not be able to recover this imaginary file!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel plx!',
                closeOnConfirm: false,
                closeOnCancel: false
            }, function(isConfirm) {
                if (isConfirm) {
                    SweetAlert.swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
                } else {
                    SweetAlert.swal('Cancelled', 'Your imaginary file is safe :)', 'error');
                }
            });
        };

        function _demo4() {
            SweetAlert.swal({
                title: 'Deseja Cadastrar um plano?',
                text: 'Your will not be able to recover this imaginary file!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: 'Yes, delete it!',
                closeOnConfirm: false
            }, function() {
                SweetAlert.swal('Booyah!');
            });
        };

        function _demo6() {
            SweetAlert.swal({
                title: 'Sweet!',
                text: 'Here\'s a custom image.',
                imageUrl: 'http://oitozero.com/img/avatar.jpg'
            });
        };

        function _openModal() {
            $log('Clicado');
        }

    }
})();
