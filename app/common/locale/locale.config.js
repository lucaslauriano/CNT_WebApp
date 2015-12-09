
 (function() {
    'use strict';

    /**
     * @ngdoc function
     * @name app.locale
     * @description
     * # LocaleConfig
     * Configuration of the app.locale
     */

    angular
        .module('app.locale')
        .config(LocaleConfig);

    LocaleConfig.$inject = ['tmhDynamicLocaleProvider'];

    function LocaleConfig(tmhDynamicLocaleProvider){
  
      tmhDynamicLocaleProvider.localeLocationPattern('../bower_components/angular-i18n/angular-locale_{{locale}}.js');
      tmhDynamicLocaleProvider.useStorage('$cookieStore');

    }
})();
