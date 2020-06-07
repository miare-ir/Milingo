// This file has been added to house our webpack config for storybook in dev mode.
// It's name & boilerplate has been taken from this example:
// https://storybook.js.org/docs/configurations/custom-webpack-config/#using-your-existing-config

const OurConfig = require('../webpack.config.js');

module.exports = {
  webpackFinal: async (defaultConfig, options) => {
    return {
      ...defaultConfig,
      resolve: OurConfig.resolve,
      plugins: defaultConfig.plugins.concat(OurConfig.plugins),
      stats: {
        ...defaultConfig.stats,
        children: false
      },
      module: {
        ...defaultConfig.module,
        rules: defaultConfig.module.rules
      }
    }
  },
  addons: [
    '@storybook/preset-create-react-app'
  ],
  stories: ['../src/components/**/*.stories.tsx']
};
