import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
// Vue.prototype.$http = axios;

const app = createApp(App);

app.mount("#app");
