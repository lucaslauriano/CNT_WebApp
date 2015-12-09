(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.locale
     * @description
     * # LocalizationCtrl
     * Configuration of the app.locale
     */

    angular
        .module('app.locale')
        .controller('LocalizationCtrl', LocalizationCtrl);

    LocalizationCtrl.$inject = ['$rootScope', 'tmhDynamicLocale', '$locale'];

    function LocalizationCtrl($rootScope, tmhDynamicLocale, $locale) {

        init();

        function init() {
            $rootScope.availableLocales = {
                'en': 'English',
                'es': 'Spanish',
                'de': 'German',
                'fr': 'French',
                'ar': 'Arabic',
                'ja': 'Japanese',
                'ko': 'Korean',
                'pt-br': 'Brasil',
                'zh': 'Chinese'
            };

            $rootScope.model = {
                selectedLocale: 'pt-br'
            };

            $rootScope.$locale = $locale;

            $rootScope.changeLocale = tmhDynamicLocale.set;
        }
    }
})();
