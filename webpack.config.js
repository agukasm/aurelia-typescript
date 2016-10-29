var AureliaWebPackPlugin = require('aurelia-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var HtmlWebPackPlugin = require('html-webpack-plugin');

const srcDir = path.resolve('src');
const outDir = path.resolve('dist');

module.exports = {
  entry: {
    'app': [/* this array will be filled by the aurelia-webpack-plugin */],
    'aurelia': ['aurelia-bootstrapper-webpack']
  },
  output: {
    path: outDir,
    filename: 'scripts/[name].bundle.js',
    sourceMapFilename: 'scripts/[name].bundle.js.map'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  devtool: "source-map",
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader', include: srcDir },
      { test: /\.html$/, loader: 'html', include: srcDir }
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