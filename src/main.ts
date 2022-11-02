import App from "./App.vue";
import { createPinia } from "pinia";
import locale from "./locale";
import router from "./router";
import apis from "@/apis";
import "./assets/main.css";

console.log(locale.global.messages.value["zh-Hans"]);

const app = createApp(App);
app.use(createPinia());
app.use(locale);
app.use(router);
app.use(apis);
app.mount("#app");
