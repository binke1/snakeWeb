<template>
  <div class="place-order">
    <commonTopTwo></commonTopTwo>
    <div class="order-container width-1200">
      <div class="order-left">
        <h3>订单信息</h3>
        <div>
          <div>
            <span>商品名称：</span>
            <span></span>
          </div>
          <div>
            <span>充值金额：</span>
          </div>
        </div>
      </div>
      <div class="order-right">

      </div>
    </div>
  </div>
</template>

<script>
  import commonTopTwo from '@/views/layout/commonTopTwo'
  import {createOrder} from 'api/order'
    export default {
      name: "payOrder",
      components: {
        commonTopTwo
      },
      methods: {
        createOrder() {
          createOrder(this.placeOrderData).then(response => {
            this.$message({
              message: '订单已提交',
              type: 'success',
              center: true
            })
          })
        }
      }
    }
</script>

<style lang="scss" scoped>
  .place-order{
    .order-container{
      border: 1px solid #dbdbdb;
      margin: 30px auto;
      .order-left{
        width: 380px;
        h3{
          margin: 0;
          background-color: #f3f3f3;
          color: #333;
          font-size: 14px;
          height: 44px;
          line-height: 44px;
          border-bottom: 1px solid #dbdbdb;
          text-indent: 25px;
        }
      }
    }
  }
</style>
