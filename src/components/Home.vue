<template>
  <el-row class="container">
    <!--头部-->
    <el-col :span="24" class="topbar-wrap">
      <div class="topbar-logo topbar-btn">
        <a href="/"><img src="../assets/images/logo.png" style="padding-left:5px;"></a>
      </div>
      <div class="topbar-logos" v-show="!collapsed">
        <a href="/" style="font-size: 20px;color: white;margin-top: 10px;display: block;margin-top: 13px">BIGDATA</a>
      </div>
      <div class="topbar-title">
        <span style="font-size: 18px;color: #fff;">大数据分析系统</span>
      </div>
      <div class="topbar-account topbar-btn">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link userinfo-inner"><i class="iconfont icon-user"></i> {{nickname}}  <i
            class="iconfont icon-down"></i></span>
          <el-dropdown-menu v-if="user" slot="dropdown">
            <el-dropdown-item>
              <div @click="jumpTo('/user/profile')"><span style="color: #555;font-size: 14px;">个人信息</span></div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div @click="jumpTo('/user/changepwd')"><span style="color: #555;font-size: 14px;">修改密码</span></div>
            </el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>

    <!--中间-->
    <el-col :span="24" class="main">
      <!--左侧导航-->
      <aside :class="{showSidebar:!collapsed}">
        <!--展开折叠开关-->
        <div class="menu-toggle" @click.prevent="collapse">
          <i class="iconfont icon-menufold" v-show="!collapsed"></i>
          <i class="iconfont icon-menuunfold" v-show="collapsed"></i>
        </div>
        <!--导航菜单-->
        <el-menu :default-active="defaultActiveIndex" router :collapse="collapsed" @select="handleSelect">
          <template v-for="(item,index) in $router.options.routes" v-if="item.menuShow">
            <el-submenu v-if="!item.leaf" :index="index+''">
              <template slot="title"><i :class="item.iconCls"></i><span slot="title">{{item.name}}</span></template>
              <el-menu-item v-for="term in item.children" :key="term.path" :index="term.path" v-if="term.menuShow"
                            :class="$route.path==term.path?'is-active':''">
                <i :class="term.iconCls"></i><span slot="title">{{term.name}}</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item  v-else-if="item.leaf&&item.children&&item.children.length" :index="item.children[0].path"
                          :class="$route.path==item.children[0].path?'is-active':''">
              <i :class="item.iconCls"></i><span slot="title">{{item.children[0].name}}</span>
            </el-menu-item>
          </template>
          <el-menu-item  @click="addMenuItem">
            <i class="el-icon-plus"></i><span >添加插件</span>
          </el-menu-item>
        </el-menu>
      </aside>

      <el-dialog title="添加插件" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="插件名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" style="width:50%"></el-input>
          </el-form-item>
          <el-form-item label="插件类型" :label-width="formLabelWidth" >
            <el-select v-model="form.region" placeholder="请选择插件类型" style="width:50%">
              <el-option label="故障诊断" value="1"></el-option>

            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirm">确 定</el-button>
        </div>
      </el-dialog>

      <!--右侧内容区-->
      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>

  </el-row>
</template>

