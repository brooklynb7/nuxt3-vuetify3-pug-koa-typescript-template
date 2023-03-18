// https://vuetifyjs.com/en/features/treeshaking/
import vuetify from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  srcDir: './client/',
  app: {
    baseURL: process.env.BASE_PATH
  },
  css: ['vuetify/styles'],
  vite: {
    ssr: {
      noExternal: ['vuetify']
    }
  },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => config.plugins.push(vuetify()))
    }
  ]
})
