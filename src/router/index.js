import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailsUser from "../views/DetailsUser.vue";
import AddUser from "../views/AddUser.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/deatilsuser/:id",
    name: "DetailsUser",
    component: DetailsUser,
    props: true,
  },
  {
    path: "/addUser",
    name: "AddUser",
    component: AddUser,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
