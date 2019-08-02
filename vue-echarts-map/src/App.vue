<template>
  <div id="app">
    <div id="map_btn">
<!--      <a href="#/echarts-map-china">中国地图</a>-->
<!--      <a href="#/echarts-map-sichun">四川地图</a>-->
<!--      <router-link to="/echarts-map-chengdu">成都地图</router-link>-->
<!--      <router-link to="/echarts-map-china">中国地图</router-link>-->
<!--      <router-link to="/echarts-map-sichun">四川地图</router-link>-->
<!--      <router-link to="/echarts-map-chengdu">成都地图</router-link>-->
      <el-button type="primary" @click="jumpToChina">中国地图</el-button>
      <el-button type="info" onclick="window.location.href='#/echarts-map-sichun'">四川地图</el-button>
      <el-link type="danger" href="#/echarts-map-chengdu">成都地图</el-link>
      <a href="#/echarts-map-chengdu"><el-button type="danger">成都地图</el-button></a>
      <router-link to="/echarts-map-chengdu"><el-button type="danger">成都地图</el-button></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Vue from "vue"
import {Button} from "element-ui"
Vue.component(Button.name,Button)
export default {
  name: 'App',
  methods:{
    jumpToChina(){
      window.location="#/echarts-map-china"
    }
  }
}
</script>

<style>
    #map_btn{
      /*width: 800px;*/
      /*margin: 0px auto;*/
      /*text-align: center;*/
      position: fixed;
      right: 100px;
      top: 40%;
      width: 300px;
    }
  a{
    /*display: block;*/
    /*line-height: 2em;*/
  }
  .el-button{
    margin: 10px auto;
  }
</style>
