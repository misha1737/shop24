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
            path: '/authorization', //home page
            component: Authorization
        },
        {
            path: '/cart', //home page
            component: Cart
        },
        {
            path: '/catalog', //home page
            component: Catalog
        },
        {
            path: '/registration', //home page
            component: Registration
        },
        {
            path: '*',
            component: ErrorCmp
        }

    ],
    mode: 'history'

})