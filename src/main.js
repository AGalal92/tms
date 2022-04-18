import { createApp } from "vue";
import { createPinia } from "pinia";
import { popper } from "@popperjs/core";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(popper);
app.mount("#app");
