const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, 'example/index.html'),
  filename: 'index.html',
});

module.exports = {
  mode: 'development',
  entry: './example/index.js',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' },
        ],
      },
      {
        test: /\.css$/,
        exclude: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'dist'),
        ],
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
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'dist'),
        ],
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
    open: true,
    // host: '0.0.0.0',
    // disableHostCheck: true,
    stats: {
      colors: true,
      modules: false,
      children: false,
    },
  },
  resolve: {
    alias: {
      'react-toggle-sidebar': path.resolve('src/index.js'),
      // 'react-toggle-sidebar': path.resolve('dist/index.js'),
      components: path.resolve('example/components'),
    },
  },
  plugins: [
    htmlWebpackPlugin,
  ],
};
