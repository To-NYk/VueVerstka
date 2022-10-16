import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './global.scss';

import { createApp } from "vue";

// console.log(components);



new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

// const app = createApp(App)
// components.forEach(component => {
//   app.component(component.name, component)
// })

// app.mount("#app")