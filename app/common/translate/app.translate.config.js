(function() {
    'use strict';

    angular
        .module('app.translate')
        .config(translateConfig);
    translateConfig.$inject = ['$translateProvider'];
    
    function translateConfig($translateProvider){

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

