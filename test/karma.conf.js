// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-10-22 using
// generator-karma 1.0.0

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-messages/angular-messages.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js',
      'bower_components/angular-xeditable/dist/js/xeditable.js',
      'bower_components/AngularJS-Toaster/toaster.js',
      'bower_components/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
      'bower_components/seiyria-bootstrap-slider/js/bootstrap-slider.js',
      'bower_components/angular-bootstrap-slider/slider.js',
      'bower_components/bootstrap-tour/build/js/bootstrap-tour.js',
      'bower_components/bootstrap-tour/build/js/bootstrap-tour-standalone.js',
      'bower_components/angular-bootstrap-tour/dist/angular-bootstrap-tour.js',
      'bower_components/angular-carousel/dist/angular-carousel.js',
      'bower_components/chartist/dist/chartist.min.js',
      'bower_components/angular-chartist.js/dist/angular-chartist.js',
      'bower_components/chosen/chosen.jquery.min.js',
      'bower_components/angular-chosen-localytics/chosen.js',
      'bower_components/datatables/media/js/jquery.dataTables.js',
      'bower_components/angular-datatables/dist/angular-datatables.js',
      'bower_components/angular-datatables/dist/plugins/bootstrap/angular-datatables.bootstrap.js',
      'bower_components/angular-datatables/dist/plugins/colreorder/angular-datatables.colreorder.js',
      'bower_components/angular-datatables/dist/plugins/columnfilter/angular-datatables.columnfilter.js',
      'bower_components/angular-datatables/dist/plugins/light-columnfilter/angular-datatables.light-columnfilter.js',
      'bower_components/angular-datatables/dist/plugins/colvis/angular-datatables.colvis.js',
      'bower_components/angular-datatables/dist/plugins/fixedcolumns/angular-datatables.fixedcolumns.js',
      'bower_components/angular-datatables/dist/plugins/fixedheader/angular-datatables.fixedheader.js',
      'bower_components/angular-datatables/dist/plugins/scroller/angular-datatables.scroller.js',
      'bower_components/angular-datatables/dist/plugins/tabletools/angular-datatables.tabletools.js',
      'bower_components/angular-datatables/dist/plugins/buttons/angular-datatables.buttons.js',
      'bower_components/angular-datatables/dist/plugins/select/angular-datatables.select.js',
      'bower_components/angular-deckgrid/angular-deckgrid.js',
      'bower_components/angular-file-upload/dist/angular-file-upload.min.js',
      'bower_components/jqcloud2/dist/jqcloud.js',
      'bower_components/angular-jqcloud/angular-jqcloud.js',
      'bower_components/jquery-knob/js/jquery.knob.js',
      'bower_components/angular-knob/src/angular-knob.js',
      'bower_components/sweetalert/dist/sweetalert.min.js',
      'bower_components/ngSweetAlert/SweetAlert.js',
      'bower_components/codemirror/lib/codemirror.js',
      'bower_components/angular-ui-codemirror/ui-codemirror.js',
      'bower_components/angular-ui-grid/ui-grid.js',
      'bower_components/angular-ui-scroll/dist/ui-scroll.js',
      'bower_components/angular-ui-scrollpoint/dist/scrollpoint.js',
      'bower_components/angular-ui-event/dist/event.js',
      'bower_components/angular-ui-mask/dist/mask.js',
      'bower_components/angular-ui-validate/dist/validate.js',
      'bower_components/angular-ui-indeterminate/dist/indeterminate.js',
      'bower_components/angular-ui-uploader/dist/uploader.js',
      'bower_components/angular-ui-utils/index.js',
      'bower_components/angular-ui-map/ui-map.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/oclazyload/dist/ocLazyLoad.js',
      'bower_components/angular-loading-bar/build/loading-bar.js',
      'bower_components/angular-dynamic-locale/src/tmhDynamicLocale.js',
      'bower_components/angular-translate/angular-translate.js',
      'bower_components/ngstorage/ngStorage.js',
      'bower_components/Flot/jquery.flot.js',
      'bower_components/flot.tooltip/js/jquery.flot.tooltip.js',
      'bower_components/fastclick/lib/fastclick.js',
      'bower_components/flot-spline/js/jquery.flot.spline.js',
      'bower_components/screenfull/dist/screenfull.js',
      'bower_components/sparklines/source/sparkline.js',
      'bower_components/classy-loader/jquery.classyloader.js',
      'bower_components/jquery-ui/jquery-ui.js',
      'bower_components/angular-ui-date/src/date.js',
      'bower_components/moment/moment.js',
      'bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
      'bower_components/jquery.inputmask/dist/inputmask/inputmask.js',
      'bower_components/lodash/lodash.js',
      'bower_components/restangular/dist/restangular.js',
      'bower_components/ngWig/dist/ng-wig.js',
      'bower_components/bootstrap-filestyle/src/bootstrap-filestyle.js',
      'bower_components/rangy/rangy-core.js',
      'bower_components/rangy/rangy-classapplier.js',
      'bower_components/rangy/rangy-highlighter.js',
      'bower_components/rangy/rangy-selectionsaverestore.js',
      'bower_components/rangy/rangy-serializer.js',
      'bower_components/rangy/rangy-textrange.js',
      'bower_components/textAngular/dist/textAngular.js',
      'bower_components/textAngular/dist/textAngular-sanitize.js',
      'bower_components/textAngular/dist/textAngularSetup.js',
      'bower_components/parsleyjs/dist/parsley.js',
      'bower_components/select2/select2.js',
      'bower_components/angular-ui-select3/src/select3.js',
      'bower_components/ui-select/dist/select.js',
      'bower_components/angularLocalStorage/dist/angularLocalStorage.min.js',
      'bower_components/angular-translate-loader-url/angular-translate-loader-url.js',
      'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'bower_components/angular-translate-handler-log/angular-translate-handler-log.js',
      'bower_components/angular-translate-loader-partial/angular-translate-loader-partial.js',
      'bower_components/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
      'bower_components/angular-translate-storage-local/angular-translate-storage-local.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      "app/scripts/**/*.js",
      "test/mock/**/*.js",
      "test/spec/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "PhantomJS"
    ],

    // Which plugins to enable
    plugins: [
      "karma-phantomjs-launcher",
      "karma-jasmine"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
