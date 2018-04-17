import * as path from 'path';
import { pickBy } from 'lodash';

require('dotenv').config();

import loaders from './webpack/loaders';
import plugins from './webpack/plugins';
import {
  isProduction,
  isDevelopment,
  isTesting,
  getEntries,
} from './webpack/util';

if (isDevelopment() && process.env.MOCK_SERVER_PORT) {
  require('./server/server.js');
}

const devModeMiddlewares = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:9000',
  'webpack/hot/only-dev-server',
];
const realtimeEntries: string[] = isDevelopment() ? devModeMiddlewares : [];

// Use external source map in production builds
const devtool: string = isProduction() ?
  'cheap-module-source-map' : 'cheap-module-eval-source-map';

// Filter entries using the `ENTRIES` env variable
const defaultEntries = {
  area_manager:
  [...realtimeEntries, './realtime/area_manager_app/index.tsx'],
  driver:
    [...realtimeEntries, './realtime/driver_app/index.tsx'],
  courier_management:
    [...realtimeEntries, './realtime/courier_management_app/index.tsx'],
  overview:
    [...realtimeEntries, './realtime/overview_app/index.tsx'],
  restaurant:
    [...realtimeEntries, './realtime/restaurant_app/index.tsx'],
  trip_watching:
    [...realtimeEntries, './realtime/trip_watching_app/index.tsx'],
  recruitment:
    [...realtimeEntries, './realtime/recruitment_app/index.tsx'],
};

const entries = getEntries().length === 0 ?
  defaultEntries :
  pickBy(defaultEntries, (value, key) => getEntries().indexOf(key) > -1);

const webpackConfig = {
  devtool,
  entry: isTesting() ? {} : entries,
  output: isTesting() ? {} : {
    path: path.join(__dirname, 'dist'),
    publicPath: isProduction() ? '/p/' : '/',
    filename: isProduction() ?
      '[name]/[name].__cache__.[chunkhash].js' :
      '[name]/[name].dev.js',
    chunkFilename: isProduction() ?
      '[name]/[name].__cache__.[chunkhash].js' :
      '[name]/[name].dev.js',
    sourceMapFilename: '[file].map',
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.json',
      '.js',
      '.webpack.js',
      '.svg',
      '.css',
      '.sass',
      '.scss',
      '.ttf',
      '.woff',
      '.woff2',
      '.eot',
      '.less',
      '.png',
      '.jpg',
      '.hbs',
      '.webmanifest',
    ],
    modules: [
      path.join(__dirname, 'realtime'),
      'node_modules',
    ],
  },
  module: {
    rules: [
      loaders.js,
      loaders.css,
      loaders.less,
      ...loaders.realtimeStaticFiles,
      loaders.html,
      loaders.json,
      loaders.tsx,
      loaders.scss,
      loaders.webmanifest,
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: {
      index: '/',
      rewrites: [
        { from: /\/courier_management/, to: '/courier_management' },
        { from: /\/driver/, to: '/driver' },
        { from: /\/trip_watching/, to: '/trip_watching' },
        { from: /\/overview/, to: '/overview' },
        { from: /\/restaurant/, to: '/restaurant' },
        { from: /\/recruitment/, to: '/recruitment' },
        { from: /\/area_manager/, to: '/area_manager' },
      ],
    },
    port: 9000,
    host: process.env.HOST || '127.0.0.1',
    headers: { 'Access-Control-Allow-Origin': '*' },
    hot: true,
  },
  plugins: plugins,
  node: {
    fs: 'empty',
  },
};

export default webpackConfig;
