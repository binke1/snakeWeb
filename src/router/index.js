import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)
export const constantRouterMap = [{
  path: '/login',
  name: 'login',
  hidden: true,
  component: _import('login/index')
},{
  path: '/register',
  name: 'register',
  hidden: true,
  component: _import('login/register')
}, {
  path: '/',
  name: 'home',
  component: _import('home/index')
}, {
  path: '/productDetails',
  name: 'productDetails',
  component: _import('product/productDetails')
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
