import "@vue/runtime-core";
import api from "@/apis";

declare module "@vue/runtime-core" {
	interface ComponentCustomProperties {
		$api: api;
	}
}

declare module "vue-router" {
	interface RouteMeta {
		auth?: boolean;
		title?: string;
		keywords?: string;
		description?: string;
		transition?: string;
		keepAlive?: boolean;
	}
}
