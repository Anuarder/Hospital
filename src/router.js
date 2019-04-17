import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue"
Vue.use(Router);

export default new Router({
	routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: () => import('./views/Contacts.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue')
        },
        {
            path: '/faq',
            name: 'faq',
            component: () => import('./views/FAQ.vue')
        },
        {
            path: '/reviews',
            name: 'reviews',
            component: () => import('./views/Reviews.vue')
        },
        {
            path: '/personal',
            name: 'personal',
            component: () => import('./views/Personal.vue')
        },
	]
});
