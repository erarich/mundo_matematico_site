import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

// const pinia = createPinia();
const app = createApp(App);
// app.use(pinia);
app.use(router, axios);
app.use(vuetify);
app.mount("#app");
