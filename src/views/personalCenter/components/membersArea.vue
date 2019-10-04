<template>
    <div class="members-area">
      <div class="user-info-top">
        <div>
          <div class="user-info">
            <img src="static/images/travel.png" alt="">
            <span class="user-name common-color">hi,{{userName}}</span>
            <span>
          余额:
          <span class="balance">${{balance.toFixed(2)}}USD</span>
        </span>
            <span>
          优惠券:{{discountCoupon}}个 <span class="common-color">[查看]</span>
        </span>
          </div>
        </div>
        <div>
          <div>公告：</div>
          <p>尊敬的用户，为感谢广大海外华人长期以来对本网站的支持与厚爱，ka-cn.com网站已经全面开启自动充值、卡密自动发货系统，发货更快速，充值更便捷。</p>
        </div>
      </div>
      <div class="user-info-bottom">
        <h2>服务标准</h2>
        <div class="we-advantage">
          <div>
            <h3>7天无理由退货</h3>
            <div>
              <img src="static/images/advantage1.jpg" alt="">
            </div>
          </div>
          <div>
            <h3>极速发货</h3>
            <div>
              <img src="static/images/advantage2.jpg" alt="">
            </div>
          </div>
          <div>
            <h3>自动充值</h3>
            <div>
              <img src="static/images/advantage3.jpg" alt="">
            </div>
          </div>
          <div>
            <h3>人工代购</h3>
            <div>
              <img src="static/images/advantage4.jpg" alt="">
            </div>
          </div>
          <div>
            <h3>超时赔付</h3>
            <div>
              <img src="static/images/advantage5.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import bus from '@/utils/eventBus'
  import {getCookie} from "@/utils/auth";
  export default {
    name: "membersArea",
    data() {
      return {
        userName: null,
        balance: 0,
        discountCoupon: 0
      }
    },
    mounted() {
      bus.$emit('changeActive', 0)
      this.userName = getCookie('userName')
    }
  }
</script>

<style lang="scss" scoped>
  .members-area{
    .user-info-top{
      display: flex;
      overflow: hidden;
      border-bottom: 1px solid #e5e5e5;
      padding-bottom: 20px;
      >div{
        &:first-child{
          width: 600px;
        }
        &:last-child{
          width: 330px;
          border-left: 1px solid #e5e5e5;
          padding-left: 30px;
          div{
            margin-top: 25px;
            color: #4b4b4b;
            font-size: 12px;
            font-weight: bold;
          }
          p{
            margin-top: 16px;
            color: #646464;
            font-size: 12px;
            line-height: 23px;
          }
        }
      }
      .user-info{
        display: flex;
        align-items: center;
        font-size: 12px;
        >span{
          margin: 0 10px;
          .balance{
            font-size: 14px;
          }
        }
        img{
          width: 64px;
          height: 64px;
          border-radius: 50%;
        }
        .common-color{
          color: #36a9e2;
        }
        .user-name{
          font-weight: bold;
        }
      }
    }
    .user-info-bottom{
      h2{
        font-size: 14px;
        color: #4cb0e4;
        margin-top: 20px;
      }
      .we-advantage{
        display: flex;
        margin: auto;
        h3{
          font-size: 18px;
          text-align: center;
          color: #8b8b8b;
          margin: 0;
        }
        >div{
          margin-top: 20px;
          width: 180px;
          text-align: center;
          &:not(:last-child){
            border-right: 1px solid #e5e5e5;
          }
          img{
            width: 116px;
            height: 116px;
          }
        }
      }
    }
  }
</style>
