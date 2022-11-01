import axios, { Axios } from "axios";
import type {
	AxiosRequestConfig,
	AxiosInstance,
	Method,
	AxiosStatic,
	AxiosDefaults,
	AxiosRequestTransformer,
	AxiosResponseTransformer,
	AxiosInterceptorManager,
	AxiosResponse,
	AxiosRequestHeaders,
	AxiosResponseHeaders,
	AxiosError,
} from "axios";
//@ts-ignore
// import utils from "../../../node_modules/axios/lib/utils";

export function noop(args: any[]): any {}

type TMethod = Lowercase<Method>;

export interface AxiosPlusRequestTransformer {
	(this: AxiosRequestConfig, data: any, headers?: AxiosRequestHeaders): any;
}
export interface AxiosPlusResponseTransformer {
	(this: AxiosRequestConfig, data: any, headers?: AxiosResponseHeaders): any;
}

export class AxiosPlus extends Axios {
	static Cancel = axios.Cancel;
	static CancelToken = axios.CancelToken;
	static Axios = axios.Axios;
	static readonly VERSION = axios.VERSION;
	static isCancel = axios.isCancel;
	static all = axios.all;
	static spread = axios.spread;
	static isAxiosError = axios.isAxiosError;
	static getConfig(result: AxiosResponse | AxiosError): AxiosRequestConfig {
		return this.isCancel(result) ? (result as any).message.__config : result.config;
	}

	static unifyReturn(result: AxiosResponse | AxiosError): Promise<any> {
		return "code" in result ? Promise.reject(result) : (result as any);
	}

	declare defaults: Omit<AxiosDefaults<any>, "transformRequest" | "transformResponse"> & {
		transformRequest: AxiosPlusRequestTransformer[];
		transformResponse: AxiosPlusResponseTransformer[];
	};

	constructor(private config: AxiosRequestConfig = {}) {
		config.cancelable ??= true;
		super(config);
		this.defaults = Object.assign(axios.defaults, this.defaults);
	}

	register<T = any>(plugin: (axios: AxiosPlus, config: T) => any, pluginConfig: T) {
		plugin(this, pluginConfig);
	}

	createMethod(method: TMethod, prefix: string = "") {
		const _this = this;
		const filed = ["put", "post", "patch"].includes(method) ? "data" : "params";
		return function $request<Q = any, R = any>(url: string, cfg: AxiosRequestConfig = {}) {
			// 解析url中的参数，/path/{id} | /path/:id两种格式
			dispatch.abort = noop as Function;
			function dispatch<P = Partial<Q>>(
				payload?: Q,
				config: Omit<AxiosRequestConfig<P>, "params"> & { params?: P } = {}
			): Promise<R> {
				const conf: AxiosRequestConfig = {
					url,
					method,
					[filed]: payload,
				};
				const MC = Object.assign(cfg, conf, config);
				MC.__abort = noop;
				const cancelable = MC.cancelable ?? _this.config.cancelable;
				if (cancelable !== false) {
					const source = AxiosPlus.CancelToken.source();
					MC.cancelToken = source.token;
					dispatch.abort = MC.__abort = function abort(message: string = "Cancelled request") {
						(message as any).__config = (abort as any).config;
						source.cancel(message);
					};
					requests.add(dispatch.abort);
				}
				return _this.request<Q, R>(MC).finally(() => {
					requests.delete(dispatch.abort);
				});
			}

			return dispatch;
		};
	}

	createMethods<M extends TMethod>(...methods: M[]) {
		return methods.reduce((acc, method) => {
			acc[method] = this.createMethod(method);
			return acc;
		}, {} as Record<M, ReturnType<typeof this.createMethod>>);
	}
}

export default AxiosPlus;

const requests: Set<Function> = new Set();
export function abortAll(excludes: Function[]) {
	requests.forEach((item) => {
		if (!excludes.includes(item)) item();
	});
}
