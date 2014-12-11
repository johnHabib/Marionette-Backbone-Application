define(function (require) {
    'use strict';

    return function (app) {
        /** Autoload plugins */
        require('vendors/handlebars')(app);
    };

});

