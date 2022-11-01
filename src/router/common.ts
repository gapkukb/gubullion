import type { RouteRecordRaw } from "vue-router";

export default [
	{
		path: "/login",
		name: "login",
		meta: {
			title: "登录",
		},
		component: () => import("../pages/User/Login.vue"),
	},
	{
		path: "/register",
		name: "register",
		meta: {
			title: "注册",
		},
		component: () => import("../pages/User/Register.vue"),
	},
] as RouteRecordRaw[];
