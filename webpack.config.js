const path = require('path');

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';
  const isDev = mode === 'development';

  return {
    mode,
    entry: './js/index.js',
    output: {
      filename: 'un-sdg.js',
      path: isDev ? path.resolve(__dirname, '.next/static') : path.resolve(__dirname, 'out/static'),
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
      }
    }
  };
};
