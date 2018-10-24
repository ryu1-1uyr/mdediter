var webpack = require('webpack')

module.exports = {
  entry: './js/src/app.js',
  output: {
    path: "js",
    publicPath: 'js',
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.s[a|c]ss$/,
        loader: 'style!css!sass'
      }
    ]
  },
  devtool: 'source-map',
  vue: {
    loaders: {
      scss: 'style!css!sass'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
