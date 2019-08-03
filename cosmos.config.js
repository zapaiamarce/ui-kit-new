// cosmos.config.js
module.exports = {
  publicPath: 'static',
  publicUrl: '/static/',
  webpack: (config, { env }) => {
    // Return customized config

    const newConfig = {
      ...config,
      resolve:{
        extensions: config.resolve.extensions.concat([".ts",".tsx"])
      },
      plugins: config.plugins.filter(
        p => !p.constructor || p.constructor.name !== 'OfflinePlugin'
      )
    };
    
    newConfig.module.rules.forEach(r=>{
      r.test = /\.(t|j)sx?$/
    })

    // console.log(newConfig)

    return newConfig;
  }
};