<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="21" class="middle">
          <div>
            <h2 class="font"></h2>
          </div>
        </el-col>
        <el-col :span="3">
          <el-menu mode="horizontal" background-color="#545c64" text-color="#fff">
            <el-submenu index="1">
              <template slot="title">
                用户
                <el-col :span="12">
                  <div class="demo-basic--circle">
                    <div class="block">
                      <el-avatar :size="30" :src="circleUrl"></el-avatar>
                    </div>
                  </div>
                </el-col>
              </template>
              <el-menu-item>
                <a>完善个人信息</a>
              </el-menu-item>
              <el-menu-item>
                <a class="loginout" @click.prevent="loginout()">退出登录</a>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <el-container class="container">
      <el-aside class="aside" width="220px">
        <el-menu :unique-opened="true" :router="true" class="menu">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="user">
              <i class="el-icon-menu"></i>
              <span>用户列表</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>云店铺管理</span>
            </template>
            <el-menu-item index="shop">
              <i class="el-icon-menu"></i>
              <span >云店铺列表</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="3-1">
              <i class="el-icon-menu"></i>
              <span>角色列表</span>
            </el-menu-item>
            <el-menu-item index="right">
              <i class="el-icon-menu"></i>
              <span>权限列表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      sizeList: ["large", "medium", "small"]
    };
  },

  methods: {
    loginout() {
      this.$router.push({ name: "login" });
      this.$message({
        message: "退出成功",
        center: true,
        type: "success"
      });
    }
  }
};
</script>

<style>
.container {
  height: 100%;
}
.header {
  background-color: #545c64;
}
.main {
  background-color: #e9eef3;
}
.aside {
  background-color: #d3d3d3;
}
.middle {
  text-align: center;
  line-height: 30px;
}
.font {
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
}
.menu{
  margin-top: 20px;
}
</style>