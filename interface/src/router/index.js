import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		redirect: "/test",
	},
	{
		path: "/test",
		name: "test",
		component: () => import("../views/2564.vue"),
	}
	
]


const router = new VueRouter({
	mode: 'history',
	routes
});

export default router;
