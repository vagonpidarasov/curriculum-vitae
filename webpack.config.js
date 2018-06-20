const webpack = require('webpack');
const helpers = require('./webpack.helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackBundleAnalyzer = require('webpack-bundle-analyzer');

const extractTextPlugin = new ExtractTextPlugin('app.css');

module.exports = {
    entry: {
        app: [
            helpers.root('src/polyfills'),
            helpers.root('src/vendor'),
            helpers.root('src/index'),
            helpers.root('src/styles'),
        ],
    },

    // devtool: 'source-map',

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        public: '127.0.0.1:8080',
        inline: true,
        watchContentBase: true,
        contentBase: helpers.root('src')
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [helpers.root('src'), 'node_modules'],
        alias: {'src': helpers.root('src')},
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['raw-loader', 'sass-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'}),
                include: [/node_modules/],
            },
            {
                test: /\.html$/,
                use: 'raw-loader',
                exclude: [helpers.root('src/index.html')],
            },
            {
                test: /\.(png|eot|svg|ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {name: '[name].[ext]'},
                }],
            },
        ],
    },

    plugins: [
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)/, helpers.root('src')),
        new HtmlWebpackPlugin({template: 'src/index.html'}),
        extractTextPlugin,
        // new webpackBundleAnalyzer.BundleAnalyzerPlugin(),
    ]
};