<script>

  import Tezhengtiqu from '@/components/Tezhengtiqu'
  import Modelmanager from '@/components/plugin/Modelmanager'
  import Modelconfig from '@/components/plugin/Modelconfig'
  import Syslog from '@/components/plugin/Syslog'
  import Sysmanager from '@/components/plugin/Sysmanager'
  import Home from '@/components/Home'
  import Datapool from '@/components/Datapool'
  import Plugin from '@/components/Plugin'
  import dashboard from '@/components/dashboard/dashboard'
  export default {
    name: 'home',
    created(){
      bus.$on('setNickName', (text) => {
        this.nickname = text;
      })

      bus.$on('goto', (url) => {
        if (url === "/login") {
          localStorage.removeItem('access-user');
        }
        this.$router.push(url);
      })
    },
    data () {
      return {
        options:[{value:1,lable:"装备系统"}],
        dialogFormVisible:false,
        defaultActiveIndex: "0",
        nickname: '',
        collapsed: false,
        form: {
          name: '',
          region: '',
        },
        formLabelWidth: '120px'
      }
    },
    methods: {
      confirm(){
         var _this = this;

        let r = this.$router.options.routes;
        console.log(r);
        r.push({
          path: '/',
          name: 'chajian',
          component: Home,

          leaf: true, // 只有一个节点
          menuShow: true,
          iconCls: 'el-icon-setting', // 图标样式class
          children: [
            { path: '/plugin',
              component: Plugin,
              name: _this.form.name,
              menuShow: true,
              redirect:'/plugin/tezheng',
              children: [
                {path: '/plugin/xitongguanli', component: Sysmanager, name: '系统管理', menuShow: true},
                {path: '/plugin/xitongrizhi', component: Syslog, name: '系统日志', menuShow: true},
                {path: '/plugin/moxingpeizhi', component: Modelconfig, name: '模型配置', menuShow: true},
                {path: '/plugin/moxingguanli', component: Modelmanager, name: '模型管理', menuShow: true},
                {path: '/plugin/tezheng', component: Tezhengtiqu, name: '特征提取', menuShow: true},
                {path: '/plugin/dashboard', component: dashboard, name: '数据可视化', menuShow: true}
              ]
            }
          ]
        });
        console.log(r);
        this.$router.addRoutes(r);

        this.dialogFormVisible = false;
      },
      addMenuItem(){
        this.dialogFormVisible = true;



      },
      handleSelect(index){
        this.defaultActiveIndex = index;
      },
      //折叠导航栏
      collapse: function () {
        this.collapsed = !this.collapsed;
      },
      jumpTo(url){
        this.defaultActiveIndex = url;
        this.$router.push(url); //用go刷新
      },
      logout(){
        let that = this;
        this.$confirm('确认退出吗?', '提示', {
          confirmButtonClass: 'el-button--warning'
        }).then(() => {
          //确认
          that.loading = true;
          API.logout().then(function (result) {
            that.loading = false;
            localStorage.removeItem('access-user');
            that.$router.go('/login'); //用go刷新
          }, function (err) {
            that.loading = false;
            that.$message.error({showClose: true, message: err.toString(), duration: 2000});
          }).catch(function (error) {
            that.loading = false;
            console.log(error);
            that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
          });
        }).catch(() => {});
      }
    },
    mounted() {
      let user = localStorage.getItem('access-user');
      if (user) {
        user = JSON.parse(user);
        this.nickname = user.nickname || '';
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;

    .topbar-wrap {
      height: 50px;
      line-height: 50px;
      background: #373d41;
      padding: 0px;

      .topbar-btn {
        color: #fff;
      }
      /*.topbar-btn:hover {*/
      /*background-color: #4A5064;*/
      /*}*/
      .topbar-logo {
        float: left;
        width: 59px;
        line-height: 26px;
      }
      .topbar-logos {

        text-align: center;
        float: left;
        width: 120px;
        line-height: 26px;
      }
      .topbar-logo img, .topbar-logos img {
        height: 40px;
        margin-top: 5px;
        margin-left: 2px;
      }
      .topbar-title {
        float: left;
        text-align: left;
        width: 200px;
        padding-left: 10px;
        border-left: 1px solid #000;
      }
      .topbar-account {
        float: right;
        padding-right: 12px;
      }
      .userinfo-inner {
        cursor: pointer;
        color: #fff;
        padding-left: 10px;
      }
    }
    .main {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      position: absolute;
      top: 50px;
      bottom: 0px;
      overflow: hidden;
    }

    aside {
      min-width: 50px;
      background: #333744;
      &::-webkit-scrollbar {
        display: none;
      }

      &.showSidebar {
        overflow-x: hidden;
        overflow-y: auto;
      }

      .el-menu {
        height: 100%; /*写给不支持calc()的浏览器*/
        height: -moz-calc(100% - 80px);
        height: -webkit-calc(100% - 80px);
        height: calc(100% - 80px);
        border-radius: 0px;
        background-color: #333744;
        border-right: 0px;
      }

      .el-submenu .el-menu-item {
        min-width: 60px;
      }
      .el-menu {
        width: 180px;
      }
      .el-menu--collapse {
        width: 60px;
      }

      .el-menu .el-menu-item, .el-submenu .el-submenu__title {
        height: 46px;
        line-height: 46px;
      }

      .el-menu-item:hover, .el-submenu .el-menu-item:hover, .el-submenu__title:hover {
        background-color: #7ed2df;
      }
    }

    .menu-toggle {
      background: #4A5064;
      text-align: center;
      color: white;
      height: 26px;
      line-height: 30px;
    }

    .content-container {
      background: #fff;
      flex: 1;
      overflow-y: auto;
      padding: 10px;
      padding-bottom: 1px;

      .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
      }
    }
  }
</style>
