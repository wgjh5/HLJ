import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// =====vue路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import MintUI from 'mint-ui'

Vue.use(MintUI)

// ====vuex
import Vuex from 'vuex'
Vue.use(Vuex)

import Home from './containers/Home.vue'
import Cat from './containers/Cat.vue'
import Orders from './containers/Orders.vue'
import Mine from './containers/Mine.vue'
import Register from './containers/Register.vue'
import Login from './containers/Login.vue'
const routes = [{
        path: '/home',
        name: 'home',
        component: Home
    },{
        path: '/cat',
        name: 'cat',
        component: Cat
    },{
        path: '/orders',
        name: 'orders',
        component: Orders
    },{
        path: '/mine',
        name: 'mine',
        component: Mine
    },{
        path: '/register',
        name: 'register',
        component: Register
    },{
        path: '/login',
        name: 'login',
        component: Login
    },
	{
		path: '/',
		redirect: '/home'
	} //  碰到#/重定向到#/home
]
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes

})
const store = new Vuex.Store({
	// 状态
	state: {
		nav: 0,
		arr:[]
	},
	// 修改状态
	mutations: {
		editNav(state, data) {
			state.nav = data
		},
		editArr(state, data) {
			state.arr = data
		}

	},
	// actions  一般配合 事件@xxx 触发
	actions: {
		setNav(context, data) {
			context.commit('editNav', data);
		},
		setArr(context, data) {
			context.commit('editArr', data);
		}
	},
	// 组件从store(中介)手上拿数据  配个 computed
	getters: {
		getNav: state => {
			return state.nav
		},
		getArr: state => {
			return state.arr
		}
	}
})
new Vue({	router,
	store,
	render: h => h(App),
}).$mount('#app')
