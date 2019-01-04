<template>
  <el-row>

    <el-row>
      <el-col :span="24" class="warp-breadcrum">
        <el-breadcrumb separator="/" style="font-size: 20px">
          <el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>

          <el-breadcrumb-item>数据清洗</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18" id="main" style="height:500px"></el-col>
      <el-col :span="6" >
        <el-button type="primary">处理</el-button>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
  import echarts from 'echarts'
    export default {
        name: "Datawash",
      data(){
          return{
            search: '',
            errData:[],
            corData:[],
            xAxisData:[],
          }
      },
      methods:{
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          console.log(index, row);
        },
        getWash(){
          for (var i = 0; i < 10; i++) {
            this.xAxisData.push('Class' + i);
            this.errData.push((Math.random() * 2).toFixed(2));
            this.corData.push((Math.random() + 0.3).toFixed(2));

          }
        },
        showCharts(){
          var myChart = echarts.init(document.getElementById('main'));
          var xAxisData = this.xAxisData;
          var data1 = this.errData;
          var data2 = this.corData;
          var itemStyle = {
            normal: {
            },
            emphasis: {
              barBorderWidth: 1,
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: 'rgba(0,0,0,0.5)'
            }
          };

          var option = {
            backgroundColor: '#ffffff',
            legend: {
              data: ['错误数据', '正确数据'],
              align: 'left',
              left: 10
            },
            brush: {
              toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
              xAxisIndex: 0
            },
            toolbox: {
              feature: {
                magicType: {
                  type: ['stack', 'tiled']
                },
                dataView: {}
              }
            },
            tooltip: {},
            xAxis: {
              data: xAxisData,
              name: 'X Axis',
              silent: false,
              axisLine: {onZero: true},
              splitLine: {show: false},
              splitArea: {show: false}
            },
            yAxis: {
              inverse: true,
              splitArea: {show: false}
            },
            grid: {
              left: 100
            },
            visualMap: {
              type: 'continuous',
              dimension: 1,
              text: ['High', 'Low'],
              inverse: true,
              itemHeight: 200,
              calculable: true,
              min: -2,
              max: 6,
              top: 60,
              left: 10,
              inRange: {
                colorLightness: [0.4, 0.8]
              },
              outOfRange: {
                color: '#bbb'
              },
              controller: {
                inRange: {
                  color: '#2f4554'
                }
              }
            },
            series: [
              {
                name: '错误数据',
                type: 'bar',
                stack: 'one',
                itemStyle: itemStyle,
                data: data1
              },
              {
                name: '正确数据',
                type: 'bar',
                stack: 'one',
                itemStyle: itemStyle,
                data: data2
              },
            ]
          };

          myChart.setOption(option);
        }
      },
      mounted(){
        this.getWash();
        this.showCharts();
      },

    }

</script>

<style scoped>

</style>
