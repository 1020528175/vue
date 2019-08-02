// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import echarts from 'echarts'
Vue.use(echarts)
Vue.prototype.$echarts = echarts

import ElementUI from "element-ui"
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
