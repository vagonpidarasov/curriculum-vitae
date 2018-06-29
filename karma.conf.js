'use strict';
const helpers = require('./webpack.helpers');

module.exports = function(karma) {
    karma.set({
        basePath: __dirname,

        frameworks: ['jasmine'],

        mime: {
            'text/x-typescript': ['ts'],
        },

        files: [
            {pattern: 'src/test.ts', watched: false},
        ],

        exclude: [],

        preprocessors: {
            'src/polyfills.ts': ['webpack'],
            'src/test.ts': ['webpack'],
            '**/*.ts': ['webpack'],
        },

        reporters: ['progress', 'junit', 'coverage'],

        junitReporter: {
            outputDir: 'testresults',
            outputFile: 'karma-test-results.xml',
            suite: 'unit',
            useBrowserName: false
        },

        coverageReporter: {
            type: 'lcov',
            dir: 'testresults/',
            subdir: function(browser) {
                return browser.toLowerCase().split(/[ /-]/)[0];
            }
        },

        webpack: {
            mode: 'development',
            resolve: {
                extensions: ['.ts', '.js'],
                modules: [helpers.root('src'), 'node_modules'],
                alias: {src: helpers.root('src')},
            },
            module: {
                rules: [
                    {
                        test: /\.ts$/,
                        use: ['awesome-typescript-loader', 'angular2-template-loader'],
                    },
                    {
                        test: /\.scss$/,
                        use: ['raw-loader', 'sass-loader'],
                    },
                    {
                        test: /\.html$/,
                        use: 'raw-loader',
                    },
                ],

            },
        },

        webpackServer: {
            noInfo: true
        },

        browsers: ['Chrome'],
        port: 9998,
        runnerPort: 9101,
        colors: true,
        logLevel: karma.LOG_INFO,
        autoWatch: true,
        singleRun: true
    });
};
