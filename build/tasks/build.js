module.exports = function (grunt) {
    'use strict';

    var nconf = require('nconf');
    var path = require('path');
    var os = require('os');

    var buildRequirejsConfig = function () {

        var requirejsTemplate = grunt.file.read('build/requirejs.json');
        return grunt.template.process(requirejsTemplate, { data : { path : '../' }});

    };

    var getIndexPath = function () {
        var indexPath = 'frontend/index.html';
        if (grunt.config('target') !== 'development') {
            indexPath = 'build/dist/index.html';
        }
        return indexPath;
    };

    grunt.registerTask('buildTemplates', 'Builds templates site', function () {

        var target = grunt.config('target');
        var indexTemplate = grunt.file.read('build/index.html');

        /**
         * Load in target specific configuration file
         */
        nconf.file('environment', path.join(__dirname, '..', 'config', target + '.json'));
        nconf.file('config', path.join(__dirname, '..', 'config', 'config.json'));

        var data = {
            target : target,
            config : nconf.get(),
            requirejs : buildRequirejsConfig()
        };

        var processedIndex = grunt.template.process(indexTemplate, { data : data });
        grunt.file.write(getIndexPath(), processedIndex);

    });


    grunt.registerTask('buildRequirejsConfig', function () {
        grunt.file.write(path.join(os.tmpdir(), 'generator_marionette_frontend_require.js'), 'var require = ' + buildRequirejsConfig() + ';');
    });

    grunt.registerTask('build', function () {

        var target = grunt.option('target') || 'development';
        grunt.config('target', target);
        grunt.task.run(target);

    });

    grunt.registerTask('development', ['buildTemplates']);
    grunt.registerTask('production', ['copy', 'buildRequirejsConfig', 'requirejs', 'buildTemplates']);


};