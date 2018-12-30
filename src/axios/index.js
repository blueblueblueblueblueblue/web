import Vue from 'vue'
import axios  from 'axios'

axios.defaults.baseURL= '/'
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.prototype.$ajax = axios
