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
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">
        <el-table-column
          label="索引"
          prop="index">
        </el-table-column>
        <el-table-column
          label="数据表项"
          prop="name">
        </el-table-column>
        <el-table-column
          prop="tag"
          label="表项状态"

          :filters="[{ text: '正常值', value: '正常值' }, { text: '异常值', value: '异常值' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.tag === '正常值' ? 'primary' : 'success'"
              disable-transitions>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          align="right">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">操作</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </el-row>
</template>

<script>
    export default {
        name: "Datawash",
      data(){
          return{
            tableData: [{
              index: '1',
              name: '表项1',
              address: '上海市普陀区金沙江路 1518 弄',
              tag:'脏数据'
            }, {
              index: '2',
              name: '表项1',
              address: '上海市普陀区金沙江路 1517 弄',
              tag:'脏数据'
            }, {
              index: '3',
              name: '表项1',
              address: '上海市普陀区金沙江路 1519 弄',
              tag:'正常值'
            }, {
              index: '4',
              name: '表项1',
              address: '上海市普陀区金沙江路 1516 弄',
              tag:'正常值'
            }],
            search: ''
          }
      },
      methods:{
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          console.log(index, row);
        }
      }
    }
</script>

<style scoped>

</style>
