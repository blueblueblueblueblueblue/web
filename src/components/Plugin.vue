<template>
  <el-row>

    <el-row>
      <el-col :span="24" style="height: 500px;">

        <el-tabs type="card">
          <el-tab-pane>
            <span slot="label"><i class="el-icon-rank"></i> <router-link to="/plugin/tezheng">特征提取</router-link></span>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-menu"></i>  <router-link to="/plugin/moxingguanli">模型管理</router-link></span>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-setting"></i> <router-link to="/plugin/moxingpeizhi">模型配置</router-link></span>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-rank"></i> <router-link to="/plugin/dashboard">可视化诊断</router-link></span>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i><router-link to="/plugin/xitongrizhi"> 系统日志</router-link></span>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-tickets"></i> <router-link to="/plugin/xitongguanli">系统管理</router-link></span>
          </el-tab-pane>
        </el-tabs>
        <router-view></router-view>
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
    export default {
        name: "Plugin",
      data(){
          return{


            search: ''

          }
      },
      methods:{
        resetDateFilter() {
          this.$refs.filterTable.clearFilter('date');
        },
        clearFilter() {
          this.$refs.filterTable.clearFilter();
        },
        formatter(row, column) {
          return row.address;
        },
        filterTag(value, row) {
          return row.tag === value;
        },
        filterHandler(value, row, column) {
          const property = column['property'];
          return row[property] === value;
        }
      }
    }
</script>

<style scoped>
.fd-model{
  margin: 10px;

  height: 500px;
}
.fd-data{
  margin: 10px;

  height: 500px;
}
</style>
<style lang="stylus" rel="stylesheet/stylus">
  .mainApp
    position absolute
    height 100%
    width 100%
</style>
