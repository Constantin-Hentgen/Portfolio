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



const messages = {
	en: {
		message: {
			hello: "hello world"
		}
	},
	fr: {
		message: {
			hello: "bonjour monde"
		}
	}
}



const i18n = createI18n({
	locale: 'en', // set locale
  fallbackLocale: 'fr', // set fallback locale
  messages, // set locale messages
})


const app = createApp(App)

app.component('fa', FontAwesomeIcon)

app.use(i18n)
app.use(router)

app.mount('#app')


