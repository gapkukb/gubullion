import type { RouteRecordRaw } from "vue-router";

export default [
	{
		path: "/user",
		name: "user",
		meta: {
			title: "用户中心",
		},
		component: () => import("../pages/User/User.vue"),
		children: [],
	},
] as RouteRecordRaw[];
