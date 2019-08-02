<template>
<!--  必须的手动指定高度，不然高度就是0就显示不出来-->
  <div id="china_map" style="margin: 50px auto;width: 1000px;height: 800px"></div>
</template>

<script>
  import axios from "axios"
  import sichun from "../../static/echarts-map-data-master/china-province/geojson/sichuan.json"
  export default {
    name: 'EchartsMap',
    data() {
      return{
      }
    },

    mounted () {
      const _this = this
      axios.get("../../static/map-data/sichun.json").then(response => {
        console.log(response)
        _this.canvasChinaMap(response.data)
      })

    },
    methods: {
      //绘制中国地图,传入鼠标移入时显示的省份数据
      canvasChinaMap: function (mapDta) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(document.getElementById("china_map"));
        myChart.showLoading();
        //注意这里的zigong与下面的series.map一致
        this.$echarts.registerMap('sichun', sichun);
        myChart.hideLoading();

        // 绘制图表
        let option = {
          //参考配置文档：https://echarts.baidu.com/option.html#title
          title: {
            text: '四川地图',
            left: 'center'
          },
          //参考配置文档：https://echarts.baidu.com/option.html#tooltip
          tooltip: {
            show: true,       //是否显示提示框组件，包括提示框浮层和 axisPointer。 [ default: true ]
            trigger: 'item',  //触发类型。 [ default: 'item' ]
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function (params) {
              // console.log(params)
              // var value = (params.value + '').split('.');
              // value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
              return params.seriesName + '<br/>' + params.name + ': ' + params.value;
            }
          },
          //参考配置文档：https://echarts.baidu.com/option.html#series-map.type
          series: [
            {
              name: '收入',   //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。见上：可以在tooltip中获取到
              type: 'map',    //指定是地图类型
              map: 'sichun',   //和上面registerMap中的一直
              selectedMode : 'single',    //选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'表示单选，或者'multiple'表示多选。
              // left:0,
              // right:100,
              // top:50,
              // bottom:'90px',
              // itemStyle:{
              //   normal:{
              //     areaColor:'#169bd6',
              //     borderColor:'#0f0f0f'
              //   },
              //   emphasis:{
              //     areaColor:'#d1dbe5',
              //   }
              // },
              itemStyle:{
                areaColor:'#169bd6',
                borderColor:'#0f0f0f'
              },
              emphasis:{    //强调的样式，也就是鼠标移入后的样式==高亮状态下的多边形和标签样式。
                itemStyle:{
                  areaColor:'#d1dbe5',
                }
              },
              label: {
                normal: {
                  show:false  //是否显示标签，这里显示的就是省份的名字。默认就是false
                },
                emphasis: {
                  show:false  //在鼠标移入时，是否显示，如果不写，默认是显示的
                }
              },
              // 鼠标移入对应省份区域显示对应的值：可以异步获取
              data: mapDta
            }
          ]
        };
        myChart.setOption(option);
      }
    }

  }


</script>

<style scoped>

</style>
