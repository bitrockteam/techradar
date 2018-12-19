'use strict';

const webpack = require('webpack');
const path = require('path');
const args = require('yargs').argv;

const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = args.prod;

const plugins = [  
  new HtmlWebpackPlugin({
    template: './src/index.html',
    chunks: ['main'],
    // inject: 'body'
  }),
];

module.exports = {
  entry: {
    main: './src/site.js',
    common: './src/common.js'
  },
  
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },

  mode: isProd ? 'production' : 'development',

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },

  module: {
    rules: [
      { 
        test: /\.scss$/, 
        exclude: /node_modules/, 
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      { 
        test: /\.(png|jpg|ico)$/, 
        exclude: /node_modules/, 
        use: ['file-loader?name=images/[name].[ext]&context=./src/images'] 
      }
    ]
  },

  plugins: plugins,

  devtool: 'source-map',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    hot: true,
    historyApiFallback: true
  }
};

