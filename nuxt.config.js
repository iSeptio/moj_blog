module.exports = {
  modules: [
    ['storyblok-nuxt', {accessToken: 'nFn1VQy0r8azr47fxP4EFQtt', cacheProvider: 'memory'}]
  ],
  plugins: [
    '~/plugins/components',
    '~/plugins/filters'
  ],
  router: {
    middleware: 'languageDetection'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'mywebsite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Zilla+Slab:400,700' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/foundation-sites@6.5.1/dist/css/foundation.min.css', integrity: 'sha256-WUKHnLrIrx8dew//IpSEmPN/NT3DGAEmIePQYIEJLLs= sha384-53StQWuVbn6figscdDC3xV00aYCPEz3srBdV/QGSXw3f19og3Tq2wTRe0vJqRTEO sha512-X9O+2f1ty1rzBJOC8AXBnuNUdyJg0m8xMKmbt9I3Vu/UOWmSg5zG+dtnje4wAZrKtkopz/PEDClHZ1LXx5IeOw==', crossorigin: 'anonymous' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'},
    ],
    script: [
      {src: 'https://cdn.jsdelivr.net/npm/foundation-sites@6.5.1/dist/js/foundation.min.js', integrity: 'sha256-1mcRjtAxlSjp6XJBgrBeeCORfBp/ppyX4tsvpQVCcpA= sha384-b5S5X654rX3Wo6z5/hnQ4GBmKuIJKMPwrJXn52ypjztlnDK2w9+9hSMBz/asy9Gw sha512-M1VveR2JGzpgWHb0elGqPTltHK3xbvu3Brgjfg4cg5ZNtyyApxw/45yHYsZ/rCVbfoO5MSZxB241wWq642jLtA==', crossorigin: 'anonymous'},
      {src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'},
      {src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'},
      
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */

  }
}
