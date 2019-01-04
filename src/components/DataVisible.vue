<template>
    <el-row class="back">
      <el-col :span="8" class="fd-left" >
        <el-row style="height: 100%">
          <el-col class="fd-left-one" @click="showTo1()">
            <div id="left-board1" style="height: 100%;width: 100%;">

            </div>
          </el-col>
          <el-col class="fd-left-two">
            <div id="left-board2" style="height: 100%;width: 100%;">

            </div>
          </el-col>
          <el-col class="fd-left-three">
            <div id="left-board3" style="height: 100%;width: 100%;">

            </div>
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
            optionLeft1:'',
            optionLeft2:'',
            optionLeft3:'',
            optionBoard:'',
            data1:[820, 932, 901, 934, 1290, 1330, 1320],
            data2:[123, 232, 466, 567, 678, 789, 890],
            xdata:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          }
      },
      methods:{
        showLeft1(){
          var myChart = echarts.init(document.getElementById('left-board1'));
          var option = this.optionLeft1;
          myChart.setOption(option);
        },
        showLeft2(){
          var myChart = echarts.init(document.getElementById('left-board2'));
          var option = this.optionLeft2;
          myChart.setOption(option);
        },
        showLeft3(){
          var myChart = echarts.init(document.getElementById('left-board3'));
          var option = this.optionLeft3;
          myChart.setOption(option);
        },
        showBoard(){
          var myChart = echarts.init(document.getElementById('Board'));
          var option = this.optionBoard;
          myChart.setOption(option);
        },
        showTo1(){
          this.option = {};
        }
      },
      mounted(){
        const optionBoard = {
          title:{
            text:"预测对比图",
            textStyle:{
              color:'#333',
              fontStyle:'oblique'
            }
          },
          xAxis: {
            type: 'category',
            data: this.xdata
          },
          yAxis: {
            type: 'value'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
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
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          legend: {
            data:['测试数据','预测数据']
          },
          series: [{
            name:'测试数据',
            data: this.data1,
            type: 'line',
            smooth: true
          },
            {
              name:'预测数据',
              data: this.data2,
              type: 'line',
              smooth: true
            }]
        };
        const optionLeft1 ={
          title:{
            text:"差值图",
            textStyle:{
              color:'#333',
              fontStyle:'oblique'
            }
          },
          xAxis: {
            type: 'category',
            data: this.xdata
          },
          yAxis: {
            type: 'value'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          toolbox: {
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          legend: {
            data:['差值']
          },
          series: [{
            name:'差值',
            data: this.data1,
            type: 'line',
            smooth: true
          },
          ]
        };
        this.optionLeft1 = optionLeft1;
        this.optionBoard = optionBoard;
        this.showBoard();
        this.showLeft1();
        this.showLeft2();
        this.showLeft3();
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
  .fd{
    background: url('../assets/bg.jpg');
  }
</style>
