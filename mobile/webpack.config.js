const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = async (env, argv) => {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // const config = await createExpoWebpackConfigAsync(
  //   { ...env, offline: false },
  //   argv
  // );
  if (env.mode === 'production') {
    if (config['plugins']) {
      config['plugins'].forEach((plugin) => {
        // detect workbox plugin
        if (
          plugin['config'] &&
          plugin['config']['swDest'] === 'service-worker.js'
        ) {
          // tell it never to cache index.html or service-worker.js
          plugin['config']['exclude'].push(/index.html/);
          plugin['config']['exclude'].push(/service-worker.js/);

          // (optional) tell it to start new service worker versions immediately, even if tabs
          // are still running the old one.
          plugin['config']['skipWaiting'] = true;
        }
      });
    }
  }

  // Optionally you can enable the bundle size report.
  // It's best to do this only with production builds because it will add noticeably more time to your builds and reloads.
  // if (env.mode === 'production') {
  //   config.plugins.push(
  //     new BundleAnalyzerPlugin({
  //       path: 'web-report',
  //     })
  //   );
  // }

  return config;
};
