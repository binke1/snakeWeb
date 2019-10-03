<template>
  <div class="width-1200 login-container">
    <div class="logo-info">
      <img src="static/images/logo.png" alt="">
      <span @click="$router.go(-1)"><i class="el-icon-arrow-left"></i>返回上一步</span>
    </div>
    <div class="login-form">
      <img src="static/images/bg.jpg" alt="">
      <el-card>
        <div class="user-login">
          <p class="login-admin">注册账号</p>
          <input @focus="setUserName" v-model="registerData.email" name="email" type="text" placeholder="请输入邮箱账号">
          <div class="user-space">
            <span v-if="!isUserName">请输入email</span>
          </div>
          <input @focus="setPassword" v-model="registerData.newPassword" name="password" type="password" placeholder="请输入密码">
          <div class="user-space">
            <span v-if="!isPassword">请输入密码</span>
          </div>
          <div class="server">注册即代表同意<span>《服务条款》</span>及<span>《隐私协议》</span></div>
          <button @click="register">注册</button>
          <div class="user-register">
            <span>已有账号？<span @click="$router.push('/login')">立即登录</span></span>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
  import {register} from '@/api/register'
  export default {
    name: 'register',
    data() {
      return {
        isUserName: true,
        isPassword: true,
        registerData: {
          email: null,
          newPassword: null
        }
      }
    },
    methods: {
      setUserName() {
        this.isUserName = true
        let username = document.getElementsByName('email')[0]
        username.style.border = '1px solid #dcdcdc'
      },
      setPassword() {
        this.isPassword = true
        let password = document.getElementsByName('password')[0]
        password.style.border = '1px solid #dcdcdc'
      },
      register() {
        if (this.registerData.email && this.registerData.newPassword) {
          register(this.registerData, 'email').then(response => {
            this.$message({
              message: '注册成功！',
              type:'success',
              center: true
            })
            this.$router.push('/login')
          })
        } else if (!this.registerData.email) {
          this.isUserName = false
          let username = document.getElementsByName('email')[0]
          username.style.border = '1px solid #ff0000'
        } else {
          this.isPassword = false
          let password = document.getElementsByName('password')[0]
          password.style.border = '1px solid #ff0000'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .login-container{
    .logo-info{
      margin: 100px 0 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span{
        color: #3fa4df;
        font-size: 12px;
        letter-spacing: 1px;
        cursor: pointer;
      }
    }
    .login-form{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .user-login{
        text-align: center;
        padding: 0 15px 40px;
        .login-admin{
          font-size: 20px;
          color: #393939;
          line-height: 20px;
          padding-top: 30px;
          padding-bottom: 20px;
          letter-spacing: 1px;
        }
        .server{
          text-align: left;
          font-size: 12px;
          color: #999;
          span{
            color: #3fa4df;
          }
        }
        .user-space{
          text-align: left;
          height: 30px;
          line-height: 30px;
          color: #ff0000;
          font-size: 12px;
        }
        .user-register{
          margin-top: 20px;
          font-size: 14px;
          letter-spacing: 1px;
          text-align: center;
          >span{
            &:first-child{
              color: #999;
              span{
                color: #3fa4df;
                cursor: pointer;
              }
            }
            &:last-child{
              cursor: pointer;
              color: #393939;
            }
          }
        }
        input{
          width: 334px;
          height: 44px;
          border: 1px solid #dcdcdc;
          font-size: 14px;
          padding-left: 12px;
          border-radius: 5px;
          line-height: 44px;
          outline: none;
        }
        button{
          width: 100%;
          height: 46px;
          background-color: #3fa4df;
          margin-top: 8px;
          cursor: pointer;
          letter-spacing: 1px;
          border-radius: 5px;
          border: none;
          outline: none;
          font-size: 18px;
          color: #fff;
          &:hover{
            background-color: #2175a7;
          }
        }
      }
    }
  }
</style>
