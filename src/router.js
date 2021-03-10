import Vue from 'vue';
import Router from 'vue-router';
import data from '../data';

import Index from './views/Index';

Vue.use(Router);

let routes = [
	{
		path: "/",
		component: Index,
		meta: {
			key: 1,
		},
	},
	{
		path: "*",
		component: Index,
		meta: {
			key: 101,
		},
	},
];


const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.afterEach((to) => {
	// eslint-disable-next-line
	gtag('config', data.statistics.GA_ID, { 'page_path': to.path });
});



export default router
