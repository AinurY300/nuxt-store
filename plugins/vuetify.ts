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
      },
      VCheckbox: {
        falseIcon: 'mdi-checkbox-blank',
        density: 'compact',
        hideDetails: true
      }
    },

    theme: {
      // defaultTheme: 'dark',
      themes: {
        light: {
          colors: {
            'primary': '#000',
            'background': '#F2F2F2'
          }
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})