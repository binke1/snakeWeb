<template>
  <div class="place-order">
    <commonTopTwo></commonTopTwo>
    <div class="order-container width-1200">

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
    }
  }
</style>
