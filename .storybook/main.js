// This file has been added to house our webpack config for storybook in dev mode.
// It's name & boilerplate has been taken from this example:
// https://storybook.js.org/docs/configurations/custom-webpack-config/#examples

module.exports = {
  managerWebpack: async (config, options) => {
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

    config.module.rules = loaders.concat(config.module.rules)
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
  addons: [
    '@storybook/preset-create-react-app'
  ],
};
