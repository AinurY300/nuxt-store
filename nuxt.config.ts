export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],

  
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
