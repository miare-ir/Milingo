import * as path from 'path';
import * as autoprefixer from 'autoprefixer';

const tsx = {
  test: /\.tsx?$/,
  use: 'awesome-typescript-loader',
  exclude: /node_modules/,
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

const scss = {
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

export default {
  staticFilesLoader,
  scss,
  tsx,
};
