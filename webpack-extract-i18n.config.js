const webpackMerge = require('webpack-merge');
const {AngularCompilerPlugin} = require('@ngtools/webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonConfig = require('./webpack.config.js');
const {root} = require('./webpack.helpers');

module.exports = webpackMerge(commonConfig, {
    mode: 'production',

    output: {
        path: root('prod'),
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
                tsConfigPath: root('tsconfig.json'),
                entryModule: root('src/app/app.module#AppModule'),
                i18nOutFile: root('i18n/messages.xlf'),
                i18nOutFormat: 'xlf',
                locale: 'en',
                platform: 0,
            }),
        new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
    ],
});
