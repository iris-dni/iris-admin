const path = require('path');
const webpack = require('webpack');


const isProduction = !!(process.argv.filter(a => a === '-p')).length;

const plugins = [];

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

const APP_DIR = path.resolve(__dirname, 'app');
const OUT_DIR = path.resolve(__dirname, 'public');


module.exports = {
  entry: APP_DIR + '/main',
  output: {
    path: __dirname + '/public',
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
