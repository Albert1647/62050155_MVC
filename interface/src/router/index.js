import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		redirect: "/signin",
	},
	{
		path: "/test",
		name: "test",
		component: () => import("../views/test.vue"),
	}
	
]


const router = new VueRouter({
	routes,
	// mode: 'history'
});

export default router;
