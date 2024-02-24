import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router/routes";
import { middlewarePipeline } from "@/middlewares/middlewarePipeline";

const router = createRouter({
  routes,
  history: createWebHistory(),
});

middlewarePipeline(router);
export default router;
