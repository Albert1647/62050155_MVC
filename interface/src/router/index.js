import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import store from "../store/index.js";

Vue.use(VueRouter);

// app route
const routes = [
	{
		path: "/",
		redirect: "/panel",
	},
	{
		path: "/panel",
		name: "panel",
		component: () => import("../views/panel.vue"),
	},
	{
		path: "/student",
		name: "student",
		component: () => import("../views/student.vue")
	},
	{
		path: "/summary",
		name: "summary",
		component: () => import("../views/summary.vue")
	}
	
]


const router = new VueRouter({
	// using 'stack'
	mode: 'history',
	routes
});

export default router;
