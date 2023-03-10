const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.env.NODE_ENV == 'production';

const config = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
        config.devtool = 'inline-source-map';
    }
    return config;
};
