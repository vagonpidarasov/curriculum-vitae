const webpackMerge = require('webpack-merge');
const {AngularCompilerPlugin} = require('@ngtools/webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const commonConfig = require('./webpack.config.js');
const helpers = require('./webpack.helpers');

module.exports = webpackMerge(commonConfig, {
    mode: 'production',

    output: {
        path: helpers.root('prod'),
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
        new CopyWebpackPlugin([
            'node_modules/@angular/service-worker/ngsw-worker.js',
            'pwa/manifest.json',
            'pwa/icon.png',
        ]),
        new AngularCompilerPlugin({
            tsConfigPath: helpers.root('tsconfig.json'),
            entryModule: helpers.root('src/app/app.module#AppModule'),
            i18nInFile: helpers.root('i18n/messages.ru.xlf'),
            locale: 'ru',
        }),
        new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            reportFilename: './webpack-bundle-analyzer.html',
            analyzerMode: 'static',
        }),
    ],
});
