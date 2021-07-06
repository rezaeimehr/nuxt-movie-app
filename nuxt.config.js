export default {
  target: 'static',
  ssr: false,
  generate: {
    fallback: true
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Movie App',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Playing with Nuxt.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    '~/plugins/vue-moment',
    '~/plugins/infinite-loading',
    '~/plugins/vue-debounce',
    '~/plugins/vue-spinner',
    { ssr: false, src: '~plugins/once' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxt/image'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  loading: {
    color: 'rgba(245, 158, 11, var(--tw-text-opacity))',
    height: '5px',
    throttle: 0
  },

  publicRuntimeConfig: {
    baseImageURL: 'https://image.tmdb.org',
    defaultBaseImageURL: 'https://ui-avatars.com',
  }
}
