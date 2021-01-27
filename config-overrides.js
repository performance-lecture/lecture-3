const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = function override(config, env) {
  config.plugins.push(new PreloadWebpackPlugin({
    rel: 'preload',
    as: 'font',
    include: 'allAssets',
    fileWhitelist: [/(.woff2?)/i]
  }));

  return config;
}