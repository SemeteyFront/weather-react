const path = require('path')

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    'path': path.resolve(__dirname, 'build'),
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          }
        ],
      },
      { test: /\.js?x$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}