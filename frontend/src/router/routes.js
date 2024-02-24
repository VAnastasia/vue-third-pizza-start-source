import { isLoggedIn } from "@/middlewares/isLoggedIn";

export const routes = [
  {
    path: "",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
    meta: { layout: "SimpleLayout" },
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/CartView.vue"),
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/user",
    name: "user",
    meta: { layout: "DefaultLayout", middlewares: [isLoggedIn] },
    component: () => import("@/views/UserView.vue"),
    /*
     * В шаблонах использована одна и та же страница,
     * на которой меняется лишь часть контента
     * в зависимости от выбранной вкладки.
     *
     * Поэтому здесь разумно использовать дочерние маршруты.
     */
    children: [
      {
        path: "orders",
        name: "orders",
        component: () => import("@/views/OrdersView.vue"),
      },
      {
        path: "profile",
        name: "profile",
        component: () => import("@/views/ProfileView.vue"),
      },
    ],
  },
  {
    path: "/success",
    name: "success",
    component: () => import("@/views/SuccessView.vue"),
    meta: { layout: "SimpleLayout" },
  },
];
