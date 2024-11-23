const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: true, // Enable hot module replacement
    port: 3000, // Specify the port you want to use
  },
};