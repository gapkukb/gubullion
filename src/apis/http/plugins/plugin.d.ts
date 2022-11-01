import axios, { AxiosInterceptorManager } from "axios";

declare module "axios" {
	// 此处扩展axios属性
	export interface AxiosRequestConfig extends RetryOptions {
		auth?: boolean;
		cancelable?: boolean;
		repeatable?: boolean;
		/** 请求失败时，是否抛出错误给下一层处理 */
		throwable?: boolean;
		loading?: boolean;
		__id?: number;
		__abort?: typeof noop;
		cache?: boolean;
		dataType?: "jsonp" | "script" | "json" | "form" | "formData";
		jsonpCallback?: string;
		pollingInterval?: number;
	}

	export interface AxiosInterceptorOptions {
		index: number;
	}
}
