const webpack = require('webpack');
const path = require('path');
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    entry: ['./index.js'],
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: "/assets",
        filename: "[name].bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: 'source-map'
};