import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../src/style/style.scss";
// import "wowjs/css/libs/animate.css";
import "wowjs";
import "animate.css";

createApp(App).use(store).use(router).mount("#app");
