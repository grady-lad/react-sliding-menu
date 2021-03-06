var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:8080",
    'webpack/hot/only-dev-server',
    './examples/index'
  ],
  devServer: {
    contentBase: './examples/'
  },
  devtool: "eval",
  debug: true,
  output: {
    path: path.join(__dirname, 'examples'),
    filename: 'bundle.js',
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/un~$/)
  ],
  module: {
    loaders: [
      { test: /\.css$/, loaders: ['style', 'css']},
      { test: /\.js$/, loaders: [ 'babel' ], exclude: /node_modules/, include: __dirname}
    ]
  }
};
