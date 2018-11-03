import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// =====vue路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// ====vuex
import Vuex from 'vuex'
Vue.use(Vuex)
import Home from './containers/Home.vue'

const routes = [{
        path: '/home',
        name: 'home',
        component: Home,
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