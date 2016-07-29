var path = require('path');
var webpack = require('webpack');


var isProduction = !!(process.argv.filter(function(a) { return a === '-p';})).length;

var plugins = [];

if (isProduction) {
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }));
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }));
}

var APP_DIR = path.resolve(__dirname, 'app');
var OUT_DIR = path.resolve(__dirname, 'public');


module.exports = {
  entry: APP_DIR + '/main',
  output: {
    path: OUT_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map',
  plugins: plugins
};
