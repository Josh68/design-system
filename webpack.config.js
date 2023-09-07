const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const { ProvidePlugin } = require('webpack');

const nodeModules = path.resolve(__dirname, 'node_modules');

/**
 *
 * @param bool preact - whether to use preact instead of react
 * @param bool webComponents - whether we're targeting web components
 * @returns
 */
function generateWebpackConfig({ preact = false, webComponents = false }) {
  const plugins = [];
  let externals = {};
  let resolve = {};
  let bundleName;

  if (!webComponents) {
    // If we're not bundling these as web components, don't include the react
    // or preact runtimes in our bundle because our customers need to interact
    // with the framework directly in order to use our components, and we don't
    // expose it in our code for them to do so. They should instead load the
    // framework modules before loading our bundle.
    externals = preact
      ? {
          preact: 'preact',
        }
      : {
          react: 'React',
          'react-dom': 'ReactDOM',
        };

    plugins.push(
      new CopyPlugin({
        patterns: preact
          ? [
              `${nodeModules}/preact/dist/preact.min.umd.js`,
              `${nodeModules}/preact/dist/preact.umd.js`,
              `${nodeModules}/preact/dist/preact.umd.js.map`,
            ]
          : [
              `${nodeModules}/react/umd/react.production.min.js`,
              `${nodeModules}/react-dom/umd/react-dom.production.min.js`,
            ],
      })
    );
  }

  if (preact) {
    // If we're using preact, we need to replace resolve references to react
    // to their preact equivalents.
    resolve = {
      alias: {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
        'react/jsx-runtime': 'preact/jsx-runtime',
      },
    };

    // And we also need to provide values for these global Preact functions
    plugins.push(
      new ProvidePlugin({
        h: ['preact', 'h'],
        Fragment: ['preact', 'Fragment'],
      })
    );
  }

  if (!preact) {
    bundleName = 'react-components.js';
  } else if (!webComponents) {
    bundleName = 'preact-components.js';
  } else {
    bundleName = 'web-components.js';
  }

  return {
    target: 'node',
    experiments: {
      outputModule: true,
    },
    output: {
      // filename: bundleName,
      // Expose all the index file's exports as a "DesignSystem" global object
      library: {
        // name: 'DesignSystem',
        type: 'module',
      },
      chunkFormat: 'module',
    },
    mode: process.env.NODE_ENV || 'production',
    devtool: 'source-map',
    plugins,
    resolve,
    externals,
    optimization: {
      splitChunks: {
        chunks: 'initial',
        minSize: 20000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\\/]node_modules[\\\/]@react-(aria|stately|types)/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
      // splitChunks: {
      //   cacheGroups: {
      //     commons: {
      //       test: /[\\/]node_modules[\\/]/,
      //       // cacheGroupKey here is `commons` as the key of the cacheGroup
      //       name(module, chunks, cacheGroupKey) {
      //         const moduleFileName = module
      //           .identifier()
      //           .split('/')
      //           .reduceRight((item) => item);
      //         const allChunksNames = chunks.map((item) => item.name).join('~');
      //         return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
      //       },
      //       chunks: 'all',
      //     },
      //   },
      // },
    },
  };
}

module.exports = generateWebpackConfig;
