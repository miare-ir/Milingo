const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
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
  });

  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    loader: "awesome-typescript-loader"
  });
  defaultConfig.resolve.extensions.push(".ts", ".tsx");

  defaultConfig.module.rules.push({
    include: path.resolve(__dirname, "../src"),
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|mp3)$/,
    loader: 'url-loader'
  });

  return defaultConfig;
};
