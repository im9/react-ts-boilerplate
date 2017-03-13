var path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
  entry: "./src/js/Index.tsx",
  output: {
    filename: './dist/bundle.js'
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [{
        loader: "ts-loader"
      }]
    }]
  },
  // Configuration for dev server
  devServer: {
    contentBase: __dirname + '/',
    port: 9000
  }
}, {
  context: path.join(__dirname, 'src/style'),
  entry: {
    style: './main.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].css'
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
    }]
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
}];