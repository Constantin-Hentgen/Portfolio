import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { createI18n } from 'vue-i18n'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)



function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key).default
    }
  })
  return messages
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  // locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  // fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
	locale: "en",
	fallbackLocale:"en",
  messages: loadLocaleMessages()
})



const app = createApp(App)

app.component('fa', FontAwesomeIcon)

app.use(i18n)
app.use(router)

app.mount('#app')


