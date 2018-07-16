const webpackMerge = require('webpack-merge');
const webpackNgtools = require('@ngtools/webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        new webpackNgtools.AngularCompilerPlugin({
            tsConfigPath: helpers.root('tsconfig.json'),
            entryModule: helpers.root('src/app/app.module#AppModule')
        }),
        new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
    ],
});
