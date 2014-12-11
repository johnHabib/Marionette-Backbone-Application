define(function (require) {
    'use strict';

    return function (app) {
        /** Autoload plugins */
        require('plugins/logger')(app);
    };

});

