<template>
 <el-row>
  <el-col :span="24" class="warp-breadcrum">
    <!--<el-breadcrumb separator="/" style="font-size: 20px">-->
      <!--<el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>-->

      <!--<el-breadcrumb-item>特征值提取</el-breadcrumb-item>-->
    <!--</el-breadcrumb>-->
  </el-col>
   <el-col :span="7" >
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
             type="primary"
             size="mini"
             :disabled="tableMid.length!=0?true:false"
             @click="handleAdd(scope.$index, scope.row)">提取></el-button>

         </template>
       </el-table-column>
     </el-table>

   </el-col>
   <el-col :span="10" style="margin-left: 20px;margin-right:20px;overflow: hidden">
     <el-table
       highlight-current-row

       :data="tableMid"
       style="width: 100%">
       <el-table-column
         label="数据表项"
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
             type="danger"
             @click="handleDel(scope.$index, scope.row)">删除</el-button>

         </template>
       </el-table-column>
     </el-table>
     <el-row style="margin-top: 10px;text-align: center">
       <el-button :disabled="tableMid.length!=0?false:true" @click="commit()" type="warning">提交</el-button>
     </el-row>
   </el-col>
   <el-col :span="6">
     <el-table
       id="updateright"
       highlight-current-row

       :data="tableData"
       style="width: 100%">
       <el-table-column
         label="数据表达式"
         width="180">
         <template slot-scope="scope">
           <i class="el-icon-time"></i>
           <span class="updateright" style="margin-left: 10px">{{ scope.row.name }}</span>
         </template>
       </el-table-column>
     </el-table>


   </el-col>
 </el-row>
</template>

<script>
    export default {
        name: "tezhengtiqu",
      data() {
           return{
             tableMid:[],
             jsondata:"",
             curdata:'',
             tableData: [],
             tmp:'',
             index:''
           }
      },

      methods: {
        commit(){
            let param = new URLSearchParams();
            param.append("dataid", sessionStorage.getItem("dataid"));
            param.append("labelrow",this.index);
            this.$ajax.post('/getTe', param).then((res) => {
              console.log("resstatus"+res.data.status);
              if (res.data.status) {
                this.$message({
                  type: 'success',
                  message: '提交成功',
                  showClose: true
                })
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
          },
        handleDel(index, row){
          this.tableData[this.index] = this.tmp;
          this.tableMid.pop();
          document.getElementsByClassName("updateright").click();
        },
        handleEdit(index, row) {
          //console.log(row.data);
          this.curdata = index;
          console.log(this.curdata);
          this.tableData2[index].data = '';

        },
        handleAdd(index, row) {
          this.index = index;
          this.tmp = this.tableData[index];
          console.log(this.tmp);
          this.tableData[index] = "";
          console.log(this.tableData);
          //console.log(row.data);
          this.tableMid.push({
            data:row.name,
          });
          document.getElementsByClassName("updateright").click();
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
