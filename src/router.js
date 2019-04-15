import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main.vue";
import Home from "./views/Home.vue"

Vue.use(Router);

const Contact = () => import('./views/Contacts.vue')

export default new Router({
	routes: [
		{
			path: "/",
			name: "main",
			redirect: "/home",
			component: Main,
			children: [
                {
                    path: '/home',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/contacts',
                    name: 'contacts',
                    component: Contact
                }
            ]
		}
	]
});
