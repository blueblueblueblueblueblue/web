<template>
  <el-row>
    <el-col :span="24" class="fd-model" >
      <el-table
        ref="filterTable"
        :data="tableData1"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="创建时间"
          sortable
          width="220"
          column-key="date"
          :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
          :filter-method="filterHandler">
        </el-table-column>
        <el-table-column
          prop="name"
          label="算法名称"
          width="220">
        </el-table-column>
        <el-table-column
          prop="address"
          label="模型描述"
          width="220"
          :formatter="formatter">
        </el-table-column>
        <el-table-column
          prop="tag"
          label="算法类别"
          :filters="[{ text: '算法1', value: '算法1' }, { text: '算法2', value: '算法2' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.tag === '算法1' ? 'primary' : 'success'"
              disable-transitions>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <el-col :span="11" class="fd-data">

    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "Modelmanager",
      data(){
          return{
            tableData1: [{
              date: '2016-05-02',
              name: 'SP-10101',
              address: '模型详情.........',
              tag: '算法1'
            }, {
              date: '2016-05-04',
              name: 'BS-42',
              address: '模型详情.........',
              tag: '算法1'
            }, {
              date: '2016-05-01',
              name: 'LK-35',
              address: '模型详情.........',
              tag: '算法1'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '模型详情.........',
              tag: '算法2'
            }],
          }
      }
    }
</script>

<style scoped>

</style>
