import { createRouter, createWebHistory } from "vue-router";
import Layout from "../pages/Layout/index.vue";
import user from "./user";
import common from "./common";
import seo from "./seo";
import setTransition from "./set-transition";

let userStore: ReturnType<typeof useUserStore>;

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "layout",
			component: Layout,
			redirect: "/home",
			children: [
				{
					path: "/home",
					name: "home",
					meta: {
						title: "首页",
					},
					component: () => import("../pages/Home/Home.vue"),
				},
				...common,
				...user,
			],
		},
		{
			path: "/about",
			name: "about",
			component: () => import("../pages/About/About.vue"),
		},
		{
			path: "/:pathMatch(.*)*",
			redirect: "/",
		},
	],
});

router.beforeEach((to, from, next) => {
	const flag = userStore.isLoggedIn;

	if (to.meta.auth && !flag) {
		next("/login");
	} else if (flag && (to.name === "login" || to.name === "register")) {
		next("/");
	} else {
		next();
	}
});

router.afterEach((to, from, failure) => {
	if (failure) return;
	seo(to, "巨像官网|贵金属投资|黄金-");
	setTransition(to, from);
});

Promise.resolve().then(() => {
	userStore = useUserStore();
});

console.log(router.getRoutes());

export default router;
