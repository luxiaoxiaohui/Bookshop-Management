<template>
  <el-card class="box-card">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-row class="searchRow">
      <el-col>
        <el-input placeholder="请输入内容" v-model="input" class="inputsearch" clearable="true">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>

    <el-table :data="tableData" style="width: 100%" class="table">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="用户ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="用户名">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="昵称">
              <span>{{ props.row.nickname }}</span>
            </el-form-item>
            <el-form-item label="性别">
              <span>{{ props.row.gender }}</span>
            </el-form-item>
            <el-form-item label="邮箱">
              <span>{{ props.row.email }}</span>
            </el-form-item>
            <el-form-item label="手机号">
              <span>{{ props.row.phone }}</span>
            </el-form-item>
            <el-form-item label="邮编">
              <span>{{ props.row.zip_code }}</span>
            </el-form-item>
            <el-form-item label="省份">
              <span>{{ props.row.location}}</span>
            </el-form-item>
            <el-form-item label="地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="国家">
              <span>{{ props.row.country }}</span>
            </el-form-item>
            <el-form-item label="年龄">
              <span>{{ props.row.age }}</span>
            </el-form-item>
            <el-form-item label="身份">
              <span>{{ props.row.identity }}</span>
            </el-form-item>
            <el-form-item label="创建时间">
              <span>{{ props.row.create }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="#" type="index" width="100" align="center"></el-table-column>
      <el-table-column label="用户 ID" prop="id" align="center"></el-table-column>
      <el-table-column label="用户名" prop="name" align="center"></el-table-column>
      <el-table-column label="电话" prop="phone" align="center"></el-table-column>
      <el-table-column label="用户状态" align="center">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template>
          <el-button size="medium" plain type="primary" icon="el-icon-edit" circle></el-button>
          <el-button size="medium" plain type="danger" icon="el-icon-delete" circle></el-button>
          <el-button size="medium" plain type="success" icon="el-icon-setting" circle :disabled="isdisabledFn"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-button plain type="primary" class="btn"><i class="el-icon-circle-plus-outline"></i>&nbsp;&nbsp;添加用户</el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      tableData: [
        {
          id: "12987122",
          name: "我是一个用户",
          gender:"女",
          phone: "7654321",
          email: "1234567@qq.com",
          location:"北京市",
          zip_code:"12345",
          country:"中国",
          address: "北京市海淀区交大东路",
          create: "2010-8-10",
          state: "true",
          nickname:"奶牛",
          identity:"管理员",
          age:"23"
        },
        {
          id: "12987122",
          gender:"男",
          name: "我还是一个用户",
          phone: "7654321",
          email: "1234567@qq.com",
          location:"上海市",
          zip_code:"12345",
          country:"中国",
          address: "北京市海淀区交大东路",
          create: "2010-8-10",
          state: "true",
          nickname:"奶牛",
          identity:"卖家",
          age:"23"
        },
        {
          id: "12987122",
          gender:"男",
          name: "我又是一个用户",
          phone: "7654321",
          email: "1234567@qq.com",
          location:"北京市",
          zip_code:"12345",
          country:"中国",
          address: "北京市海淀区交大东路",
          create: "2010-8-10",
          state: "true",
          nickname:"奶牛",
          identity:"普通用户",
          age:"23"
        }
      ]
    };
  },
  create() {
    this.getUserList();
  },
  methods: {
    // 获取用户列表
    async getUserList() {
      const res = await this.$http.get();
    },
    isdisabledFn() {
      //if (.equal("管理员")) {
        this.disabled = true;
      //} else {
        //this.disabled = false;
     // }
      return this.disabled;
    },
  }
};
</script>

<style>
.box-card {
  height: 100%;
}
.inputsearch {
  width: 500px;
}
.searchRow {
  margin-left: 700px;
  margin-top: 25px;
}
.table {
  margin-top: 30px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.btn{
   margin-top: 50px;
   margin-left: 1050px;
}
</style>