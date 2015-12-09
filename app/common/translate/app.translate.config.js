(function() {
    'use strict';

     /**
     * @ngdoc function
     * @name app.translate
     * @description
     * # TranslateConfig
     * Configuration of the app.translate
     */

    angular
        .module('app.translate')
        .config(TranslateConfig);

    TranslateConfig.$inject = ['$translateProvider'];
    
    function TranslateConfig($translateProvider){

      $translateProvider.useStaticFilesLoader({
          prefix : 'common/translate/',
          suffix : '.json'
      });

      $translateProvider.preferredLanguage('pt-br');
      $translateProvider.useLocalStorage('');
      $translateProvider.usePostCompiling(true);
      $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

    }
})();

