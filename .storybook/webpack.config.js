require('ts-node/register');
const path = require('path');
const config = require('../webpack.config').default;
const loaders = require('../webpack/loaders').default;
const plugins = require('../webpack/plugins').default;

const projectRoot = path.resolve(__dirname, '../');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules', projectRoot],
  },
  module: {
    rules: [loaders.tsx, loaders.scss, loaders.realtimeStaticFilesLoader('miare_dls')],
  },
};
