import AxiosPlus from "./request";
import error from "./plugins/error";
import filter from "./plugins/filter";

const http = new AxiosPlus({
	baseURL: "/mock",
});

http.register(filter, null);
http.register(error, null);
const instance = http.createMethods("get", "post");

export const get = instance.get;
export const post = instance.post;
