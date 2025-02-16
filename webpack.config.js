const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); 

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({ 

  template: './file/index.html', 

  filename: 'index.html', 

  inject: 'body'

}) 

module.exports = {
  mode:'development',
  entry: './file/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig] 
}