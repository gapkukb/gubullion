import type { App } from "vue";
import user from "./user";
// 作为vue插件暴露出去
export default function api(app: App) {
	app.config.globalProperties.$api = {
		user,
	};
}
