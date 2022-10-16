import {createRouter, createWebHistory} from 'vue-router';
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "App"
  }

];

const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
