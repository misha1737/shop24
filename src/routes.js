import VueRouter from 'vue-router'
import Home from './pages/Home'
import Authorization from './pages/Authorization'
import ErrorCmp from './pages/Error'
import Cart from './pages/Cart'
import Catalog from './pages/Catalog'
import Registration from './pages/Registration'





export default new VueRouter({
    routes:[
        {
            path: '', //home page
            component: Home
        },
        {
            path: '/Authorization', //home page
            component: Authorization
        },
        {
            path: '/Cart', //home page
            component: Cart
        },
        {
            path: '/Catalog', //home page
            component: Catalog
        },
        {
            path: '/Registration', //home page
            component: Registration
        },
        {
            path: '*',
            component: ErrorCmp
        }

    ],
    mode: 'history'

})