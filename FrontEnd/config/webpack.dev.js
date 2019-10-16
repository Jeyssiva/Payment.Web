const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path')
const CircularDependencyPlugin = require('circular-dependency-plugin');
var webpack = require('webpack');


module.exports = merge(common, {
   mode: 'development',

   entry : [
    // 'webpack-dev-server/client?reload=true',
    path.join(process.cwd(), 'app.js')
   ],

   devtool: 'inline-source-map',

   devServer: {
    contentBase: './dist'
    }, 

    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
      },

    optimization : {
      nodeEnv: 'development',
      namedModules: true,
      namedChunks: true,
      minimize : false,
    },

    plugins : [
        new CircularDependencyPlugin({
            exclude: /a\.js|node_modules/, // exclude node_modules
            failOnError: false // show a warning when there is a circular dependency
          }),
        new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
        new webpack.NamedModulesPlugin(),
        new webpack.NamedChunksPlugin()
        ],
    performance : {
      hints : false
    }
 });