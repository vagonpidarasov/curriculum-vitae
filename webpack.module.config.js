const path = require('path');
const {loader} = require('mini-css-extract-plugin');

module.exports = {
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
                exclude: [path.resolve(__dirname, 'src/index.html')],
            },
            {
                test: /\.(png|eot|svg|ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {name: '[name].[ext]'},
                }],
            },
            {
                // Mark files inside `@angular/core` as using SystemJS style dynamic imports.
                // Removing this will cause deprecation warnings to appear.
                test: /[\/\\]@angular[\/\\]core[\/\\].+\.js$/,
                parser: { system: true },  // enable SystemJS
            },
        ],
    },
};
