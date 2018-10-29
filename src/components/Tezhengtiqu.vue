<template>
 <el-row>
  <el-col :span="24" class="warp-breadcrum">
    <el-breadcrumb separator="/" style="font-size: 20px">
      <el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>

      <el-breadcrumb-item>特征值提取</el-breadcrumb-item>
    </el-breadcrumb>
  </el-col>
 </el-row>
</template>

<script>
    export default {
        name: "tezhengtiqu"
    }
</script>

<style scoped>

</style>
