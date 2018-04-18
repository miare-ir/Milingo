const autoprefixer = require('autoprefixer');
const path = require('path');

const loaders = {
  staticFilesLoader: {
    include: path.resolve('./src'),
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|mp3)$/,
    loader: 'url-loader',
    options: {
      context: './src',
      name: `assets/[path][name].__cache__.[hash].[ext]`,
      limit: 3000,
    },
  },
  scss: {
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
  },
};

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("awesome-typescript-loader")
  });
  config.module.rules.push(loaders.scss);
  config.module.rules.push(loaders.staticFilesLoader);
  config.resolve.extensions.push('.scss', '.ts', '.tsx');

  return config;
};
