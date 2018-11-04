import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// =====vue路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import MintUI from 'mint-ui'
import  'mint-ui/lib/style.css'
Vue.use(MintUI)

// ====vuex
import Vuex from 'vuex'
Vue.use(Vuex)
import Home from './containers/Home.vue'
import Cat from './containers/Cat.vue'
import Orders from './containers/Orders.vue'
import Mine from './containers/Mine.vue'

const routes = [{
        path: '/home',
        name: 'home',
        component: Home
    },{
        path: '/cats',
        name: 'cats',
        component: Cat
    },{
        path: '/orders',
        name: 'orders',
        component: Orders
    },{
        path: '/mine',
        name: 'mine',
        component: Mine
    },
    { path: '/', redirect: { name: 'home' } }
]
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes

})
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')