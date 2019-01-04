<template>
    <el-row>
      <el-col :span="8" class="fd-left">
        <el-row style="height: 100%">
          <el-col class="fd-left-one">

          </el-col>
          <el-col class="fd-left-two">

          </el-col>
          <el-col class="fd-left-three">

          </el-col>
        </el-row>
      </el-col>
      <el-col :span="15" class="fd-right">
       <div id="Board" style="height: 100%;width: 100%;">

       </div>
      </el-col>
    </el-row>
</template>

<script>
  var echarts = require('echarts');
    export default {
        name: "DataVisible",
      data(){
          return{
            option:'',

          }
      },
      methods:{

      },
      mounted(){
        var myChart = echarts.init(document.getElementById('Board'));
        var option = {
          title:{
            text:"预测对比图",
            textStyle:{
              color:'#333',
              fontStyle:'oblique'
            }
          },
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          dataZoom: [
            {
              type: 'slider',
              show: true,
              xAxisIndex: [0],
              start: 0,
              end: 100
            },
            {
              type: 'slider',
              show: true,
              yAxisIndex: [0],
              left: '93%',
              start: 0,
              end: 100
            },
            {
              type: 'inside',
              xAxisIndex: [0],
              start: 0,
              end: 100
            },
            {
              type: 'inside',
              yAxisIndex: [0],
              start: 0,
              end: 100
            }
          ],
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          }, legend: {
            data:['测试数据','预测数据']
          },
          series: [{
            name:'测试数据',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          },
            {
              name:'预测数据',
              data: [123, 232, 466, 567, 678, 789, 890],
              type: 'line',
              smooth: true
            }]
        };

        myChart.setOption(option);
      }
    }
</script>

<style scoped>
.fd-left{
  border: #00C1DE 1px dashed;
  height: 500px;
}
  .fd-right{
    border: #00C1DE 1px dashed;
    height: 500px;
  }
  .fd-left-one{
    height: 33%;
    border: #2c3e50 1px dashed;
  }
  .fd-left-two{
    border: #2c3e50 1px dashed;
    height: 33%;
  }
  .fd-left-three{
    border: #2c3e50 1px dashed;
    height: 33%;
  }
</style>
