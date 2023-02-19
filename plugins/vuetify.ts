import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components: components,
    directives: directives,
    ssr: true,

    defaults: {
      VBtn: {
        rounded: '2'
      },
      VCard: {
        elevation: 0,
        rounded: 'lg'
      }
    },

    theme: {
      themes: {
        light: {
          colors: {
            'primary': '#000'
          }
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})