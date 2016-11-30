const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const baseConfig = require('./webpack.config.base');

// PostCSS
const stylelint = require('stylelint');
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const cssnext = require('postcss-cssnext');
const postcssReporter = require('postcss-reporter');

const config = merge(baseConfig, {
  devtool: 'eval',

  entry: './client/index',

  output: {
    publicPath: '/',
  },

  devServer: {
    hot: true,
    inline: true,
    // progress: true, // not sure what this did, causes errors now
    contentBase: './dist',
    stats: { colors: true },
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: (webpackInstance) => [
          stylelint,
          postcssImport({
            addDependencyTo: webpackInstance,
            path: ['./client'],
          }),
          postcssNested,
          cssnext({ browsers: ['last 2 versions', 'IE > 10'] }),
          postcssReporter({ clearMessages: true }),
        ],
        context: __dirname,
      },
      debug: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      favicon: 'client/assets/favicon.ico',
      inject: true,
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEV__: true,
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new DashboardPlugin(),
  ],
});

module.exports = config;
