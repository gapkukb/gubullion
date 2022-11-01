// test.ts

import type { MockMethod } from "vite-plugin-mock";
function json(data: any, code: number = 200, message: null | string = null) {
	return {
		code,
		data,
		message,
	};
}
export default [
	// 模拟用户登录
	{
		url: "/mock/login",
		method: "post",
		response: json({
			userName: "模拟用户名",
			id: "1",
			userId: "235513a1fJfa3",
			token: "235513a1fJfa3",
			avatar: null,
		}),
	},
	// 模拟超时
	{
		url: "/mock/timeout",
		method: "post",
		timeout: 2000,
		response: {
			code: 0,
			data: {
				name: "vben",
			},
		},
	},
	// 模拟服务器连接错误
	{
		url: "/mock/net-error",
		method: "post",
		rawResponse: async (req, res) => {
			let reqbody = "";
			await new Promise((resolve) => {
				req.on("data", (chunk) => {
					reqbody += chunk;
				});
				req.on("end", () => resolve(undefined));
			});
			res.setHeader("Content-Type", "text/plain");
			res.statusCode = 301;
			res.end(`hello, ${reqbody}`);
		},
	},
	// 模拟服务器业务错误
	{
		url: "/mock/server-error",
		method: "post",
		rawResponse: async (req, res) => {
			let reqbody = "";
			await new Promise((resolve) => {
				req.on("data", (chunk) => {
					reqbody += chunk;
				});
				req.on("end", () => resolve(undefined));
			});
			res.setHeader("Content-Type", "text/plain");
			res.statusCode = 200;
			res.end(`hello, ${reqbody}`);
		},
	},
] as MockMethod[];
