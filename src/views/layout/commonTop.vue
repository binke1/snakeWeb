<template>
    <div class="top-common-container">
      <div class="top-info">
        <div class="top-content width-1200">
          <div class="currency">
            <img src="static/images/pc_314_dq.png" alt="">
            <span>加元 $CAD</span>
            <span class="text-hint"></span>
          </div>
          <div class="user-info">
            <span v-if="userName">
              <span><span @click="$router.push('/personalCenter')">欢迎！{{userName}}</span><span @click="loginOut">[退出]</span></span>
              <span @click="$router.push('/personalCenter')">用户中心</span>
              |
              <span @click="viewHistory">充值历史</span>
              <span>消息<span class="msg">(16)</span></span>
            </span>
            <span v-else>
              <span @click="$router.push('/login')" class="login">登录</span>
              |
              <span class="register">注册</span>
              |
            </span>
          </div>
        </div>
      </div>
      <!--<div class="width-1200 search-container">-->
        <!--<div class="logo"></div>-->
        <!--<div class="search">-->
          <!--<div class="search-content">-->
            <!--<i class="el-icon-search"></i>-->
            <!--<input type="text" placeholder="请输入游戏或点卡名称">-->
            <!--<button>搜索</button>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div>-->
          <!--<img src="static/images/kf2.png" alt="">-->
        <!--</div>-->
      <!--</div>-->
      <div class="nav-box">
        <nav class="width-1200">
          <ul>
            <li @click="goToRouter(index)" :class="selectIndex===index?'active-menu':''" v-for="(list,index) in menuList" :key="index">{{list.title}}</li>
          </ul>
        </nav>
      </div>
    </div>
</template>

<script>
  import {
    getToken,
    getUserUuid,
    choseWhichName,
    removeUserUuid,
    removeToken,
    delCookie,
    getCookie,
    setCookie
  } from '@/utils/auth'
  import {logout} from '@/api/login'
  const menuList = [{
    title: '首页',
    router: '/'
  }, {
    title: '苹果App充值',
    router: '/'
  }]
  export default {
    name: "commonTop",
    data() {
      return {
        menuList: menuList,
        selectIndex: 0,
        userName: null
      }
    },
    mounted() {
      this.userName = getCookie('userName')
    },
    methods: {
      loginOut() {
        this.$store.dispatch('LogOut').then(() => {
          removeUserUuid()
          removeToken()
          delCookie('realFirstName')
          delCookie('realLastName')
          delCookie('userName')
          delCookie('token')
          this.$router.push({
            path: '/login'
          })
          // location.reload()
        })
      },
      goToRouter(index) {
        this.$router.push(this.menuList[index].router)
      },
      viewHistory() {
        this.$router.push({
          path: '/personalCenter/topUpHistory',
          query: {
            active: 2
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  $mainColor: #35A9E2;
  .top-common-container{
    .top-info{
      height: 36px;
      line-height: 36px;
      background-color: #f5f5f5;
      .top-content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .text-hint{
          color: #777;
          font-size: 12px;
          margin-left: 20px;
        }
        .currency{
          font-size: 12px;
          color: #3c3c3c;
          display: flex;
          align-items: center;
          img{
            margin-right: 10px;
          }
        }
        .user-info{
          .msg{
            color: #f00;
          }
          span{
            color: #777;
            font-size: 12px;
            cursor: pointer;
            span{
              margin: 0 5px;
            }
          }
        }
      }
    }
    .nav-box{
      height: 42px;
      background-color: $mainColor;
      color: #fff;
      nav{
        ul{
          margin: 0;
          list-style: none;
          display: flex;
          align-items: center;
          .active-menu{
            background-color: #0772a7;
          }
          li{
            cursor: pointer;
            line-height: 42px;
            padding: 0 17px;
            &:hover{
              background-color: #0772a7;
            }
          }
        }
      }
    }
    .search-container{
      margin: 36px auto;
      padding: 15px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo{
        width: 200px;
        height: 70px;
        background-color: red;
      }
      .search{
        border: 1px solid $mainColor;
        width: 495px;
        height: 40px;
        border-radius: 3px;
        overflow: hidden;
        .search-content{
          overflow: hidden;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          i{
            margin: 0 6px;
            color: #999;
          }
          input{
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            &::-webkit-input-placeholder{
              font-size: 14px;
            }
          }
          button{
            background-color: $mainColor;
            color: #fff;
            border: none;
            outline: none;
            width: 100px;
            height: 100%;
            letter-spacing: 5px;
            font-size: 16px;
          }
        }
      }
    }
  }
</style>
