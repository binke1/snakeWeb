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
  path: '/personalCenter',
  name: 'personalCenter',
  redirect: '/personalCenter/membersArea',
  hidden: true,
  component: _import('personalCenter/index'),
  children: [{
    path: 'membersArea',
    name: 'membersArea',
    component: _import('personalCenter/components/membersArea')
  }, {
    path: 'myOrder',
    name: 'myOrder',
    component: _import('personalCenter/components/myOrder')
  }, {
    path: 'topUpHistory',
    name: 'topUpHistory',
    component: _import('personalCenter/components/topUpHistory')
  }, {
    path: 'myCollect',
    name: 'myCollect',
    component: _import('personalCenter/components/myCollect')
  }, {
    path: 'myDiscountCoupon',
    name: 'myDiscountCoupon',
    component: _import('personalCenter/components/myDiscountCoupon')
  }, {
    path: 'myComment',
    name: 'myComment',
    component: _import('personalCenter/components/myComment')
  }, {
    path: 'fundManagement',
    name: 'fundManagement',
    component: _import('personalCenter/components/fundManagement')
  }, {
    path: 'accountSetting',
    name: 'accountSetting',
    component: _import('personalCenter/components/accountSetting')
  }, {
    path: 'billingAddress',
    name: 'billingAddress',
    component: _import('personalCenter/components/billingAddress')
  }]
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
  {
    path: '/personalCenter',
    name: 'personalCenter',
    hidden: true,
    component: _import('personalCenter/index')
  },
]
