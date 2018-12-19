const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const helpers = require('./webpack.helpers');

const {ContextReplacementPlugin} = webpack;

module.exports = {
    entry: [
        helpers.root('src/vendor'),
        helpers.root('src/index'),
        helpers.root('src/styles'),
    ],

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
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    'css-loader',
                ],

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

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                }
            }
        },
    },

    plugins: [
        new ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)/, helpers.root('src')),
        new HtmlWebpackPlugin({template: 'src/index.html'}),
    ],
};
