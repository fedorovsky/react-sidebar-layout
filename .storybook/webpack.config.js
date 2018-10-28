const path = require('path');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [ {
          loader: 'eslint-loader',
        }],
        include: path.resolve(__dirname, '../src')
      },
    ],
  },
};
