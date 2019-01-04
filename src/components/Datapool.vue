<template>
 <el-row >
   <el-col :span="24" class="warp-breadcrum">
     <el-breadcrumb separator="/" style="font-size: 20px">
       <el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>

       <el-breadcrumb-item>数据池</el-breadcrumb-item>
       <el-steps :active="active" finish-status="success">
         <el-step title="选择数据" icon="el-icon-upload"></el-step>
         <el-step title="格式化配置" icon="el-icon-edit"></el-step>
         <el-step title="数据清洗" icon="el-icon-edit-outline"></el-step>
         <el-step title="新建插件" icon="el-icon-setting"></el-step>
       </el-steps>
     </el-breadcrumb>

   </el-col>

   <el-col :span="24" class="datapool">
     <el-row>
       <el-col :span="3" v-for="(item, index) in datalist" :key="item.id" style="margin: 20px;" >
         <el-card :body-style="{ padding: '0px', }" style="height: 180px" :style=" choseIndex==index?'border: #00C1DE 2px solid':'border: #ffffff 2px solid'">
           <img src="../assets/images/data.png" class="image" @click="chose(index)">
           <div style="padding: 10px;cursor: pointer" @click="chose(index)">
             <div class="bottom clearfix" style="">
               <span>{{item.nameByUser}}</span>

             </div>
           </div>
         </el-card>
       </el-col>
     </el-row>
   </el-col>
   <el-col :span="24">
     <uploader :options="options" :file-status-text="fileStatusText" @file-success="dataList()" class="uploader-example">
       <uploader-unsupport></uploader-unsupport>

       <uploader-drop class="drop-area">
         <div class="drop-msg">
         <p>将文件拖到此处或者</p>
         <uploader-btn style="color: #E6A23C">选择文件</uploader-btn>
         <uploader-btn :directory="true" style="color: #409EFF">选择文件夹</uploader-btn>
         </div>
       </uploader-drop>
       <p style="font-size: 20px">上传列表：</p>
       <uploader-list style="width: 100%;margin-bottom: 30px"></uploader-list>
     </uploader>
   </el-col>

 </el-row>
</template>

<script>
    export default {
      name: "Datapool",
      data () {
        return {
          active:0,
          choseIndex:-1,
          datalist:"",
          currentDate: new Date(),
          options: {
            // https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js
            target: '//localhost:8081/vueupload',
            testChunks: false,

          },
          fileStatusText:{
            success: '成功',
            error: 'e出错',
            uploading: '正在上传',
            paused: '暂停',
            waiting: '等待'
          },
          attrs: {
            accept: ''
          }
        }
      },
      mounted(){
        this.dataList();
      },
      methods:{
        chose(index){
          this.choseIndex = index;
          sessionStorage.setItem("dataid",this.datalist[index].id);
          sessionStorage.setItem("active",1);
          this.active = 1;
        },
        dataList(){
          this.$ajax.post('/dataList').then((res) => {
            console.log("resstatus"+res.data.status);
            if (res.data.status) {
               this.datalist = res.data.datalist;
               console.log(this.datalist);
            } else {
              this.$message({
                type: 'error',
                message: '获取失败',
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


    }
</script>

<style scoped>
.datapool{
  width: 98%;
  margin: 10px;
  padding: 0px;
  height: auto;
  border: 1px dashed #00C1DE;

}
.uploader-example {
  width: 98%;
  padding: 10px;
  margin: 10px auto 0;
  font-size: 12px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .4);
}
.uploader-example .uploader-btn {
  margin-right: 0px;
}
.uploader-example .uploader-list {
  max-height: 440px;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;
}
.drop-area{
  width: 98%;
  margin-bottom: 20px;
  height: 400px;
  text-align: center;

}
.drop-msg{
  margin-top: 190px;
  font-size: 20px;
  color: #67C23A;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 1px;
  line-height: 12px;
}

.chose{
  float: right;

}
.image {
  cursor: pointer;
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
