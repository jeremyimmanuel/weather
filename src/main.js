import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerComponents } from "./registerComponents";
import "./index.scss";

const app = createApp(App);

app.use(store);
app.use(router);

registerComponents(app);

app.mount("#app");
