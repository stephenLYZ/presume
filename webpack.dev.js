const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = JSON.stringify(require('./config.js'))

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname,'/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
	      exclude: /node_modules/,
	      loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
    ],
  },
  resolve: {
    	extensions: ['', '.js','.jsx', '.scss']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('bundle.css')
  ]
}