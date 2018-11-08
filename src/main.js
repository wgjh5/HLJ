import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// =====vue路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import MintUI from 'mint-ui'
Vue.use(MintUI)

import $ from 'jquery'
// ====vuex
import Vuex from 'vuex'
Vue.use(Vuex)


// ==一级路由==
import Home from './containers/Home.vue'
import List from './containers/List.vue'
import Detail from './containers/Detail.vue'
import Cat from './containers/Cat.vue'
import Orders from './containers/Orders.vue'
import Mine from './containers/Mine.vue'
import Register from './containers/Register.vue'
import Login from './containers/Login.vue'


// ==二级路由==
import OrderChannel from './containers/OrderChannel.vue'
import DetailChannel from './containers/DetailChannel.vue'
import ListChannel from './containers/ListChannel.vue'

const routes = [{
		path: '/home',
		name: 'home',
		component: Home
	},
	{
		path: '/list',
		name: 'list',
		component: List,
		children: [{
				// 当 /user/:id/profile 匹配成功，
				// UserProfile 会被渲染在 User 的 <router-view> 中
				path: 'choiceness',
				name: 'choiceness',
				component: ListChannel
			},
			{

				path: 'doctor',
				name: 'doctor',
				component: ListChannel
			}
		]

	},
	{
		path: '/cat',
		name: 'cat',
		component: Cat
	},
	{
		path: '/detail',
		name: 'detail',
		component: Detail,
		children: [{
			path: 'detaliList',
			name: 'detaliList',
			component: DetailChannel
		}]
	},
	{
		path: '/orders',
		name: 'orders',
		component: Orders,
		children: [{
				// 当 /user/:id/profile 匹配成功，
				// UserProfile 会被渲染在 User 的 <router-view> 中
				path: 'all',
				name: 'all',
				component: OrderChannel,
			},
			{

				path: 'notPaid',
				name: 'notPaid',
				component: OrderChannel,
			},
			{

				path: 'beforeService',
				name: 'beforeService',
				component: OrderChannel,
			},
			{

				path: 'active',
				name: 'active',
				component: OrderChannel,
			},
			{

				path: 'needComment',
				name: 'needComment',
				component: OrderChannel,
			},
			{

				path: 'refund',
				name: 'refund',
				component: OrderChannel,
			},
			{

				path: 'afterSale',
				name: 'afterSale',
				component: OrderChannel,
			}
		]
	},
	{
		path: '/mine',
		name: 'mine',
		component: Mine
	},
	{
		path: '/register',
		name: 'register',
		component: Register
	},
	{
		path: '/login',
		name: 'login',
		component: Login
	},

	{
		path: '/',
		redirect: 'home'
	} //  碰到#/重定向到#/home
]
const router = new VueRouter({
	routes
})

const store = new Vuex.Store({
	// 状态
	state: {
		nav: 0,
		subscribe: false,
		siteshow: false,
		DetailChannel: [],
		arr: [],
		isloading: false,
		text: {
			text: "全部微整形"
		},
		textPx: {
			text: "智能排序"
		},
		gallery: {
			galleryOrder: [],
			index: 0
		},
		tabs: [{
			title: "全部",
			path: "all",
		}, {
			title: "待付款",
			path: "notPaid",
		}, {
			title: "待服务",
			path: "beforeService",
		}, {
			title: "进行中",
			path: "active",
		}, {
			title: "待评价",
			path: "needComment",
		}, {
			title: "退款",
			path: "refund",
		}, {
			title: "售后",
			path: "afterSale",
		}],
		dropdown: [{
			title: "全部微整形",
			dropdownAll: []
		}, {
			title: "牙齿",
			dropdownTooth: []
		}, {
			title: "玻尿酸",
			dropdownBns: []
		}, {
			title: "半永久",
			dropdownSemipermanent: []
		}, {
			title: "水光针",
			dropdownSgz: []
		}, {
			title: "V脸型",
			dropdownVshape: []
		}, {
			title: "瘦脸针",
			dropdownBOTOX: []
		}, {
			title: "美体塑形",
			dropdownThroax: []
		}, {
			title: "脂肪填充",
			dropdownFatfill: []
		}, {
			title: "抗衰老",
			dropdownAntiaging: []
		}, {
			title: "光子嫩肤",
			dropdownPhotorejuvenation: []
		}, {
			title: "超声刀",
			dropdownUlthera: []
		}, {
			title: "埋线",
			dropdownSunk: []
		}, {
			title: "热立塑",
			dropdownLiposonix: []
		}, {
			title: "双眼皮",
			dropdownDoubleeye: []
		}, {
			title: "皮秒",
			dropdownPicosecond: []
		}],
		IntelligentSorting: [{
			title: "智能排序",
			IntelligentSorting: []
		}, {
			title: "人气最高",
			Mostpopular: []
		}, {
			title: "价格最低",
			Lowest: []
		}, {
			title: "价格最高",
			TopPrice: []
		}]

	},
	// 修改状态
	mutations: {
		editNav(state, data) {
			state.nav = data
		},
		editSubscribe(state, data) {
			state.subscribe = data
		},
		editSiteshow(state, data) {
			state.siteshow = data
		},
		editArr(state, data) {
			state.arr = data
		},
		editGallery(state, data) {
			state.gallery = data;
		},
		editText(state, data) {
			state.text = data;
		},
		editTextPx(state, data) {
			state.textPx = data;
		},
		editDetailChannel(state, data) {
			state.DetailChannel = data
		},
		editisloading(state, data) {
			state.isloading = data
		}


	},
	// actions  一般配合 事件@xxx 触发
	actions: {
		setNav(context, data) {
			context.commit('editNav', data);
		},
		setSiteshow(context, data) {
			context.commit('editSiteshow', data);
		},
		setSubscribe(context, data) {
			context.commit('editSubscribe', data);
		},
		setArr(context, data) {
			context.commit('editArr', data);
		},
		setGallery(conText, data) {
			conText.commit('editGallery', data);
		},
		setText(conText, data) {
			conText.commit('editText', data);
		},
		setTextPx(conText, data) {
			conText.commit('editTextPx', data);
		},
		setloading(conText, data) {
			conText.commit('editisloading', data);
		}

	},
	// 组件从store(中介)手上拿数据  配个 computed
	getters: {
		getNav: state => {
			return state.nav
		},
		getSubscribe: state => {
			return state.subscribe
		},
		getSiteshow: state => {
			return state.siteshow
		},
		getArr: state => {
			return state.arr
		},
		getGallery: state => {
			return state.gallery
		},
		getTabs: state => {
			return state.tabs
		},
		getDropdown: state => {
			return state.dropdown
		},
		getPx: state => {
			return state.IntelligentSorting
		},
		getText: state => {
			return state.text
		},
		getTextPx: state => {
			return state.textPx
		},
		getDetailChannel: state => {
			return state.DetailChannel
		},
		getisloading: state => {
			return state.isloading
		}

	}
})
router.beforeEach((to, from, next) => {
	store.dispatch("setloading", true);
	next()
})
router.afterEach((to, from) => {
	// setTimeout(function(){
	store.dispatch("setloading", false);
	// },500)

})
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
