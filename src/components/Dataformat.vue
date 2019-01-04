<template>
  <el-row>
    <el-col :span="24" class="warp-breadcrum">
      <el-breadcrumb separator="/" style="font-size: 20px">
        <el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>

        <el-breadcrumb-item>数据格式化</el-breadcrumb-item>
        <el-steps :active="active" finish-status="success">
          <el-step title="选择数据" icon="el-icon-upload"></el-step>
          <el-step title="格式化配置" icon="el-icon-edit"></el-step>
          <el-step title="数据清洗" icon="el-icon-edit-outline"></el-step>
          <el-step title="新建插件" icon="el-icon-setting"></el-step>
        </el-steps>
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
      <div class="custom-tree-node " slot-scope="{ node, data }">

          <span>{{ node.label }}:</span>
          <input v-model="dataformat[data.id]" v-if="!data.children"/>
      </div>
          </el-tree>
        </div>
      </div>

    </el-col>
    <el-col :span="5" class="dataitembtn">
      <el-row class="fd-button">
        <el-button type="success" icon="el-icon-check" @click="savaFormat()" >保存</el-button>
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
        return {
          active:sessionStorage.getItem("active"),
          data5: [],
          headNum:"",
          dataformat:[],
        }
      },

      methods: {
        savaFormat(){
          var format={};
          format["rows"]=this.headNum;
          var arr =[];
          for (var i =0;i<this.headNum;i++){
                  arr.push({
                    "name":this.dataformat[4*i+2],
                    "type":this.dataformat[4*i+3],
                    "default":this.dataformat[4*i+4]
                  })
          }
          format["format"]=arr;
          this.saveFormat(JSON.stringify(format));
          console.log(format);
          console.log(format.length);
        },
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
        getData(){
          let param = new URLSearchParams();
          param.append("dataid", this.dataItem);
          this.$ajax.post('/dataFormat').then((res) => {
            console.log("resstatus"+res.data.status);
            if (res.data.status) {
              this.dataformat = res.data.dataFormat;
              console.log(this.dataformat);
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
        },
        getHeadNum(){
          var dataitem = sessionStorage.getItem("dataid");
          let param = new URLSearchParams();
          param.append("dataid", dataitem);
          this.$ajax.post('/getHeadNum',param).then((res) => {
            console.log("resstatus"+res.data.status);
            if (res.data.status) {
              this.headNum = res.data.headNum;
              for (var i = 0; i < this.headNum; i++) {
                this.dataformat[i*4+1]="dasp";
                this.data5.push({
                  id: 4*i+1,
                  label: '数据表项'+(i+1),
                  top:'1',
                  children: [{
                    id:  4*i+2,
                    label: '数据名称',
                  },
                    {
                      id:  4*i+3,
                      label: '数据类型',
                    },
                    {
                      id:  4*i+4,
                      label: '默认值',
                    }]
                });
              }
              console.log(this.headNum);
              console.log(this.data5);
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
        },
        saveFormat(str){
          var dataitem = sessionStorage.getItem("dataid");
          let param = new URLSearchParams();
          param.append("dataid", dataitem);
          param.append("formatJson",str);
          this.$ajax.post('/saveFormat',param).then((res) => {
            console.log("resstatus"+res.data.status);
            if (res.data.status) {

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
      mounted(){
          this.getHeadNum();
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
  min-height: 500px;
  height: auto;
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
  .fd-format{
    height: 100px;
  }
</style>
