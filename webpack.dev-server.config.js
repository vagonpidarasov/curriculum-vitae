const path = require('path');

module.exports = {
    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        inline: true,
        watchContentBase: true,
        contentBase: path.resolve(__dirname, './src'),
        open: true,
        // writeToDisk: false,
    },
};
