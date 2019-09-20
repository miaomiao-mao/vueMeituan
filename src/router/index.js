import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Regist from '@/components/Regist'
import Search from '@/components/Search'
import Huoguo from '@/components/Huoguo'
import HuoguoCon from '@/components/HuoguoCon'
import "../../static/css/font-awesome.css"

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/home',
			name: 'Home',
			components:{
				default:Home
			}
		},{
			path: '/search',
			name: 'Search',
			component: Search
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/regist',
			name: 'Regist',
			component: Regist
		},
		{
			path: '/huoguo',
			name: 'Huoguo',
			components: {
				'huoguo':Huoguo
			}
		},
		{
			path: '/huoguoCon/:id',
			name: 'HuoguoCon',
			components:{'huoguoCon':HuoguoCon}
		},
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '*',
			redirect: '/home'
		}
	]
})
