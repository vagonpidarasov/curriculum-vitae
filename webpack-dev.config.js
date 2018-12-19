const webpackMerge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const atl = require('awesome-typescript-loader');

const commonConfig = require('./webpack.config.js');
const helpers = require('./webpack.helpers');

module.exports = webpackMerge(commonConfig, {
    mode: 'development',

    // devtool: 'source-map',

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        public: '127.0.0.1:8080',
        inline: true,
        watchContentBase: true,
        contentBase: helpers.root('src'),
        open: true,
    },

    output: {
        path: helpers.root('dev'),
        publicPath: '/',
        filename: '[name].js',
        sourceMapFilename: '[name].map',
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['awesome-typescript-loader', 'angular2-template-loader'],
            },
        ],
    },

    plugins: [
        new atl.CheckerPlugin(),
        new MiniCssExtractPlugin({filename: '[name].css'}),
    ],
});
