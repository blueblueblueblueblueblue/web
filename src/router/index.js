import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Plugin from '@/components/Plugin'
import Login from '@/components/Login'
import Datapool from '@/components/Datapool'
import Modelmanager from '@/components/plugin/Modelmanager'
import Modelconfig from '@/components/plugin/Modelconfig'
import Syslog from '@/components/plugin/Syslog'
import Sysmanager from '@/components/plugin/Sysmanager'
import Datawash from '@/components/Datawash'
import Tezhengtiqu from '@/components/Tezhengtiqu'
import Dataformat from '@/components/Dataformat'
import column from '@/components/column/column'
import funnel from '@/components/funnel/funnel'
import heat from '@/components/heat/heat'
import point from '@/components/point/point'
import line from '@/components/line/line'
import dashboard from '@/components/dashboard/dashboard'
import multipleColumn from '@/components/multipleColumn/multipleColumn'
import {DatePicker} from 'element-ui'

Vue.component(DatePicker.name, DatePicker)

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

      leaf: true, // 只有一个节点
      menuShow: true,
      iconCls: 'el-icon-upload2', // 图标样式class
      children: [
        {path: '/datapool', component: Datapool, name: '数据池', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '数据格式化',

      menuShow: true,
      leaf: true, // 只有一个节点
      iconCls: 'el-icon-news', // 图标样式class
      children: [
        {path: '/dataformat', component:Dataformat, name: '数据格式化', menuShow: true}
      ]
    },
    {
      path: '/',
      component: Home,
      name: '数据清洗',

      menuShow: true,
      leaf: true, // 只有一个节点
      iconCls: 'el-icon-refresh', // 图标样式class
      children: [
        {path: '/datawash', component: Datawash, name: '数据清洗', menuShow: true}
      ]
    },
    // {
    //   path: '/',
    //   component: Home,
    //   name: '特征提取',
    //
    //   menuShow: true,
    //   leaf: true, // 只有一个节点
    //   iconCls: 'el-icon-share', // 图标样式class
    //   children: [
    //     {path: '/tezhengtiqu', component: Tezhengtiqu, name: '特征提取', menuShow: true}
    //   ]
    // },

    {
      path: '/column',
      component: column
    }, {
      path: '/funnel',
      component: funnel
    }, {
      path: '/heat',
      component: heat
    }, {
      path: '/point',
      component: point
    }, {
      path: '/dashboard',
      component: dashboard
    }, {
      path: '/multipleColumn',
      component: multipleColumn
    }, {
      path: '/line',
      component: line
    }],
    linkActiveClass: 'active'
})



export default router
