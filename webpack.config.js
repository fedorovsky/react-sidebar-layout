const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, 'example/index.html'),
  filename: 'index.html',
});

const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();

module.exports = {
  mode: 'development',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './example/index.js',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }],
      },
      {
        test: /\.css$/,
        exclude: [path.join(__dirname, 'src'), path.join(__dirname, 'dist')],
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[path]-[local]-[hash:base64:8]',
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        include: [path.join(__dirname, 'src'), path.join(__dirname, 'dist')],
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: './public',
    hot: true,
  },
  resolve: {
    alias: {
      'react-toggle-sidebar': path.resolve('src/index.js'),
      // 'react-toggle-sidebar': path.resolve('dist/index.js'),
      components: path.resolve('example/components'),
    },
  },
  plugins: [htmlWebpackPlugin, hotModuleReplacementPlugin],
};
