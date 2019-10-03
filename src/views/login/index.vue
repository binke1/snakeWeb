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
          <p class="login-admin">账户登录</p>
          <input @focus="setUserName" v-model="loginData.username" name="username" type="text" placeholder="邮箱/用户名">
          <div class="user-space">
            <span v-if="!isUserName">请填写邮箱/用户名</span>
          </div>
          <input @focus="setPassword" v-model="loginData.password" name="password" type="password" placeholder="密码">
          <div class="user-space">
            <span v-if="!isPassword">请填写密码</span>
          </div>
          <button @click="login">登录</button>
          <div class="user-register">
            <span>您还没有账号？<span @click="$router.push('/register')">立即注册</span></span>
            <span>忘记密码？</span>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
  import {
    setCookie,
    delCookie,
    getToken,
    getUserUuid
  } from "./../../utils/auth";
  import {
    login,
    getInfo,
    sendLoginSmPhoneNum
  } from "@/api/login";
  export default {
    name: 'login',
    data() {
      return {
        isUserName: true,
        isPassword: true,
        loginData: {
          username: null,
          password: null,
        }
      }
    },
    methods: {
      setUserName() {
        this.isUserName = true
        let username = document.getElementsByName('username')[0]
        username.style.border = '1px solid #dcdcdc'
      },
      setPassword() {
        this.isPassword = true
        let password = document.getElementsByName('password')[0]
        password.style.border = '1px solid #dcdcdc'
      },
      login() {
        if (this.loginData.username && this.loginData.password) {
          this.$store.dispatch('Login', this.loginData).then(() => {
            getInfo().then(response => {
              let getUserInfo = response.data.result
              delCookie('realFirstName')
              delCookie('realLastName')
              delCookie('userName')
              setCookie('userName', this.loginData.username)
              setCookie('realFirstName', escape(getUserInfo.firstName)) //存储用户firstName
              setCookie('realLastName', escape(getUserInfo.lastName)) //存储用户lastName
              this.$router.push('/')
            })
          })
        } else if (!this.loginData.username) {
          this.isUserName = false
          let username = document.getElementsByName('username')[0]
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
        .user-space{
          text-align: left;
          height: 30px;
          line-height: 30px;
          color: #ff0000;
          font-size: 12px;
        }
        .user-register{
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 20px;
          font-size: 14px;
          letter-spacing: 1px;
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
