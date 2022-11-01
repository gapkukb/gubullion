import type { AxiosPlus } from "../request";

/** 数据过滤插件，过滤掉无效参数 */

let store: ReturnType<typeof useUserStore>;
export default function filter(axios: AxiosPlus) {
	axios.interceptors.request.use(function requestAuth(config) {
		if (config.data) {
			config.data = _filter(config.data);
		} else if (config.params) {
			config.params = _filter(config.params);
		}
		return config;
	});
}

function _filter(o: { [key: keyof any]: any }) {
	const ret: typeof o = Object.create(null);
	for (const k in o) {
		const v = o[k];
		if (v || v === 0 || v === false) {
			ret[k] = o[k];
		}
	}
	return ret;
}
