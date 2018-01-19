/**
 * common webpack config
 */

const helpers = require('./webpack.helpers');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractTextPlugin = new ExtractTextPlugin('styles.css');

module.exports = {
    entry: {
        polyfills: helpers.root('src/polyfills'),
        vendor: helpers.root('src/vendor'),
        app: helpers.root('src/index')
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [helpers.root('src'), 'node_modules'],
        alias: {'src': helpers.root('src')}
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['raw-loader', 'postcss-loader', 'sass-loader?sourceMap']
            },
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'}),
                include: [/node_modules/]
            },
            {
                test: /\.html$/,
                use: 'raw-loader',
                exclude: [helpers.root('src/index.html')]
            },
            {
                test: /\.(png|eot|svg|ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)/, helpers.root('src')),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        extractTextPlugin
    ]
};
