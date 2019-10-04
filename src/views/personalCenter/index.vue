<template>
    <div class="personal-container">
      <topCommon></topCommon>
      <div class="main width-1200">
        <div>
          <div>用户中心</div>
          <ul>
            <li @click="changeMenu(index)" :class="select===index?'active-li':''" v-for="(list,index) in menuList" :key="index">{{list.title}}</li>
          </ul>
        </div>
        <div>
          <router-view/>
        </div>
      </div>
    </div>
</template>

<script>
  import bus from '@/utils/eventBus'
  import topCommon from '@/views/layout/commonTop'
  const menuList = [
    {
      icon: '',
      title: '会员专区',
      router: '/personalCenter/membersArea'
  }, {
    icon: '',
    title: '我的订单',
      router: '/personalCenter/myOrder'
  }, {
    icon: '',
    title: '充值历史',
      router: '/personalCenter/topUpHistory'
  }, {
    icon: '',
    title: '我的收藏',
      router: '/personalCenter/myCollect'
  }, {
    icon: '',
    title: '我的优惠券',
      router: '/personalCenter/myDiscountCoupon'
  }, {
    icon: '',
    title: '我的评论',
      router: '/personalCenter/myComment'
  }, {
    icon: '',
    title: '资金管理',
      router: '/personalCenter/fundManagement'
  }, {
    icon: '',
    title: '账户设置',
      router: '/personalCenter/accountSetting'
  }, {
    icon: '',
    title: '账单地址',
      router: '/personalCenter/billingAddress'
  }/*, {
    icon: '',
    title: '我的认证',
      router: '/personalCenter/membersArea'
  }*/]
    export default {
      name: "index",
      components: {
        topCommon
      },
      data() {
        return {
          menuList: menuList,
          select: 0
        }
      },
      created() {
        bus.$on('changeActive', index => {
          this.select = index
        })
      },
      mounted() {
        if (this.$route.query.active) {
          this.select = this.$route.query.active
        }
      },
      methods: {
        changeMenu(index) {
          if (this.select !== index) {
            this.select = index
            this.$router.push(this.menuList[index].router)
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
  .personal-container{
    .main{
      margin: 30px auto;
      display: flex;
      align-items: flex-start;
      >div{
        width: 100px;
        &:first-child{
          border-right: 1px solid #e5e5e5;
          >div{
            font-size: 14px;
            color: #0772a7;
            font-weight: bold;
          }
          ul{
            color: #8b8b8b;
            font-size: 12px;
            list-style: none;
            margin: 0;
            padding: 0 20px 0 10px;
            li{
              margin: 18px 0;
              cursor: pointer;
            }
            .active-li{
              color: #0772a7;
            }
          }
        }
        &:last-child{
          width: 1100px;
          padding-left: 40px;
        }
      }
    }
  }
</style>
