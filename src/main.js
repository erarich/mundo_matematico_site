import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import VueCarousel from "vue-carousel";

// const pinia = createPinia();
const app = createApp(App);
// app.use(pinia);
app.use(router);
app.use(vuetify);
app.use(VueCarousel);
app.mount("#app");
