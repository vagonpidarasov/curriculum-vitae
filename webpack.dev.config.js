const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
    mode: 'development',
    devtool: 'source-map',

    output: {
        path: path.resolve(__dirname, 'dev'),
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
});
