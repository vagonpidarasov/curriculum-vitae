const path = require('path');
const {ContextReplacementPlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CheckerPlugin} = require('awesome-typescript-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const Dotenv = require('dotenv-webpack');

module.exports = {
    plugins: [
        new Dotenv(),
        new ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)/, path.resolve(__dirname, './src')),
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new MiniCssExtractPlugin({filename: '[name].css'}),
        new HTMLInlineCSSWebpackPlugin(),
        new CheckerPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'bundle-size.html',
            openAnalyzer: false,
        }),
    ],
};
