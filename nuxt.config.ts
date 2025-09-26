// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/icon', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
  ssr: false,
  ui: {
    theme: {
      colors: [
        'primary',
        'secondary',
        'accent',
        'neutral',

        'info',
        'success',
        'warning',
        'error',
      ]
    }
  },
  icon: {
    customCollections: [
      {
        prefix: 'lydflor',
        dir: './app/assets/icons'
      },
    ],
  },
})