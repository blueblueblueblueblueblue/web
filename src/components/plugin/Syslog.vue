<template>
  <el-row>
    <el-col :span="24" class="fd-model" >
      <el-table
        ref="filterTable"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          sortable
          width="220"
          column-key="date"
          :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
          :filter-method="filterHandler"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="告警名称"
          width="220">
        </el-table-column>
        <el-table-column
          prop="address"
          label="告警详情"
          width="220"
          :formatter="formatter">
        </el-table-column>
        <el-table-column
          prop="tag"
          label="告警类别"

          :filters="[{ text: '磁盘', value: '磁盘' }, { text: '节点', value: '节点' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.tag === '磁盘' ? 'primary' : 'success'"
              disable-transitions>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "Syslog",
      data(){
          return{
            tableData: [{
              date: '2016-05-02',
              name: 'SP-10101',
              address: '故障详情.........',
              tag: '磁盘'
            }, {
              date: '2016-05-04',
              name: 'BS-42',
              address: '故障详情.........',
              tag: '节点'
            }, {
              date: '2016-05-01',
              name: 'LK-35',
              address: '故障详情.........',
              tag: '磁盘'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '故障详情.........',
              tag: '节点'
            }],
          }
      }
    }
</script>

<style scoped>

</style>
