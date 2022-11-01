import { get, post } from "./http";

export default {
	login: post("/login"),
	timeout: post("/timeout"),
	netError: get("/net-error"),
	serverError: post("/server-error"),
};
