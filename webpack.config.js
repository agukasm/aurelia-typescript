var AureliaWebPackPlugin = require('aurelia-webpack-plugin');
var webpack = require('webpack');
var HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'app': [],
    'aurelia': ['aurelia-bootstrapper-webpack']
  },
  output: {
    path: './dist',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].bundle.js.map'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader', exclude: /(node_modules)/ },
      { test: /\.html$/, loader: 'html', exclude: /(node_modules)/ }
    ]
  },
  plugins: [
      new AureliaWebPackPlugin(),
      // To minimize your scripts (and your css, if you use the css-loader)
      //new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({ name: ['aurelia'] }),
      new HtmlWebPackPlugin({
        template: 'index.html',
        chunkSortMode: 'dependency'
      })
  ],
  devServer: {
    port: 3333
  }
};