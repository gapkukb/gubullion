import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import Icon from "unplugin-icons/vite";
import IconResolver from "unplugin-icons/resolver";
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
	return {
		plugins: [
			vue(),
			vueJsx(),
			Components({
				dts: "./src/components.d.ts",
				types: [],
				resolvers: [NaiveUiResolver(), IconResolver()],
			}),
			AutoImport({
				imports: ["vue", "vue-router", "pinia", "vue-i18n"],
				dirs: ["./src/stores", "./src/hooks", "./src/apis", "./src/utils"],
				dts: "./src/auto-import.d.ts",
			}),
			viteMockServe({
				mockPath: "./src/mock",
				localEnabled: command === "serve",
			}),
		],
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url)),
			},
		},
		server: {
			proxy: {
				"/api": {
					target: "http://localhost",
					changeOrigin: true,
					configure: (proxy, options) => {
						// proxy 是 'http-proxy' 的实例
					},
					// rewrite:''
					// timeout:3000
				},
			},
		},
	};
});
