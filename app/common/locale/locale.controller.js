/**=========================================================
 * Module: locale-controller.js
 * Demo for locale settings
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.locale')
        .controller('LocalizationController', LocalizationController);

    LocalizationController.$inject = ['$rootScope', 'tmhDynamicLocale', '$locale'];
    function LocalizationController($rootScope, tmhDynamicLocale, $locale) {

        activate();

        ////////////////

        function activate() {
          $rootScope.availableLocales = {
            'en': 'English',
            'es': 'Spanish',
            'de': 'German',
            'fr': 'French',
            'ar': 'Arabic',
            'ja': 'Japanese',
            'ko': 'Korean',
            'pt-br': 'Brasil',
            'zh': 'Chinese'};
          
          $rootScope.model = {selectedLocale: 'pt-br'};
          
          $rootScope.$locale = $locale;
          
          $rootScope.changeLocale = tmhDynamicLocale.set;
        }
    }
})();
