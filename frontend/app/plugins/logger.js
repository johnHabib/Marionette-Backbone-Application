define(function (require) {
    'use strict';

    var Lumberman = require('Lumberman/Lumberman');
    var ConsoleTransport = require('Lumberman/transport/Console');

    return function (app) {
        app.lumberman = new Lumberman();
        app.lumberman.addTransport(new ConsoleTransport());
    };
});






