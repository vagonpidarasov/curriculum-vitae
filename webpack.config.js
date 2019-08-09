const path = require('path');
const {devServer} = require('./webpack.dev-server.config');
const {plugins} = require('./webpack.plugins.config');
const moduleConfig = require('./webpack.module.config');

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/index'),
    ],

    devServer,
    plugins,
    module: moduleConfig.module,

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        alias: {'src': path.resolve(__dirname, 'src')},
    },


    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]|index\.scss/,
                    name: 'vendor',
                    chunks: 'all',
                }
            }
        },
    },
};
