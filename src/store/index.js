import Vue from 'vue'
import Vuex from 'vuex'
import access from './access'
import breadcrumbs from './breadcrumbs'


Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        access,
        breadcrumbs
    }



})