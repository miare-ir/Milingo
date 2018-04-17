import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import { CheckerPlugin } from 'awesome-typescript-loader';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as ParallelUglifyPlugin from 'webpack-parallel-uglify-plugin';

import {
  isProduction,
  isDevelopment,
  isTesting,
  getGoogleMapsKey,
  getApiUrl,
  getDjangoUrl,
  getWebSocketUrl,
} from './util';

const makeHtmlPlugin = (name: string) => {
  return new HtmlWebpackPlugin({
    template: `./realtime/${name}_app/index.html`,
    inject: 'body',
    chunks: [name, `vendor-${name}`],
    hash: false,
    chunksSortMode: 'dependency',
    filename: `${name}/index.html`,
  });
};

const makeCommonChunkPlugin = (name: string) =>
  new webpack.optimize.CommonsChunkPlugin({
    name: `vendor-${name}`,
    chunks: [name],
    filename: `${name}/${name}.vendor.__cache__.[chunkhash].js`,
    minChunks(module, count) {
      if (module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
        return false;
      }

      const { context } = module;

      return context && context.indexOf('node_modules') >= 0;
    },
  });

const basePlugins = [
  // Define global configuration variables from env
  new webpack.DefinePlugin({
    __DEV__: isDevelopment(),
    __TEST__: isTesting(),
    __PROD__: isProduction(),
    __GOOGLE__MAPS__KEY__: getGoogleMapsKey(),
    __API__URL__: getApiUrl(),
    __WEBSOCKET__URL__: getWebSocketUrl(),
    __DJANGO__URL__: getDjangoUrl(),
    __SENTRY__DSN__: {
      OVERVIEW: JSON.stringify(process.env.SENTRY_DSN_OVERVIEW),
      TRIPWATCHING: JSON.stringify(process.env.SENTRY_DSN_TRIPWATCHING),
      ACCOUNTING: JSON.stringify(process.env.SENTRY_DSN_ACCOUNTING),
      RESTAURANT: JSON.stringify(process.env.SENTRY_DSN_RESTAURANT),
    },
    __UNIVERSAL__ANALYITICS__: {
      RESTAURANT: JSON.stringify(process.env.UA_RESTAURANT) ||
        `'UA-101052645-5'`,
      TRIPWATCHING: JSON.stringify(process.env.UA_TRIPWATCHING) ||
        `'UA-101052645-6'`,
      DRIVER: JSON.stringify(process.env.UA_DRIVER) || `'UA-101052645-7'`,
    },
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  // Generate HTML file for realtime entries
  makeHtmlPlugin('area_manager'),
  makeHtmlPlugin('driver'),
  makeHtmlPlugin('courier_management'),
  makeHtmlPlugin('overview'),
  makeHtmlPlugin('restaurant'),
  makeHtmlPlugin('trip_watching'),
  makeHtmlPlugin('recruitment'),
  // Redirect index to restaurant's page
  new HtmlWebpackPlugin({
    template: './realtime/restaurant_app/redirector.html',
    chunks: [],
    filename: 'index.html',
  }),
  // Extract CSS in
  new ExtractTextPlugin({
    filename: '[name]/styles.__cache__.[contenthash].css',
    disable: !isProduction(),
  }),
  // Omit webpack errors
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.LoaderOptionsPlugin({
    debug: false,
  }),
];

const plugins = [...basePlugins];

if (isDevelopment()) {
  // Requried for typescript builds
  plugins.push(new CheckerPlugin());
}

if (isTesting()) {
  plugins.push(new webpack.SourceMapDevToolPlugin({
    filename: null,
    test: /\.tsx?$/,
  }));
}

if (isProduction()) {
  plugins.push(makeCommonChunkPlugin('area_manager'));
  plugins.push(makeCommonChunkPlugin('driver'));
  plugins.push(makeCommonChunkPlugin('courier_management'));
  plugins.push(makeCommonChunkPlugin('overview'));
  plugins.push(makeCommonChunkPlugin('restaurant'));
  plugins.push(makeCommonChunkPlugin('trip_watching'));
  plugins.push(makeCommonChunkPlugin('area_manager'));
  plugins.push(makeCommonChunkPlugin('recruitment'));
  plugins.push(new ParallelUglifyPlugin({
    cacheDir: '.cache-uglify',
    workerCount: 4,
  }));
}

export default plugins;
