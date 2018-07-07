const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

const PORT_NUMBER = 8080;
const TARGET_ENTRY = `http://localhost:${PORT_NUMBER}/`;

new WebpackDevServer(webpack(config), {
  contentBase: 'public',
  hot: true,
  host: '0.0.0.0',
  disableHostCheck: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    modules: false,
    children: false,
    timings: true,
    publicPath: true,
    version: true,
    builtAt: false,
    entrypoints: false,
    hash: false,
  },
}).listen(PORT_NUMBER, '0.0.0.0', err => {
  if (err) {
    console.log(err);
  }
  console.log(`Listening at localhost:${PORT_NUMBER}`);
  open(TARGET_ENTRY);
});
