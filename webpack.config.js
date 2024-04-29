const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'client')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env', 'stage-2']
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?url=false',
          'sass-loader?url=false'
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash].[ext]',
          },
        },
      },
    ]
  }
};