export default defineNuxtConfig({
  modules: ['@pinia/nuxt', 'nuxt-swiper'],

  pinia: {
    autoImports: [
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  swiper: {
    styleLang: 'scss'
  },

  build: { transpile: ["vuetify"] },
	vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
    define: {
      "process.env.DEBUG": false,
    },
	},
  css: ['vuetify/lib/styles/main.sass', '@/assets/main.scss', '@mdi/font/css/materialdesignicons.min.css'],
})
