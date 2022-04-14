import Vue from 'vue'

import App from './App.vue'
import router from './router'
import i18n from './i18n'


// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faHeart, faFilePdf, faHouseChimney, faArrowDownWideShort, faGraduationCap, faShield } from '@fortawesome/free-solid-svg-icons'
// import { faVuejs, faGithub, faGithubAlt, faPython, faJava, faPhp, faSass, faJsSquare, faHtml5, faCss3Alt, faWindows, faLinux, faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// library.add(faHeart, faHouseChimney, faFilePdf, faArrowDownWideShort, faVuejs, faGraduationCap, faShield, faGithub, faGithubAlt, faPhp, faSass, faPython, faJava, faJsSquare, faHtml5, faCss3Alt, faWindows, faLinux, faDiscord, faLinkedin)


// Vue.config.productionTip = false

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {

  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = 'en'
  }

  // set the current language for i18n.
  i18n.locale = language
  next()
})



new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
