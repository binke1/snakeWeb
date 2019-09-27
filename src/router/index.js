import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)
export const constantRouterMap = [{
  path: '/login',
  name: 'login',
  hidden: true,
  component: _import('login/index')
}, {
  path: '/',
  name: 'home',
  component: _import('home/index')
},]
export default new Router({
  // mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
export const asyncRouterMap = [

 ]
