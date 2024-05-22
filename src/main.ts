import { createApp } from "vue";
import { createPinia } from "pinia";

import "primevue/resources/themes/mdc-light-indigo/theme.css";
import "primeicons/primeicons.css";

import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import ConfirmationService from "primevue/confirmationservice";
import Checkbox from "primevue/checkbox";
import Avatar from "primevue/avatar";
import ConfirmPopup from "primevue/confirmpopup";
import ConfirmDialog from "primevue/confirmdialog";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(ToastService);
app.use(ConfirmationService);
app.component("InputText", InputText);
app.component("Button", Button);
app.component("Toast", Toast);
app.component("Checkbox", Checkbox);
app.component("Avatar", Avatar);
app.component("ConfirmPopup", ConfirmPopup);
app.component("ConfirmDialog", ConfirmDialog);

app.mount("#app");
