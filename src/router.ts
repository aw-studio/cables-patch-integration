import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('./App.vue'),
	},
	{
		path: '/foo/bar',
		component: () => import('./App.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export { router };
