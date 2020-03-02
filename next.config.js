const glob = require('glob')

module.exports = {


  target: 'serverless',
  cssLoaderOptions: {
    url: false
  },
  webpack: (config, { isServer }) => {

    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    if (typeof require !== 'undefined') {
      require.extensions['.less'] = () => { }
      require.extensions['.css'] = file => { }
    }

    return config;
  }



};