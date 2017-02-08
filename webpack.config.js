const path = require('path')

module.exports = {
  watch: true,
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'react', 'es2015' ]
        }
      }
    ]
  }
}
