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
            <el-submenu>
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
              <el-menu-item>退出</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <el-container class="container">
      <el-aside class="aside" width="220px">
        <el-menu :unique-opened="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>
              <span>用户列表</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>云店铺管理</span>
            </template>
            <el-menu-item index="2-1">
              <i class="el-icon-menu"></i>
              <span>云店铺列表</span>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="3-1">
              <i class="el-icon-menu"></i>
              <span>用户列表</span>
            </el-menu-item>
            <el-menu-item index="3-2">
              <i class="el-icon-menu"></i>
              <span>权限列表</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">Main</el-main>
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
  background-color: #d3dcd6;
}
.middle {
  text-align: center;
  line-height: 30px;
}
.font {
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>