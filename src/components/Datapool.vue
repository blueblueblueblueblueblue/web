<template>
 <el-row >
   <el-col :span="24" class="warp-breadcrum">
     <el-breadcrumb separator="/" style="font-size: 20px">
       <el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>

       <el-breadcrumb-item>数据池</el-breadcrumb-item>
     </el-breadcrumb>
   </el-col>

   <el-col :span="24" class="datapool">
     <el-row>
       <el-col :span="3" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0" >
         <el-card :body-style="{ padding: '0px' }" @click="chose">
           <img src="../assets/images/data.png" class="image">
           <div style="padding: 10px;">
             <div class="bottom clearfix">
               <span>数据{{index+1}}</span>
               <el-checkbox class="chose" size="medium"  ></el-checkbox>
             </div>
           </div>
         </el-card>
       </el-col>
     </el-row>
   </el-col>
   <el-col :span="24">
     <uploader :options="options" class="uploader-example">
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
          currentDate: new Date(),
          options: {
            // https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js
            target: '//localhost:8081/vueupload',
            testChunks: false
          },
          attrs: {
            accept: 'image/*'
          }
        }
      },
      methods:{
        chose(){
           //todo
        }
      }
    }
</script>

<style scoped>
.datapool{
  width: 98%;
  margin: 10px;
  padding: 10px;
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
