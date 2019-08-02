import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'

import router from '@/router'
import store from '@/store'
import i18n from '@/i18n'

import '@/styles/index.scss'

import Mock from './mock'

Mock.bootstrap()

// global filters
import * as filters from './filters' // global filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

Vue.router = router

new Vue({
  i18n,
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
