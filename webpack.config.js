const {ContextReplacementPlugin} = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {loader} = require('mini-css-extract-plugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const {root} = require('./webpack.helpers');

module.exports = {
    entry: [
        root('src/vendor'),
        root('src/index'),
        root('src/styles'),
    ],

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [root('src'), 'node_modules'],
        alias: {'src': root('src')},
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{loader}, 'css-loader', 'sass-loader'],
                include: /node_modules|theme\.scss/,
            },
            {
                test: /\.scss$/,
                use: ['raw-loader', 'sass-loader'],
                exclude: /node_modules|theme\.scss/,
            },
            {
                test: /\.css$/,
                use: [{loader}, 'css-loader'],
                include: [/node_modules/],
            },
            {
                test: /\.html$/,
                use: 'raw-loader',
                exclude: [root('src/index.html')],
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

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]|theme\.scss/,
                    name: 'vendor',
                    chunks: 'all',
                }
            }
        },
    },

    plugins: [
        new Dotenv(),
        new ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)/, root('src')),
        new HtmlWebpackPlugin({template: 'src/index.html'}),
        new HTMLInlineCSSWebpackPlugin(),
    ],
};
