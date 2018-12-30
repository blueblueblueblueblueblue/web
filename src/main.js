// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/iconfont.css'
import '@/assets/styles/main.scss'
import ElementUI from 'element-ui'
import uploader from 'vue-simple-uploader'
import store from './vuex'
import './axios'
import column from '@/components/column/column'
import funnel from '@/components/funnel/funnel'
import heat from '@/components/heat/heat'
import point from '@/components/point/point'
import line from '@/components/line/line'
import dashboard from '@/components/dashboard/dashboard'
import multipleColumn from '@/components/multipleColumn/multipleColumn'
import {DatePicker} from 'element-ui'

Vue.component(DatePicker.name, DatePicker)
Vue.use(ElementUI)
Vue.use(uploader)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
