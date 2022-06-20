<template>
  <div class="login_container">
<!--  头像区域 -->
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>

<!--  登录表单区域   loginFromRules(验证规则对象)-->
      <!--  给组件添加重置，先引用 ref loginFromRef(组件的实例对象)   -->
      <el-form ref="loginFromRef" :model="loginForm" :rules = "loginFromRules" label-width = "0" class="login_from">
       <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
      <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima"type="password"></el-input>
        </el-form-item>

        <!-- 按钮区域-->
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginform">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

import {login} from "@/network/userHandler";

export default {
  name: "Login",
  data() {
    return{
      /* 登录表单的验证对象 */
      loginForm: {
        username: '123',
        password: '123'
      },
      /* 表单的验证规则 */
      loginFromRules: {
        /* 验证用户名跟密码是否合法 */
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],

      }
    }
  },

  methods:{
    resetLoginform(){
      this.$refs.loginFromRef.resetFields();  /* 通过 this点出refs当前的表单引用对象，然后调用 resetFields 方法 */
    },
    login(){
        this.$post("/login",this.loginForm).then(res => {
          console.log(res)
          sessionStorage.username = res.username
          this.$router.push('/home');
        });
      login("/login", this.loginForm).then(res => {
        console.log(res)
        alert(res.m_name)
      })
    }
  }
}
</script>

<style scoped>
.login_container{
  height: 100%;
  background-color: #2b4b6b;
}
.login_box{
  position: absolute;
  width: 450px;
  height: 300px;
  background-color: aliceblue;
  border-radius: 3px;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

.avatar_box{
  position: absolute;
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #ffff;
}
.avatar_box img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}

.login_from{
  position: absolute;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  bottom:0
}

</style>
