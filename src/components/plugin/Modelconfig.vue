<template>
  <el-row>
    <el-table
      :data="tableData3.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column
        label="索引"
        prop="index">
      </el-table-column>
      <el-table-column
        label="模型名称"
        prop="name">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="模型类别"

        :filters="[{ text: '正常', value: '正常' }, { text: '未完成', value: '未完成' }]"
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
          <el-row style="margin-top: 10px;">
            <el-button  @click="addModel()" type="warning">添加模型</el-button>
          </el-row>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">配置</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="添加模型" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="模型名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" style="width:50%"></el-input>
        </el-form-item>
        <el-form-item label="模型类型" :label-width="formLabelWidth" >
          <el-select v-model="form.region" placeholder="请选择模型类型" style="width:50%">
            <el-option label="故障诊断" value="1"></el-option>

          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
  </el-row>
</template>

<script>
    export default {
        name: "Modelconfig",
      data(){
          return{
            form: {
              name: '',
              region: '',
            },
            dialogFormVisible:false,
            tableData3: [{
              index: '1',
              name: '表项1',
              address: '上海市普陀区金沙江路 1518 弄',
              tag:'正常'
            }, {
              index: '2',
              name: '表项1',
              address: '上海市普陀区金沙江路 1517 弄',
              tag:'正常'
            }, {
              index: '3',
              name: '表项1',
              address: '上海市普陀区金沙江路 1519 弄',
              tag:'正常'
            }, {
              index: '4',
              name: '表项1',
              address: '上海市普陀区金沙江路 1516 弄',
              tag:'未完成'
            }],
          }
      },
      methods:{
        handleEdit(index,row){
          this.dialogFormVisible = true;
        },
          addModel(){
            this.dialogFormVisible = true;
          }
      }
    }
</script>

<style scoped>

</style>
