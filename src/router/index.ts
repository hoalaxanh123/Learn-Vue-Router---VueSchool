import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NotFound from "@/views/NotFound.vue";
import ErrorPage from "@/views/ErrorPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/destination/:slug",
    props: true,
    name: "DetailPage",
    component: () =>
      import(/* webpackChunkName: "location" */ "@/views/DetailPage.vue"),
    children: [
      {
        path: ":experienceSlug",
        name: "Experience",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "location" */ "@/components/ExprerienceDetail.vue"
          ),
      },
    ],
  },
  { path: "/error", name: "ErrorPage", component: ErrorPage },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  linkExactActiveClass: "vue-exact-class",
  history: createWebHistory(),
  routes,
});

export default router;
