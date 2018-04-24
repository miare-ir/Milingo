const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.output.publicPath = 'http://localhost:9001/';

  const loaders = [{
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
          plugins: [require('autoprefixer')],
          sourceMap: true,
        },
      },
      {
        loader: 'sass-loader', options: {
          includePaths: ['./node_modules'],
        },
      },
    ],
  }, {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    loader: 'awesome-typescript-loader'
  }];
  defaultConfig.module.rules = loaders.concat(defaultConfig.module.rules)
  defaultConfig.resolve.extensions.push('.ts', '.tsx');

  return defaultConfig;
};
