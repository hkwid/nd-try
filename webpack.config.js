path = require('path');
webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('./public/dist/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader : 'babel',
        exclude: /node_modules/
      },
      {
        test: /.css$/,
        loader: 'style!css'
      }
    ]
  }
}
