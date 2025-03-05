import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../view/AboutView.vue";
import AboutView from "../view/HomeView.vue";

const routes = [
  { path: "/about", component: AboutView },
  { path: "/", component: HomeView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
