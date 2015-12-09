(function() {
    'use strict';

     /**
     * @ngdoc function
     * @name app.route
     * @description
     * # RoutesConfig
     * Configuration of the app.route
     */

    angular
        .module('app.routes')
        .config(RoutesConfig);

    RoutesConfig.$inject = [
          '$stateProvider', 
          '$locationProvider', 
          '$urlRouterProvider',
          'RestangularProvider', 
          'RouteHelpersProvider'];
          
    function RoutesConfig($stateProvider, $locationProvider, $urlRouterProvider, RestangularProvider, helper){

        // Set the following to true to enable the HTML5 Mode
        // You may have to set <base> tag in index and a routing configuration in your server
        $locationProvider.html5Mode(false);

        $urlRouterProvider.otherwise('/app-h/dashboard');

        $stateProvider
          .state('app-h', {
              url: '/app-h',
              abstract: true,
              templateUrl: helper.mainbasepath( 'app-h.html' ),
              resolve: helper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'toaster', 'whirl')
          })
          .state('app-h.dashboard', {
              url: '/dashboard',
              title: 'Dashboard',
              templateUrl: helper.mainbasepath('dashboard/dashboard.html'),
              controller: 'DashboardV2Controller',
              controllerAs: 'dash2',
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins')
          })
          // ESTOQUE
          .state('app-estoque', {
              url: '/app-estoque',
              abstract: true,
              templateUrl: helper.modulebasepath('estoque/estoque.app.html'),
              controller: 'app.estoque.EstoqueSidebarCtrl',
              controllerAs: 'AlmoxSidebarCtrl',
              resolve: helper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'toaster', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'whirl')
          })
          .state('app-estoque.dashboard', {
              url: '/dashboard',
              title: 'Dashboard Estoque',
              templateUrl: helper.modulebasepath('estoque/estoque.dashboard.html'),
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins', 'weather-icons')
          })
          // FINANCEIRO
          .state('app-financeiro', {
              url: '/app-financeiro',
              abstract: true,
              templateUrl: helper.modulebasepath('financeiro/financeiro.app.html'),
              controller: 'app.financeiro.FinanceiroSidebarCtrl',
              controllerAs: 'FinanceiroSidebarCtrl',
              resolve: helper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo',
                                         'sparklines', 'slimscroll', 'classyloader', 'toaster', 'whirl')
          })
          .state('app-financeiro.dashboard', {
              url: '/dashboard',
              title: 'Dashboard Financeiro',
              templateUrl: helper.modulebasepath('financeiro/financeiro.dashboard.html'),
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins', 'weather-icons')
          })
          // ORDENS DE SERVIÇO 
          .state('app-ordens', {
              url: '/app-ordens',
              abstract: true,
              templateUrl: helper.modulebasepath('ordens/ordens.app.html'),
              controller: 'app.ordens.OrdensSidebarCtrl',
              controllerAs: 'OrdensSidebarCtrl',
              resolve: helper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'toaster', 'whirl')
          })
          .state('app-ordens.dashboard', {
              url: '/dashboard',
              title: 'Dashboard Ordens',
              templateUrl: helper.modulebasepath('ordens/ordens.dashboard.html'),
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins', 'weather-icons')
          })
           //PESSOAS
          .state('app-pessoas', {
              url: '/app-pessoas',
              abstract: true,
              controller: 'app.pessoas.PessoasSidebarCtrl',
              controllerAs: 'PessoasSidebarCtrl',
              templateUrl: helper.modulebasepath('pessoas/pessoas.app.html'),
              resolve: helper.resolveFor('fastclick', 'oitozero.ngSweetAlert', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'toaster', 'whirl')
          })
          .state('app-pessoas.dashboard', {
              url: '/dashboard',
              title: 'Dashboard',
              templateUrl: helper.modulebasepath('pessoas/pessoas.dashboard.html'),
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins', 'weather-icons')
          })
          .state('app-pessoas.pessoas-new', {
              url: '/pessoas-new',
              title: 'Pessoas New',
              controller: 'app.pessoas.PessoasCadCtrl',
              controllerAs: 'PessoasCadCtrl',
              templateUrl: helper.modulebasepath('pessoas/pessoas.cad.html'),
              resolve: helper.resolveFor('ui.select', 'taginput','inputmask','localytics.directives')
          })
           .state('app-pessoas.pessoas-list', {
              url: '/pessoas-list',
              title: 'Blank Template',
              controller: 'app.pessoas.PessoasCtrl',
              controllerAs: 'PessoasCtrl',
              templateUrl: helper.modulebasepath('pessoas/pessoas.list.html'),
              resolve: helper.resolveFor('ui.select', 'taginput','inputmask','localytics.directives')
          })
          // VENDAS
          .state('app-vendas', {
              url: '/app-vendas',
              abstract: true,
              templateUrl: helper.modulebasepath('vendas/vendas.app.html'),
              controller: 'app.vendas.VendasSidebarCtrl',
              controllerAs: 'VendasSidebarCtrl',
              resolve: helper.resolveFor('fastclick', 'modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'toaster', 'whirl')
          })
          .state('app-vendas.dashboard', {
              url: '/dashboard',
              title: 'Dashboard Financeiro',
              templateUrl: helper.modulebasepath('vendas/vendas.dashboard.html'),
              resolve: helper.resolveFor('flot-chart','flot-chart-plugins', 'weather-icons')
          })
          // Pages
          .state('page', {
              url: '/page',
              templateUrl: 'main/pages/page.html',
              resolve: helper.resolveFor('modernizr', 'icons'),
              controller: ['$rootScope', function($rootScope) {
                  $rootScope.app.layout.isBoxed = false;
              }]
          })
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
          
          RestangularProvider.setBaseUrl('http://localhost:3000');
    }
})();