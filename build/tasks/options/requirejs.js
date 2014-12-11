var path = require('path');
var os = require('os');

module.exports = {
    production: {
        options: {
            baseUrl                : './frontend/app/',
            out                    : 'build/dist/static_files/javascript/build.min.js',
            name                   : '../bower_components/requirejs/require',
            include                : 'bootstrap',
            mainConfigFile         : path.join(os.tmpdir(), 'generator_marionette_frontend_require.js'),
            preserveLicenseComments: false,
            generateSourceMaps     : true,
            optimize               : 'uglify2'
        }
    }
};