const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {} // We're never in "production server" phase when in development mode
    : !process.env.NOW_REGION
      ? require('next/constants') // Get values from `next` package when building locally
      : require('next-server/constants'); // Get values from `next-server` package when building on now v2

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {};
  }

  /* eslint-disable */
  const withLess = require('@zeit/next-less')
  const lessToJS = require('less-vars-to-js')
  const fs = require('fs')
  const path = require('path')

  // Where your antd-custom.less file lives
  const themeVariables = lessToJS(
    fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
  )

  // fix: prevents error when .less files are required by node
  if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => {}
  }

  return withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables // make your antd custom effective
    }
  })
};

