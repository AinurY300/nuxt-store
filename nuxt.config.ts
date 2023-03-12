export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt', 
    'nuxt-swiper',
    'nuxt-typed-router',
    '@nuxtjs/supabase'
  ],

  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    serviceKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
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
