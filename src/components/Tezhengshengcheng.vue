<template>
 <el-row>
  <el-col :span="24" class="warp-breadcrum">
    <!--<el-breadcrumb separator="/" style="font-size: 20px">-->
      <!--<el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>-->

      <!--<el-breadcrumb-item>特征值提取</el-breadcrumb-item>-->
    <!--</el-breadcrumb>-->
  </el-col>
   <el-col :span="10">
     <el-table
       highlight-current-row

       :data="tableData"
       style="width: 100%">
       <el-table-column
         label="数据表项"
         width="180">
         <template slot-scope="scope">
           <i class="el-icon-time"></i>
           <span style="margin-left: 10px">{{ scope.row.name }}</span>
         </template>
       </el-table-column>

       <el-table-column
         width="180"
         label="操作">
         <template slot-scope="scope">
           <el-button
             type=""
             size="mini"
             @click="handleAdd(scope.$index, scope.row)">运算></el-button>

         </template>
       </el-table-column>
     </el-table>

   </el-col>
   <el-col :span="3">
     <br>
     <br>
     <el-button type="primary" icon="el-icon-plus" circle @click="plus()"></el-button><br><br>
     <el-button type="success" icon="el-icon-minus" circle @click="minus()"></el-button><br><br>
     <el-button type="info" icon="el-icon-close" circle @click="multi()"></el-button><br><br>
     <el-button type="danger"  circle @click="divid()"> &nbsp;/&nbsp; </el-button>

   </el-col>
   <el-col :span="10">
     <el-table
       highlight-current-row

       :data="tableData2"
       style="width: 100%">
       <el-table-column
         label="数据表达式"
         width="180">
         <template slot-scope="scope">
           <i class="el-icon-time"></i>
           <span style="margin-left: 10px">{{ scope.row.data }}</span>
         </template>
       </el-table-column>

       <el-table-column
         width="180"
         label="操作">
         <template slot-scope="scope">
           <el-button

             size="mini"
             @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
           <el-button

             size="mini"
             type="danger"
             @click="handleDelete()">删除</el-button>
         </template>
       </el-table-column>
     </el-table>
     <el-row style="margin-top: 10px">
       <el-button @click="newExpre()">新建表达式</el-button>
     </el-row>

   </el-col>
 </el-row>
</template>

<script>
    export default {
        name: "tezhengshengcheng",
      data() {
           return{
             jsondata:"",
             curdata:'',
             tableData: [{
               data: '表项1',

             }, {
               data: '表项2',

             }, {
               data: '表项3',

             }, {
               data: '表项4',

             }],
             tableData2:[{
               data:'表项1+表项2',

             }]
           }
      },

      methods: {
        handleEdit(index, row) {
          //console.log(row.data);
          this.curdata = index;
          console.log(this.curdata);
          this.tableData2[index].data = '';

        },
        handleAdd(index, row) {
          //console.log(row.data);
          this.tableData2[this.curdata].data += row.name;
          console.log(row.data);

        },
        handleDelete() {
          this.tableData2.pop();
        },
        newExpre(){
          this.tableData2.push({data:''});
        },
        plus(){
          this.tableData2[this.curdata].data+='+';
        },
        minus(){
          this.tableData2[this.curdata].data+='-';
        },
        multi(){
          this.tableData2[this.curdata].data+='*';
        },
        divid(){
          this.tableData2[this.curdata].data+='/';
        },
        getTe(){
          let param = new URLSearchParams();
          param.append("dataid", sessionStorage.getItem("dataid"));
          this.$ajax.post('/getTe', param).then((res) => {
            console.log("resstatus"+res.data.status);
            if (res.data.status) {
                this.tableData = res.data.dataTe.format;
            } else {
              this.$message({
                type: 'error',
                message: '用户名或密码错误',
                showClose: true
              })
            }
          }).catch((err) => {
            this.$message({
              type: 'error',
              message: '网络错误，请重试',
              showClose: true
            })
          })
        }

      },
      mounted(){
          this.getTe();
      }
    }
</script>

<style scoped>
  .transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }
</style>
