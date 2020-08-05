const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PROD_MODE = process.env.NODE_ENV === 'production';

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index.js',

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },

    mode: PROD_MODE ? 'production' : 'development',

    devtool: PROD_MODE ? 'none' : 'source-map',

    resolve: {
        extensions: ['.js']
    },

    plugins: [new HtmlWebpackPlugin()],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                  }
            }
        ]
    },

    watch: false
}