import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'




import Login from '@/components/Login'
import Datapool from '@/components/Datapool'

import Datawash from '@/components/Datawash'
import Tezhengtiqu from '@/components/Tezhengtiqu'
import Dataformat from '@/components/Dataformat'


Vue.use(Router)

let router = new Router({
// mode: 'history',
  routes: [
    {
      path:'/login',
      name:'login',
      component:Login,


    },
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/datapool',
      leaf: true, // 只有一个节点
      menuShow: true,
      iconCls: 'iconfont icon-home', // 图标样式class
      children: [
        {path: '/datapool', component: Datapool, name: '数据池', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '数据格式化',
      redirect: '/dataformat',
      menuShow: true,
      leaf: true, // 只有一个节点
      iconCls: 'iconfont icon-users', // 图标样式class
      children: [
        {path: '/dataformat', component:Dataformat, name: '数据格式化', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '数据清洗',
      redirect: '/tezhengtiqu',
      menuShow: true,
      leaf: true, // 只有一个节点
      iconCls: 'iconfont icon-users', // 图标样式class
      children: [
        {path: '/datawash', component: Datawash, name: '数据清洗', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '特征提取',
      redirect: '/tezhengtiqu',
      menuShow: true,
      leaf: true, // 只有一个节点
      iconCls: 'iconfont icon-users', // 图标样式class
      children: [
        {path: '/tezhengtiqu', component: Tezhengtiqu, name: '特征提取', menuShow: true}
      ]
    },

  ]
})



export default router
