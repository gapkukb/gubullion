import type { AxiosPlus } from "../request";
/** 鉴权插件，未登录情况下取消该请求发起 */

let store: ReturnType<typeof useUserStore>;
export default function auth(axios: AxiosPlus) {
	axios.interceptors.request.use(function requestAuth(config) {
		store = store ||= useUserStore();
		if (config.url!.includes("/open/")) return config;
		if (config.auth && store.isLoggedIn) return config;
		return false as any;
	});
}
