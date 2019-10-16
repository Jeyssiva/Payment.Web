
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./index.html",
  filename: "./index.html"
});

module.exports = {

  // entry: "./src/app.js",
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        // Preprocess our own .scss files
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'] 
      }
      // {
      //   test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
      //   use: 'file-loader'
      // },
      // {
      //   test: /\.(jpg|png|gif)$/,
      //   use: 'file-loader'
      // },
      // {
      //   test: /\.html$/,
      //   use: 'html-loader'
      // },
      // {
      //   test: /\.(mp4|webm)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 10000
      //     }
      //   }
      // }
    ]
  },
  plugins: [htmlPlugin]
};