import Axios, { AxiosError } from "axios";
import type { AxiosResponse } from "axios";
import type { AxiosPlus } from "../request";
import router from "@/router";

let store: ReturnType<typeof useUserStore>;
export default function error(axios: AxiosPlus) {
	axios.interceptors.response.use(
		(response) => {
			// 请求成功处理函数
			// 进行具体的业务逻辑处理
			// 按后台定义的格式code,data,message进行成功性检查,假设约定200为成功
			// 其余情况可根据公司和个人习惯作为then或者catch抛出，此处作为catch抛出

			const { data, config, status, headers, request } = response;
			if (data.code === 200) {
				// 进行空值检查
				const value = data.data;
				if (Array.isArray(value) && value.length) {
					return value;
				}
				if (value !== void 0 && value !== null) {
					return value;
				}
			}

			return Promise.reject(response);
		},
		(err: Required<AxiosError>) => {
			// 请求失败处理函数
			const { code, response } = err;
			if (code === AxiosError.ECONNABORTED) {
				// 请求超时,由于没有得到服务器响应，因此response是undefined

				console.log("请求超时，请检查您的网络是否稳定");
			} else if (code === AxiosError.ERR_BAD_RESPONSE) {
				// 50X 响应错误

				console.log("服务器繁忙，请稍后再试");
			} else if (code === AxiosError.ERR_BAD_REQUEST) {
				// 40X 响应错误

				if (response.status === 401) {
					//未验证用户
					// console.log("未登录或登录已失效，请重新登录");

					router.push("/login");
				} else if (response.status === 403) {
					// 权限不足

					console.log("很抱歉您没有访问权限，请联系系统管理员");
				}
			}
			if (err.config.throwable) {
				// config.throwable 错误是否进入下一层catch，默认否
				return Promise.reject(err);
			}
		}
	);
}
