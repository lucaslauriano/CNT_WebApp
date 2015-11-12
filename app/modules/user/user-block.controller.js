(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .controller('UserBlockController', UserBlockController);

    UserBlockController.$inject = ['$rootScope'];
    function UserBlockController($rootScope) {

        activate();

        function activate() {
          $rootScope.user = {
            name:     'Lucas',
            job:      'ng-developer',
            picture:  'content/img/user/02.jpg'
          };

          // Hides/show user avatar on sidebar
          $rootScope.toggleUserBlock = function(){
            $rootScope.$broadcast('toggleUserBlock');
          };

          $rootScope.userBlockVisible = false;
          
          $rootScope.$on('toggleUserBlock', function(/*event, args*/) {

            $rootScope.userBlockVisible = ! $rootScope.userBlockVisible;
            
          });
        }
    }
})();