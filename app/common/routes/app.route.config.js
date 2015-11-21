/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.routes')
        .config(routesConfig);

    routesConfig.$inject = [
          '$stateProvider', 
          '$locationProvider', 
          '$urlRouterProvider',
          'RestangularProvider', 
          'RouteHelpersProvider'];
          
    function routesConfig($stateProvider, $locationProvider, $urlRouterProvider, RestangularProvider, helper){

        // Set the following to true to enable the HTML5 Mode
        // You may have to set <base> tag in index and a routing configuration in your server
        $locationProvider.html5Mode(false);

        // defaults to dashboard
        $urlRouterProvider.otherwise('/app-h/dashboard');

        //
        // Application Routes
        // -----------------------------------
        $stateProvider
          .state('app-h', {
              url: '/app-h',
              abstract: true,
              templateUrl: helper.mainbasepath( 'app-h.html' ),
              resolve: helper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'toaster', 'whirl')
          })
          .state('app-h.dashboard', {
              url: '/dashboard',
              templateUrl: helper.modulebasepath('dashboard/dashboard.html'),
              controller: 'DashboardV2Controller',
              controllerAs: 'dash2',
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins')
          })
          .state('app', {
              url: '/app',
              abstract: true,
              templateUrl: helper.mainbasepath('app.html'),
              resolve: helper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'toaster', 'whirl')
          })
          .state('app.dashboard2', {
              url: '/dashboard2',
              title: 'Dashboard2',
              templateUrl: helper.modulebasepath('dashboard/dashboard2.html'),
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins', 'weather-icons')
          })
          .state('app.dashboard_v2', {
              url: '/dashboard_v2',
              title: 'Dashboard v2',
              templateUrl: helper.modulebasepath('dashboard/dashboard_v2.html'),
              controller: 'DashboardV2Controller',
              controllerAs: 'dash2',
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins')
          })
          .state('app.dashboard_v3', {
              url: '/dashboard_v3',
              title: 'Dashboard v3',
              controller: 'DashboardV3Controller',
              controllerAs: 'dash3',
              templateUrl: helper.modulebasepath('dashboard/dashboard_v3.html'),
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins', 'vector-map', 'vector-map-maps')
          })
          //Pessoas
          .state('app.pessoas-new', {
              url: '/pessoas-new',
              title: 'Pessoas New',
              controller: 'app.pessoas.PessoasCadCtrl',
              controllerAs: 'PessoasCadCtrl',
              templateUrl: helper.modulebasepath('pessoas/pessoas.cad.html'),
              resolve: helper.resolveFor('ui.select', 'taginput','inputmask','localytics.directives')
          })
           .state('app.pessoas-list', {
              url: '/pessoas-list',
              title: 'Blank Template',
              templateUrl: helper.modulebasepath('pessoas/pessoas.list.html'),
              resolve: helper.resolveFor('ui.select', 'taginput','inputmask','localytics.directives')
          })
          // Forum
          .state('page', {
              url: '/page',
              templateUrl: 'main/pages/page.html',
              resolve: helper.resolveFor('modernizr', 'icons'),
              controller: ['$rootScope', function($rootScope) {
                  $rootScope.app.layout.isBoxed = false;
              }]
          })
          // Formulários
          .state('app.form-standard', {
              url: '/form-standard',
              title: 'Form Standard',
              templateUrl: helper.modulebasepath('forms/form-standard.html')
          })
          .state('app.form-extended', {
              url: '/form-extended',
              title: 'Form Extended',
              templateUrl: helper.modulebasepath('forms/form-extended.html'),
              resolve: helper.resolveFor('colorpicker.module', 'codemirror', 'moment', 'taginput','inputmask','localytics.directives', 'ui.bootstrap-slider', 'ngWig', 'filestyle', 'textAngular')
          })
          .state('app.form-validation', {
              url: '/form-validation',
              title: 'Form Validation',
              templateUrl: helper.modulebasepath('forms/form-validation.html'),
              resolve: helper.resolveFor('ui.select', 'taginput','inputmask','localytics.directives')
          })
          .state('app.form-parsley', {
              url: '/form-parsley',
              title: 'Form Validation - Parsley',
              templateUrl: helper.modulebasepath('forms/form-parsley.html'),
              resolve: helper.resolveFor('parsley')
          })
          .state('app.form-wizard', {
              url: '/form-wizard',
              title: 'Form Wizard',
              templateUrl: helper.modulebasepath('forms/form-wizard.html'),
              resolve: helper.resolveFor('parsley')
          })
          .state('app.form-upload', {
              url: '/form-upload',
              title: 'Form upload',
              templateUrl: helper.modulebasepath('forms/form-upload.html'),
              resolve: helper.resolveFor('angularFileUpload', 'filestyle')
          })
          .state('app.form-xeditable', {
              url: '/form-xeditable',
              templateUrl: helper.modulebasepath('forms/form-xeditable.html'),
              resolve: helper.resolveFor('xeditable')
          })
          .state('app.form-imagecrop', {
              url: '/form-imagecrop',
              templateUrl: helper.modulebasepath('forms/form-imagecrop.html'),
              resolve: helper.resolveFor('ngImgCrop', 'filestyle')
          })
          .state('app.form-uiselect', {
              url: '/form-uiselect',
              templateUrl: helper.modulebasepath('forms/form-uiselect.html'),
              controller: 'uiSelectController',
              controllerAs: 'uisel',
              resolve: helper.resolveFor('ui.select')
          })
          // Pages
          .state('page.login', {
              url: '/login',
              title: 'Login',
              templateUrl: 'main/pages/login.html'
          })
          .state('page.register', {
              url: '/register',
              title: 'Register',
              templateUrl: 'main/pages/register.html'
          })
          .state('page.recover', {
              url: '/recover',
              title: 'Recover',
              templateUrl: 'main/pages/recover.html'
          })
          .state('page.lock', {
              url: '/lock',
              title: 'Lock',
              templateUrl: 'main/pages/lock.html'
          })
          .state('page.404', {
              url: '/404',
              title: 'Not Found',
              templateUrl: 'main/pages/404.html'
          })

          // Horizontal layout
          
          //
          // CUSTOM RESOLVES
          //   Add your own resolves properties
          //   following this object extend
          //   method
          // -----------------------------------
          // .state('app.someroute', {
          //   url: '/some_url',
          //   templateUrl: 'path_to_template.html',
          //   controller: 'someController',
          //   resolve: angular.extend(
          //     helper.resolveFor(), {
          //     // YOUR RESOLVES GO HERE
          //     }
          //   )
          // })
          ;
          RestangularProvider.setBaseUrl(' http://localhost:3000');

    }
})();