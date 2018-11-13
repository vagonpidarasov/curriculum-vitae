const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBundleAnalyzer = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const helpers = require('./webpack.helpers');

module.exports = {
    entry: [
        helpers.root('src/polyfills'),
        helpers.root('src/vendor'),
        helpers.root('src/index'),
        helpers.root('src/styles'),
    ],

    // devtool: 'source-map',

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        public: '127.0.0.1:8080',
        inline: true,
        watchContentBase: true,
        contentBase: helpers.root('src'),
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
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)/, helpers.root('src')),
        new HtmlWebpackPlugin({template: 'src/index.html'}),
        // new webpackBundleAnalyzer.BundleAnalyzerPlugin(),
    ],
};
