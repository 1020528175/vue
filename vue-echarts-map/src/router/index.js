import Vue from 'vue'
import Router from 'vue-router'
import EchartsMapChina from '../components/EchartsMapChina'
import EchartsMapChengdu from '../components/EchartsMapChengdu'
import EchartsMapSichun from '../components/EchartsMapSichun'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/echarts-map-china',
      component: EchartsMapChina
    },
    {
      path: '/echarts-map-sichun',
      component: EchartsMapSichun
    },
    {
      path: '/echarts-map-chengdu',
      component: EchartsMapChengdu
    },
    {
      path: "/",
      redirect: "/echarts-map-china"
    }
  ]
})
