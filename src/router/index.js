// 配置页面基本路由

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// 配置路由
export default new Router({
  base: process.env.BASE_URL,
  routes: [
    { path: "/", redirect: "test" },
    {
      path: "/enmoLogin",
      component: () => import(/* webpackChunkName: "about" */ "$views/Login")
    },
    {
      path: "/colors",
      component: () => import(/* webpackChunkName: "about" */ "$views/colors")
    },
    {
      path: "/test",
      component: () => import(/* webpackChunkName: "about" */ "$views/testPage")
    }
  ]
});
