var AureliaWebPackPlugin = require('aurelia-webpack-plugin');
var Path = require('path');
var Webpack = require('webpack');
var HtmlWebPackPlugin = require('html-webpack-plugin');

const srcDir = Path.resolve('src');
const outDir = Path.resolve('dist');

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
      { test: /\.html$/, loader: 'html', include: srcDir },
      {
        test: /\.(png|jpe?g|gif|svg|eot|woff|woff2|ttf|css)(\?\S*)?$/,
        loader: 'url-loader?limit=100000&name=[name].[ext]'
      }
    ]
  },
  plugins: [
      new AureliaWebPackPlugin(),
      // To minimize your scripts (and your css, if you use the css-loader)
      //new webpack.optimize.UglifyJsPlugin(),
      new Webpack.optimize.CommonsChunkPlugin({ name: ['aurelia'] }),
      new HtmlWebPackPlugin({
        template: 'index.html',
        chunkSortMode: 'dependency'
      }),
      new Webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 3333,
    contentBase: "dist",
    hot: true,
    inline: true
  }
};