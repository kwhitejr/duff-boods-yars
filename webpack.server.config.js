const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './server/server.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'backend.js',
  },
  externals: nodeModules,
};
