define(function (require) {
    'use strict';
    return function (app) {
        /** Autoload modules */
        console.log('I am in Autoload Folder loading Core module through require js');
        require('modules/core/module')(app);
    };
});

