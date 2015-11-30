/**=========================================================
 * Module: lazyload-constant.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.lazyload')
        .constant('APP_REQUIRES', {
            // jQuery based and standalone scripts
            scripts: {
                'whirl': ['bower_components/whirl/dist/whirl.css'],
                'classyloader': ['bower_components/classy-loader/jquery.classyloader.js'],
                'animo': ['bower_components/animo.js/animo.js'],
                'fastclick': ['bower_components/fastclick/lib/fastclick.js'],
                'modernizr': ['bower_components/modernizr/src/modernizr.js'],
                'animate': ['bower_components/animate.css/animate.min.css'],
                'skycons': ['bower_components/skycons/skycons.js'],
                'icons': ['bower_components/font-awesome/css/font-awesome.min.css',
                          'bower_components/simple-line-icons/css/simple-line-icons.css'
                ],
                'weather-icons': ['bower_components/weather-icons/css/weather-icons.min.css'],
                'sparklines': ['bower_components/sparklines/source/sparkline.js'],
                'wysiwyg': ['bower_components/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                            'bower_components/bootstrap-wysiwyg/external/jquery.hotkeys.js'
                ],
                'slimscroll': ['bower_components/slimScroll/jquery.slimscroll.min.js'],
                'screenfull': ['bower_components/screenfull/dist/screenfull.js'],
                'vector-map': ['bower_componentsvendor/ika.jvectormap/jquery-jvectormap-1.2.2.min.js',
                               'bower_components/ika.jvectormap/jquery-jvectormap-1.2.2.css'
                ],
                'vector-map-maps': ['bower_components/ika.jvectormap/jquery-jvectormap-world-mill-en.js',
                                    'bower_components/ika.jvectormap/jquery-jvectormap-us-mill-en.js'
                ],
                'loadGoogleMapsJS': ['bower_components/gmap/load-google-maps.js'],
                'flot-chart': ['bower_components/Flot/jquery.flot.js'],
                'flot-chart-plugins': ['bower_components/flot.tooltip/js/jquery.flot.tooltip.min.js',
                                       'bower_components/Flot/jquery.flot.resize.js',
                                       'bower_components/Flot/jquery.flot.pie.js',
                                       'bower_components/Flot/jquery.flot.time.js',
                                       'bower_components/Flot/jquery.flot.categories.js',
                                       'bower_components/flot-spline/js/jquery.flot.spline.js'
                ],
                // jqy core and widgets
                'jquery-ui': ['bower_components/jquery-ui/ui/core.js',
                              'bower_components/jquery-ui/ui/widget.js'
                ],
                // ls only jquery required modules and touch support
                'jquery-ui-widgets': ['bower_components/jquery-ui/ui/core.js',
                                      'bower_components/jquery-ui/ui/widget.js',
                                      'bower_components/jquery-ui/ui/mouse.js',
                                      'bower_components/jquery-ui/ui/draggable.js',
                                      'bower_componentsr/jquery-ui/ui/droppable.js',
                                      'bower_components/jquery-ui/ui/sortable.js',
                                      'bower_components/jqueryui-touch-punch/jquery.ui.touch-punch.min.js'
                ],
                'moment': ['bower_components/moment/min/moment-with-locales.min.js'],
                'inputmask': ['bower_components/jquery.inputmask/dist/jquery.inputmask.bundle.js'],
                'flatdoc': ['bower_components/flatdoc/flatdoc.js'],
                'codemirror': ['bower_components/codemirror/lib/codemirror.js',
                               'bower_components/codemirror/lib/codemirror.css'
                ],
                // modes for common web fil            
                'codemirror-modes-web': ['bower_components/codemirror/mode/javascript/javascript.js',
                                         'bower_components/codemirror/mode/xml/xml.js',
                                         'bower_components/codemirror/mode/htmlmixed/htmlmixed.js',
                                         'bower_components/codemirror/mode/css/css.js'
                ],
                'taginput': ['bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.css',
                             'bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js'
                ],
                'filestyle': ['bower_components/bootstrap-filestyle/src/bootstrap-filestyle.js'],
                'parsley': ['bower_components/parsleyjs/dist/parsley.min.js'],
                'fullcalendar': ['bower_components/fullcalendar/dist/fullcalendar.min.js',
                                 'bower_components/fullcalendar/dist/fullcalendar.css'
                ],
                'gcal': ['bower_components/fullcalendar/dist/gcal.js'],
                'chartjs': ['bower_components/Chart.js/Chart.js'],
                'morris': [ 'bower_components/raphael/raphael.js',
                            'bower_components/morris.js/morris.js',
                            'bower_components/morris.js/morris.css'
                ],
                'loaders.css': ['bower_components/loaders.css/loaders.css'],
                'spinkit': ['bower_components/spinkit/css/spinkit.css']
            },
            // Angular based script (use the right module name)
            modules: [{
                name: 'toaster',
                files: ['bower_components/angularjs-toaster/toaster.js',
                        'bower_components/angularjs-toaster/toaster.css'
                ]
            }, {
                name: 'localytics.directives',
                files: ['bower_components/chosen/chosen.jquery.min.js',
                        'bower_components/chosen/chosen.min.css',
                        'bower_components/angular-chosen-localytics/chosen.js'
                ]
            }, {
                name: 'ngDialog',
                files: ['bower_components/ngDialog/js/ngDialog.min.js',
                        'bower_components/ngDialog/css/ngDialog.min.css',
                        'bower_components/ngDialog/css/ngDialog-theme-default.min.css'
                ]
            }, {
                name: 'ngWig',
                files: ['bower_components/ngWig/dist/ng-wig.min.js']
            }, {
                name: 'ngTable',
                files: ['bower_components/ng-table/dist/ng-table.min.js',
                        'bower_components/ng-table/dist/ng-table.min.css'
                ]
            }, {
                name: 'ngTableExport',
                files: ['bower_components/ng-table-export/ng-table-export.js']
            }, {
                name: 'angularBootstrapNavTree',
                files: ['bower_components/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                        'bower_components/angular-bootstrap-nav-tree/dist/abn_tree.css'
                ]
            }, {
                name: 'htmlSortable',
                files: ['bower_components/html.sortable/dist/html.sortable.js',
                        'bower_components/html.sortable/dist/html.sortable.angular.js'
                ]
            }, {
                name: 'xeditable',
                files: ['bower_components/angular-xeditable/dist/js/xeditable.js',
                        'bower_components/angular-xeditable/dist/css/xeditable.css'
                ]
            }, {
                name: 'angularFileUpload',
                files: ['bower_components/angular-file-upload/dist/angular-file-upload.js']
            }, {
                name: 'ngImgCrop',
                files: ['bower_components/ng-img-crop/compile/unminified/ng-img-crop.js',
                        'bower_components/ng-img-crop/compile/unminified/ng-img-crop.css'
                ]
            }, {
                name: 'ui.select',
                files: ['bower_components/ui-select/dist/select.js',
                        'bower_components/ui-select/dist/select.css'
                ]
            }, {
                name: 'ui.codemirror',
                files: ['bower_components/angular-ui-codemirror/ui-codemirror.js']
            }, {
                name: 'angular-carousel',
                files: ['bower_components/angular-carousel/dist/angular-carousel.css',
                        'bower_components/angular-carousel/dist/angular-carousel.js'
                ]
            }, {
                name: 'ngGrid',
                files: ['bower_components/ng-grid/build/ng-grid.min.js',
                        'bower_components/ng-grid/ng-grid.css'
                ]
            }, {
                name: 'infinite-scroll',
                files: ['bower_componentsr/ngInfiniteScroll/build/ng-infinite-scroll.js']
            }, {
                name: 'ui.bootstrap-slider',
                files: ['bower_components/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js',
                        'bower_components/seiyria-bootstrap-slider/dist/css/bootstrap-slider.min.css',
                        'bower_components/angular-bootstrap-slider/slider.js'
                ]
            }, {
                name: 'ui.grid',
                files: ['bower_components/angular-ui-grid/ui-grid.min.css',
                        'bower_components/angular-ui-grid/ui-grid.min.js'
                ]
            }, {
                name: 'textAngular',
                files: ['bower_components/textAngular/dist/textAngular.css',
                        'bower_components/textAngular/dist/textAngular-rangy.min.js',
                        'bower_components/textAngular/dist/textAngular-sanitize.js',
                        'bower_components/textAngular/src/globals.js',
                        'bower_components/textAngular/src/factories.js',
                        'bower_components/textAngular/src/DOM.js',
                        'bower_components/textAngular/src/validators.js',
                        'bower_components/textAngular/src/taBind.js',
                        'bower_components/textAngular/src/main.js',
                        'bower_components/textAngular/dist/textAngularSetup.js',
                        'bower_components/textAngular/dist/textAngular.min.js'
                ],
                serie: true
            }, {
                name: 'angular-rickshaw',
                files: ['bower_components/d3/d3.min.js',
                        'bower_components/rickshaw/rickshaw.js',
                        'bower_components/rickshaw/rickshaw.min.css',
                        'bower_components/angular-rickshaw/rickshaw.js'
                ],
                serie: true
            }, {
                name: 'angular-chartist',
                files: ['bower_components/chartist/dist/chartist.min.css',
                        'bower_components/chartist/dist/chartist.js',
                        'bower_components/angular-chartist.js/dist/angular-chartist.js'
                ],
                serie: true
            }, {
                name: 'ui.map',
                files: ['bower_components/angular-ui-map/ui-map.js']
            }, {
                name: 'ui.validate',
                files: ['bower_components/angular-ui-validate/dist/validate.js']
            }, {
                name: 'datatables',
                files: ['bower_components/datatables/media/css/jquery.dataTables.css',
                        'bower_components/datatables/media/js/jquery.dataTables.js',
                        'bower_components/angular-datatables/dist/angular-datatables.js'
                ],
                serie: true
            }, {
                name: 'angular-jqcloud',
                files: ['bower_components/jqcloud2/dist/jqcloud.css',
                        'bower_components/jqcloud2/dist/jqcloud.js',
                        'bower_components/angular-jqcloud/angular-jqcloud.js'
                ]
            }, {
                name: 'angularGrid',
                files: ['bower_components/ag-grid/dist/angular-grid.css',
                        'bower_components/ag-grid/dist/angular-grid.js',
                        'bower_components/ag-grid/dist/theme-dark.css',
                        'bower_components/ag-grid/dist/theme-fresh.css'
                ]
            }, {
                name: 'ng-nestable',
                files: ['bower_components/ng-nestable/src/angular-nestable.js',
                        'bower_components/nestable/jquery.nestable.js'
                ]
            }, {
                name: 'akoenig.deckgrid',
                files: ['bower_components/angular-deckgrid/angular-deckgrid.js']
            }, {
                name: 'oitozero.ngSweetAlert',
                files: ['bower_components/sweetalert/dist/sweetalert.css',
                        'bower_components/sweetalert/dist/sweetalert.min.js',
                        'bower_components/angular-sweetalert/SweetAlert.js'
                ]
            }, {
                name: 'bm.bsTour',
                files: ['bower_components/bootstrap-tour/build/css/bootstrap-tour.css',
                        'bower_components/bootstrap-tour/build/js/bootstrap-tour-standalone.js',
                        'bower_components/angular-bootstrap-tour/dist/angular-bootstrap-tour.js'
                ],
                serie: true
            }, {
                name: 'ui.knob',
                files: ['bower_components/angular-knob/src/angular-knob.js',
                        'bower_components/jquery-knob/dist/jquery.knob.min.js'
                ]
            }, {
                name: 'easypiechart',
                files: ['bower_components/jquery.easy-pie-chart/dist/angular.easypiechart.min.js']
            }, {
                name: 'colorpicker.module',
                files: ['bower_components/angular-bootstrap-colorpicker/css/colorpicker.css',
                        'bower_components/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js'
                ]
            }]
        });
})();
