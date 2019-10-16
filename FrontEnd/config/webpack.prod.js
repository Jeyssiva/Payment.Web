const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path')
var webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    
    entry: [
        path.join(process.cwd(), 'app.js')
    ],

    output: {
        path: path.resolve(__dirname, "../static/"),
        publicPath: '', // The path for index.html to specify the bundle.js(bundle file)
        filename: '[name].js'
    },

    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            test: /\.js(\?.*)?$/i
        })],
    },

    plugins : [
        new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") })
    ],

    performance : {
        hints : 'warning'
    }


 });