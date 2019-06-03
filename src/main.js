import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import VueResource from 'vue-resource'
import store from './store'
import Vuelidate from 'vuelidate'
import VueJWT from 'vuejs-jwt'

Vue.use(VueJWT)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
    store,
    router
}).$mount('#app')
