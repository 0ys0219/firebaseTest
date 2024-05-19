import { createApp } from "vue";
import { createPinia } from "pinia";

import "primevue/resources/themes/mdc-light-indigo/theme.css";
import "primeicons/primeicons.css";

import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(ToastService);
app.component("InputText", InputText);
app.component("Button", Button);
app.component("Toast", Toast);

app.mount("#app");
