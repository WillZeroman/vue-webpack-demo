import Vue from 'vue'
import Router from 'vue-router'

import App from './components/Hello.vue'


// install router
Vue.use(Router)

// routing
var router = new Router()

router.map({
  
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

/*router.redirect({
  '*': '/news/1'
})*/

router.start(App, '#app')
