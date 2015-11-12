/**=========================================================
 * Module: locale-config.js
 =========================================================*/

 (function() {
    'use strict';

    angular
        .module('app.locale')
        .config(localeConfig)
        ;
    localeConfig.$inject = ['tmhDynamicLocaleProvider'];
    function localeConfig(tmhDynamicLocaleProvider){
  
      tmhDynamicLocaleProvider.localeLocationPattern('../bower_components/angular-i18n/angular-locale_{{locale}}.js');
      tmhDynamicLocaleProvider.useStorage('$cookieStore');

    }
})();
