import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NotFound from "@/views/NotFound.vue";
import ErrorPage from "@/views/ErrorPage.vue";
import store from "@/data/store";

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
        beforeEnter: (to, from, next) => {
          const isExist = store.destinations.find(
            (des) => des.slug === to.params.slug
          );
          if (isExist) {
            const isExperienceExist = isExist.experiences.find(
              (des) => des.slug === to.params.experienceSlug
            );
            if (isExperienceExist) next();
            else next({ name: "ErrorPage" });
          } else {
            next({ name: "NotFound" });
          }
        },
      },
    ],
    beforeEnter: (to, from, next) => {
      const isExist = store.destinations.find(
        (des) => des.slug === to.params.slug
      );
      if (isExist) {
        next();
      } else {
        next({ name: "NotFound" });
      }
    },
  },
  {
    path: "/admin",
    name: "AdminHome",
    component: () =>
      import(/* webpackChunkName: "location" */ "@/views/Admin/AdminHome.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () =>
      import(/* webpackChunkName: "location" */ "@/views/User/LoginPage.vue"),
  },
  {
    path: "/logout",
    name: "LogoutPage",
    component: () =>
      import(/* webpackChunkName: "location" */ "@/views/User/LogoutPage.vue"),
  },
  { path: "/500", name: "ErrorPage", component: ErrorPage },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  linkExactActiveClass: "vue-exact-class",
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLogged = localStorage.getItem("is_logged");

  if (to.name === "LoginPage" && isLogged) {
    next({ name: "home" });
  } else if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (isLogged) {
      next();
    } else {
      next({ name: "LoginPage", query: { fallBackUrl: to.fullPath } });
    }
  } else {
    next();
  }
});

export default router;
