const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    library: 'Milingo',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new webpack.IgnorePlugin({ resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/ }),
    new ForkTsCheckerWebpackPlugin(),
    new ESLintPlugin({
      cache: true,
      fix: true,
      formatter: 'codeframe',
      ignore: false,
    })
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/react'],
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('autoprefixer')],
                sourceMap: true,
              },
            },
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                includePaths: [
                  './node_modules',
                ],
              },
            }
          },
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: false
        }
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|mp3)$/,
        loader: 'url-loader',
        options: {
          limit: 3000,
        },
      },
    ],
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'react-modal': 'react-modal',
    'moment': 'moment',
    'moment-jalaali': 'moment-jalaali'
  },
  stats: "minimal"
};

if (process.env.BUNDLE_ANALYZE === 'TRUE') {
  module.exports.plugins.push(new BundleAnalyzerPlugin.BundleAnalyzerPlugin());
}
