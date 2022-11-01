import type { RouteLocationNormalized } from "vue-router";

const head = document.head;
function createMeta(name: string) {
	const meta = document.createElement("meta");
	meta.setAttribute("name", name);
	head.appendChild(meta);
	return meta;
}
const keywordsMeta = head.querySelector('meta[name="keywords"]') || createMeta("keywords");
const descriptionMeta = head.querySelector('meta[name="description"]') || createMeta("description");

export default function seo({ meta: { title, keywords, description } }: RouteLocationNormalized, prefixTitle: string = "") {
	title && (document.title = prefixTitle + title);
	keywords && keywordsMeta.setAttribute("content", keywords);
	description && descriptionMeta.setAttribute("content", description);
}
