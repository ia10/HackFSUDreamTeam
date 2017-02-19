var webpack = require('webpack');

module.exports = {
  entry: [
    './webapp/app.js'
  ],
  output: {
    filename: 'bundle.js',
    path: './dist/',
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [
      {
        test: /app\.html/,
        loaders: [
          "file-loader?name=[name].[ext]"
        ]
      },
      {
        test: /\.html$/,
        exclude: /app\.html/,
        loaders: [
          "html-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'ng-annotate-loader',
          'babel-loader?presets[]=es2015'
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
          'resolve-url-loader'
        ]
      },
      {
        test: /\.(jpg)$/,
        loaders: [
          'file-loader'
        ]
      },
      {
        test: /\.(gpg|txt)$/,
        loaders:[
          'file-loader?name=[name].[ext]'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      'sourceMap': true
    })
  ],
  devtool: 'source-map'
};
