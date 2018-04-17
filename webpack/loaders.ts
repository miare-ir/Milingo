import { Rule } from 'webpack';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as autoprefixer from 'autoprefixer';

import { isTesting, isProduction } from './util';

const tsx: Rule = {
  test: /\.tsx?$/,
  use: 'awesome-typescript-loader',
  exclude: /node_modules/,
};

const html: Rule = {
  test: /\.html$/,
  loader: 'html-loader',
  exclude: /node_modules/,
  options: {
    attrs: ['img:src', 'img:ng-src', 'img:md-svg-src', 'md-icon:md-svg-src'],
    interpolate: 'require',
  },
};

const json: Rule = {
  test: /\.json$/,
  loader: 'json-loader',
};

const webmanifest: Rule = {
  test: /\.webmanifest$/,
  include: /realtime\//,
  use: [
    'file-loader?name=[name]/manifest.json',
    'webmanifest-loader',
  ],
};

const realtimeStaticFilesLoader = (name: string): Rule => {
  let output = name.replace('_app', '');
  if (output === name) {
    output = `assets/${output}`;
  }

  return {
    include: new RegExp(`realtime/${name}`),
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|mp3)$/,
    loader: 'url-loader',
    options: {
      context: `./realtime/${name}`,
      name: `${output}/[path][name].__cache__.[hash].[ext]`,
      limit: 3000,
    },
  };
};

const realtimeStaticFiles: Rule[] = [
  realtimeStaticFilesLoader('area_manager_app'),
  realtimeStaticFilesLoader('driver_app'),
  realtimeStaticFilesLoader('courier_management_app'),
  realtimeStaticFilesLoader('overview_app'),
  realtimeStaticFilesLoader('trip_watching_app'),
  realtimeStaticFilesLoader('restaurant_app'),
  realtimeStaticFilesLoader('common'),
  realtimeStaticFilesLoader('recruitment_app'),
];

const istanbulInstrumenter: Rule = {
  test: /^(.(?!\.test))*\.tsx?$/,
  loader: 'istanbul-instrumenter-loader',
  query: {
    embedSource: true,
  },
};

const postcssPlugins = [
  require('./postcss/strict-height.js'),
  require('./postcss/strict-width.js'),
];

const css: Rule = {
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => {
            return isProduction() ?
              [autoprefixer, ...postcssPlugins] : [...postcssPlugins];
          },
          sourceMap: true,
        },
      },
    ],
  }),
};

const scss: Rule = {
  test: /\.scss$/,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'resolve-url-loader',
      options: {
        debug: false,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: () => {
          return [autoprefixer, ...postcssPlugins];
        },
        sourceMap: true,
      },
    },
    {
      loader: 'sass-loader', options: {
        includePaths: ['./node_modules', './node_modules/grommet/node_modules'],
      },
    },
  ],
};

const js: Rule = {
  test: /\.js$/,
  use: [
    'ng-annotate-loader',
    {
      loader: 'babel-loader',
      query: {
        cacheDirectory: true,
      },
    },
  ],
  exclude: /node_modules/,
};

const less: Rule = {
  test: /\.less$/,
  use: isTesting() ?
    'null' : ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => {
              return (isProduction() ? [autoprefixer] : []);
            },
            sourceMap: true,
          },
        },
        {
          loader: 'less-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
    }),
};

export default {
  css,
  html,
  istanbulInstrumenter,
  js,
  json,
  less,
  realtimeStaticFilesLoader,
  realtimeStaticFiles,
  scss,
  tsx,
  webmanifest,
};
