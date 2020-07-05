<template>
  <div class="login-wrap">
    <el-form class="login-form" label-position="top" label-width="80px" :model="loginform">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="loginform.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginform.password" type="password"></el-input>
      </el-form-item>
      <br />
      <el-button @click.prevent="login()" class="login-btn" type="primary" plain>登录</el-button>
      <br />
      <el-link type="primary">没有账号，点我注册>>>></el-link>
      <el-link type="primary" style="float:right">忘记密码，点我找回>>>></el-link>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginform: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    //登录请求
    async login() {
      if (!this.username) {
        this.$message({
          message: "请输入用户名",
          center: true,
          type: 'error'
        });
      } else if (!this.password) {
        this.$message({
          message: "请输入密码",
          center: true,
          type: 'error'
        });
      } else {
        const res = await this.$http.post("login", this.loginform);
        const {
          data,
          meta: {}
        } = res.data;

        //登录成功，跳转home页面，提示成功
        if (status == 200) {
          this.$router.push({ name: "home" });
          this.$message.success("");
        }

        //登录失败
        else {
          this.$message.error("");
        }
      }
    }
  }
};
</script>

<style>
.login-wrap {
  height: 100%;
  background-color: #324452;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrap .login-form {
  width: 400px;
  background: #ffffff;
  border-radius: 40px;
  padding: 30px;
}
.login-wrap .login-btn {
  width: 80%;
  display: block;
  margin: 0 auto;
}
</style>