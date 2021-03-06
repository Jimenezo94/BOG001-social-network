const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
   path: __dirname + '/dist',/*ruta abosoula __dirname */
   filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader','css-loader'],
      },

      {
      test: /\.html$/i,
      loader: 'html-loader',
      },
      {
        test: /\.(png| jpe?g|gif)$/i,
        use : [
          {
            loader : 'file-loader',
          },
        ]
      },
    ],
   },
 plugins: [
  new  HTMLWebpackPlugin({
  template: './src/index.html',
  }),
],
 };
