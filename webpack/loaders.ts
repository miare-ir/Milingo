import * as path from 'path';
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

const staticFilesLoader = {
  include: path.resolve('./src'),
  test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|mp3)$/,
  loader: 'url-loader',
  options: {
    context: './src',
    name: `assets/[path][name].__cache__.[hash].[ext]`,
    limit: 3000,
  },
};

const istanbulInstrumenter: Rule = {
  test: /^(.(?!\.test))*\.tsx?$/,
  loader: 'istanbul-instrumenter-loader',
  query: {
    embedSource: true,
  },
};

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
            return isProduction() ? [autoprefixer] : [];
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
          return [autoprefixer];
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
  staticFilesLoader,
  scss,
  tsx,
  webmanifest,
};
