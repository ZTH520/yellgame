import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	routes: [
	{
		path: '*',
		redirect: '/'
	},
	{
		path: '/',
		name: 'Index',
		component: ()=> import(/* webpackChunkName: "index" */'@/page/index')
	},
	{
		path: '/ranking',
		name: 'Rank',
		component: ()=> import(/* webpackChunkName: "demo" */'@/page/ranking')
	},
	{
		path: '/list/:cate',
		name: 'List',
		component: ()=> import(/* webpackChunkName: "demo" */'@/page/list')
	},
	{
		path: '/detail/:name',
		name: 'Detail',
		component: ()=> import(/* webpackChunkName: "demo" */'@/page/detail')
	},
	{
		path: '/game/:name',
		name: 'Game',
		component: ()=> import(/* webpackChunkName: "demo" */'@/page/game')
	}
  ]
})
