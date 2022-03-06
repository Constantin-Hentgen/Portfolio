import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faVuejs, faGithub, faGithubAlt, faPython, faJava, faJsSquare, faHtml5, faCss3Alt, faWindows, faLinux, faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faHeart, faVuejs, faGithub, faGithubAlt, faPython, faJava, faJsSquare, faHtml5, faCss3Alt, faWindows, faLinux, faDiscord, faLinkedin)

const app = createApp(App)

app.component('fa', FontAwesomeIcon)

app.use(router)

app.mount('#app')


