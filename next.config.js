const withTM = require('next-transpile-modules')(['three']);

module.exports = withTM({
  images: {
    domains: ['nongquanong.sfo3.cdn.digitaloceanspaces.com']
  },
  react: {
    useSuspense: false,
    wait: true
  }
})
