(function() {
    'use strict';
    /**
     * @ngdoc overview
     * @name cntWebApp
     * @description
     * # cntWebApp
     *
     * description
     */

  // APP STAR //
    angular
        .module('cntWebApp', [
            /*common*/
            'app.core',
            'app.lazyload',
            'app.locale',
            'app.routes',
            'app.translate',
            /*content*/
            'app.icons',
            'app.preloader',
            /*main*/
            'app.loadingbar',
            'app.navsearch',
            'app.sidebar',
            'app.pages',
            'app.settings',
            /*modules*/
            'app.dashboard',
            'app2.dashboard2',
            'app.forms',
            'app.utils',
            'app.pessoas'
        ]);
})();

(function() {
    'use strict';

    angular
        .module('app.colors', []);
})();

(function() {
    'use strict';

    angular
        .module('app.dashboard', []);
})();

(function() {
    'use strict';

    angular
        .module('app2.dashboard2', []);
})();

(function() {
    'use strict';

    angular
        .module('app.forms', []);
})();

(function() {
    'use strict';

    angular
        .module('app.icons', []);
})();

(function() {
    'use strict';

    angular
        .module('app.lazyload', []);
})();

(function() {
    'use strict';

    angular
        .module('app.loadingbar', []);
})();

(function() {
    'use strict';

    angular
        .module('app.locale', []);
})();


(function() {
    'use strict';

    angular
        .module('app.navsearch', []);
})();

(function() {
    'use strict';

    angular
        .module('app.pages', []);
})();

(function() {
    'use strict';

    angular
        .module('app.preloader', []);
})();

(function() {
    'use strict';

    angular
        .module('app.routes', [
            'app.lazyload'
        ]);
})();

(function() {
    'use strict';

    angular
        .module('app.settings', []);
})();

(function() {
    'use strict';

    angular
        .module('app.sidebar', []);
})();

(function() {
    'use strict';

    angular
        .module('app.translate', []);
})();

(function() {
    'use strict';

    angular
        .module('app.utils', [
            'app.colors'
        ]);
})();

(function() {
    'use strict';

    angular
        .module('app.pessoas', []);
})();

(function() {
    'use strict';

    angular
        .module('app.financeiro', []);
})();

(function() {
    'use strict';

    angular
        .module('app.vendas', []);
})();

(function() {
    'use strict';

    angular
        .module('app.ordens', []);
})();

(function() {
    'use strict';

    angular
        .module('app.chamados', []);
})();

(function() {
    'use strict';

    angular
        .module('app.almox', []);
})();



// (function() {
//     'use strict';

//     angular
//         .module('custom', [
//             // request the the entire framework
//             'cntWebApp',
//             // or just modules
//             'app.core',
//             'app.sidebar'
//             /*...*/
//         ]);
// })();

// To run this code, edit file index.html or index.jade and change
// html data-ng-app attribute from angle to myAppName
// ----------------------------------------------------------------------

// (function() {
//     'use strict';

//     angular
//         .module('custom')
//         .controller('Controller', Controller);

//     Controller.$inject = ['$log'];

//     function Controller($log) {
//         // for controllerAs syntax
//         // var vm = this;

//         activate();

//         function activate() {
//             $log.log('I\'m a line from custom.js');
//         }
//     }
// })();
