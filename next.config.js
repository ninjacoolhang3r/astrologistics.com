module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Important: return the modified config
      config.node = {
        fs: 'empty'
      }
      return config
    },
  }