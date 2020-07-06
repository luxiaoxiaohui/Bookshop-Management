<template>
  <el-card class="box-card">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>云店铺管理</el-breadcrumb-item>
      <el-breadcrumb-item>云店铺列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-row class="searchRow">
      <el-col>
        <el-input placeholder="请输入内容" v-model="input" class="inputsearch" clearable>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>

    <el-table :data="tableData" style="width: 100%" class="table">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="店铺ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="店铺名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="手机号">
              <span>{{ props.row.phone }}</span>
            </el-form-item>
            <el-form-item label="固定电话">
              <span>{{ props.row.telephone }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="创建时间">
              <span>{{ props.row.create }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="#" type="index" width="100" align="center"></el-table-column>
      <el-table-column label="店铺 ID" prop="id" align="center"></el-table-column>
      <el-table-column label="店铺名称" prop="name" align="center"></el-table-column>
      <el-table-column label="电话" prop="phone" align="center"></el-table-column>
      <el-table-column label="店铺状态" align="center">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template>
          <el-button size="medium" plain type="primary" icon="el-icon-edit" circle></el-button>
          <el-button size="medium" plain type="danger" icon="el-icon-delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-button plain type="primary" class="btn"><i class="el-icon-circle-plus-outline"></i>&nbsp;&nbsp;添加云店铺</el-button>
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
          name: "我是一个店铺",
          phone: "7654321",
          telephone: "1234567",
          address: "北京市海淀区交大东路",
          create: "2010-8-10",
          state: "true"
        },
        {
          id: "12987123",
          name: "我还是一个店铺",
          phone: "7654321",
          telephone: "1234567",
          address: "北京市海淀区交大西路",
          create: "2010-8-11",
          state: "true"
        },
        {
          id: "12987123",
          name: "我又是一个店铺",
          phone: "7654321",
          telephone: "1234567",
          address: "北京市海淀区交大西路",
          create: "2010-8-13",
          state: "true"
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
    }
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