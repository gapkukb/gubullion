import type { RouteLocationNormalized } from "vue-router";

let routerHistory: string[] = [];
let lastPath: string = "";
let lastPath2: string = "";

const slideRight = "slide-right";
const slideLeft = "slide-left";
export default function setTransition(to: RouteLocationNormalized, from: RouteLocationNormalized) {
	const depth1 = routerHistory.lastIndexOf(from.fullPath);
	const depth2 = routerHistory.lastIndexOf(to.fullPath);
	const depth3 = depth1 === -1 ? -1 : routerHistory.lastIndexOf(from.fullPath, depth1 - 1);

	console.log(depth1, depth2, depth3);

	if (depth1 !== -1 && depth2 !== -1 && depth3 !== -1) {
		if (depth1 > depth2) {
			console.log("后退");
		} else {
			console.log("前进");
		}
	} else {
	}
	routerHistory.push(to.fullPath);
}
