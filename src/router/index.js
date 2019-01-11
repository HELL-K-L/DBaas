// 配置页面基本路由

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// 配置路由
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: 'enmoLogin' },
    {
      path: '/enmoLogin',
      component: () => import(/* webpackChunkName: "about" */ '$views/Login')
    },
    {
      path: '/colors',
      component: () => import(/* webpackChunkName: "about" */ '$views/colors')
    }
  ]
});
