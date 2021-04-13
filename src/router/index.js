import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/title/:id",
    name: "title",
    component: () => import("../views/Title.vue"),
  },
  {
    path: "/title/:id/info",
    name: "titleInfoMobile",
    component: () => import("../views/TitleInfo"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
