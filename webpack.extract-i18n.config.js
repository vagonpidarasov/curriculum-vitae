const path = require('path');
const merge = require('webpack-merge');
const {AngularCompilerPlugin} = require('@ngtools/webpack');
const config = require('./webpack.config.js');

module.exports = merge(config, {
    mode: 'production',

    output: {
        path: path.resolve(__dirname, 'prod'),
        publicPath: '/',
        filename: '[name].[chunkhash].js',
    },


    module: {
        rules: [
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                use: '@ngtools/webpack',
            },
        ],
    },

    optimization: {
        noEmitOnErrors: true,
    },

    plugins: [
            new AngularCompilerPlugin({
                tsConfigPath: path.resolve(__dirname, 'tsconfig.json'),
                entryModule: path.resolve(__dirname, 'src/app/app.module#AppModule'),
                i18nOutFile: path.resolve(__dirname, 'i18n/messages.xlf'),
                i18nOutFormat: 'xlf',
                locale: 'en',
                platform: 0,
            }),
    ],
});
