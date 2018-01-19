'use strict';

module.exports = function(karma) {
    karma.set({
        basePath: __dirname,

        frameworks: ['jasmine'],

        mime: {
            'text/x-typescript': ['ts','tsx']
        },

        files: [
            {pattern: 'src/polyfills.ts', watched: false},
            {pattern: 'src/test-setup.ts', watched: false},
            {pattern: 'src/**/*.spec.ts', watched: false}
        ],

        exclude: [],

        preprocessors: {
            'src/polyfills.ts': ['webpack', 'sourcemap'],
            'src/test-setup.ts': ['webpack', 'sourcemap'],
            '**/*.ts': ['webpack', 'sourcemap'],
            '**/*.tsx': ['webpack', 'sourcemap']
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
            node: {
                fs: 'empty',
                net: 'empty',
                tls: 'empty'
            },
            devtool: 'inline-source-map',
            resolve: {
                extensions: ['.ts', '.js', '.tsx'],
                modules: ['src', 'node_modules']
            },

            module: {
                rules: [
                    {
                        test: /\.(ts|tsx|)$/,
                        use: ['awesome-typescript-loader']
                    }
                ]
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
