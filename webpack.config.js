const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('./public/dist/'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js']
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
  },
  devtool: 'source-map'
};
