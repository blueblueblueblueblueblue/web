<template>
  <el-row>
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/" style="font-size: 20px">
        <el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>

        <el-breadcrumb-item>数据格式化</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-col :span="24" style="margin-left: 20px">
      <h4>数据表项:</h4>
    </el-col>

    <el-col :span="17" class="dataitem">

    </el-col>
    <el-col :span="5" class="dataitembtn"></el-col>
  </el-row>
</template>

<script>
    export default {
        name: "Datawash"
    }
</script>

<style scoped>
.dataitem{
  height: 500px;
  border: 1px dashed #00C1DE;
  margin-right: 20px;
  margin-left: 20px;

}
.dataitembtn{
  height: 500px;
  border: 1px dashed #de6a19;
  margin-left: 20px;

}
</style>
