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
      <div class="custom-tree-container">

        <div class="block">
          <p>动态增减</p>
          <el-tree
            :data="data5"
            show-checkbox
            node-key="id"
            default-expand-all
            :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button
            type="text"
            size="mini"
            @click="() => append(data)">
            增加
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            删除
          </el-button>
        </span>
      </span>
          </el-tree>
        </div>
      </div>

    </el-col>
    <el-col :span="5" class="dataitembtn">
      <el-row class="fd-button">
        <el-button type="success" icon="el-icon-check" >保存</el-button>
        <el-button type="warning" icon="el-icon-refresh">重置</el-button>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
  let id = 1000;
    export default {
        name: "Dataformat",
      data() {
        const data = [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }];
        return {
          data5: JSON.parse(JSON.stringify(data))
        }
      },

      methods: {
        append(data) {
          const newChild = { id: id++, label: 'testtest', children: [] };
          if (!data.children) {
            this.$set(data, 'children', []);
          }
          data.children.push(newChild);
        },

        remove(node, data) {
          const parent = node.parent;
          const children = parent.data.children || parent.data;
          const index = children.findIndex(d => d.id === data.id);
          children.splice(index, 1);
        },


      }
    }
</script>

<style scoped>
  .fd-button{
    margin: 20px;
  }
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
.dataitem{
  height: 500px;
  border: 1px solid #00C1DE;
  padding: 10px;
  margin-right: 20px;
  margin-left: 20px;

}
.dataitembtn{
  height: 500px;
  border: 0px dashed #de6a19;
  margin-left: 20px;

}
</style>
