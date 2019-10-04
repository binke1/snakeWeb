<template>
  <div class="place-order">
    <commonTopTwo></commonTopTwo>
    <div v-if="productData" class="order-container width-1200">
      <div class="order-left">
        <h3>订单信息</h3>
        <div>
          <div>
            <span>商品名称：</span>
            <span>{{productData.title}}</span>
          </div>
          <div>
            <span>充值金额：</span>
            <span>{{productData.beforeTaxPrice}}CAD * {{placeOrderData.quantity}}</span>
          </div>
          <div>
            <span>支付方式：</span>
            <span>支付宝、微信、信用卡</span>
          </div>
          <div>
            <span>小计：</span>
            <span>C${{(productData.beforeTaxPrice*placeOrderData.quantity).toFixed(2)}}CAD</span>
          </div>
          <div v-if="productData.hasTax">
            <span>税：</span>
            <span>C${{((productData.gstRate+productData.pstRate)*productData.beforeTaxPrice*placeOrderData.quantity).toFixed(2)}}CAD</span>
          </div>
          <div>
            <span>付款金额：</span>
            <span>C${{((productData.gstRate+productData.pstRate)*productData.beforeTaxPrice*placeOrderData.quantity + productData.beforeTaxPrice*placeOrderData.quantity).toFixed(2)}}CAD</span>
           </div>
        </div>
      </div>
      <div class="order-right">
        <p class="order-right-sure">请确认订单信息</p>
        <p class="sure-hint">登录代充，请备注密码或联系客服</p>
        <div class="user-apple">
          <span>充值 APPLE ID：</span>
          <input v-model="placeOrderData.appleId" type="text">
          <span>*</span>
        </div>
        <div class="order-comment">
          <span>订单备注：</span>
          <textarea v-model="placeOrderData.comment" placeholder="请输入备注信息..." cols="30" rows="5"></textarea>
        </div>
      </div>
    </div>
    <div class="pay-method">
      <span>付款方式</span>
       <div>支付宝</div>
       <div>微信</div>
    </div>
    <div class="submit-order width-1200">
      <button @click="submitOrder">提交订单</button>
    </div>
  </div>
</template>

<script>
  import commonTopTwo from '@/views/layout/commonTopTwo'
  import {getCookie,getToken} from "@/utils/auth";
  import {createOrder} from 'api/order'
  import {gePrepaidCardById} from 'api/product'
    export default {
      name: "payOrder",
      components: {
        commonTopTwo
      },
      data() {
        return {
          productId: null,
          placeOrderData: {
            type: 'prepaid',
            prepaidCardId: null,
            quantity: 1,
            appleId: null,
            comment: null
          },
          productData: null
        }
      },
      mounted() {
        if (this.$route.query.id) {
          this.productId = this.$route.query.id
          this.gePrepaidCardById(this.productId)
        }
        if (this.$route.params.placeOrderData) {
          this.placeOrderData = this.$route.params.placeOrderData
        } else {
          this.$router.go(-1)
        }
      },
      methods: {
        gePrepaidCardById(id) {
          gePrepaidCardById(id).then(response => {
            console.log(response)
            this.productData = response.data.result
          })
        },
        submitOrder() {
          if (getToken()) {
            createOrder(this.placeOrderData).then(response => {

            })
          } else {
            this.$router.push({
              path: '/login',
              name: 'login',
              query: {
                path: '/productDetails',
                id: this.productId,
                quantity: this.placeOrderData.quantity
              },
              params: {
                placeOrderData: this.placeOrderData
              }
            })
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
  .place-order{
    .order-container{
      border: 1px solid #dbdbdb;
      margin: 30px auto 15px;
      display: flex;
      .order-left{
        width: 380px;
        border-right: 1px solid #dbdbdb;
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
        >div{
          padding: 0 25px;
          div{
            font-size: 12px;
            margin: 15px 0;
            color: #888;
            >span{
              &:first-child{
                display: inline-block;
                width: 60px;
                text-align: right;
              }
            }
          }
        }
      }
      .order-right{
        padding-left: 90px;
        .order-right-sure{
          font-size: 20px;
          color: #333;
        }
        .sure-hint{
          color: #fe6f00;
          font-size: 12px;
          margin: 10px 0;
        }
        div{
          font-size: 12px;
          color: #777;
          textarea{
            border: 1px solid #bcbcbc;
            width: 480px;
            resize: none;
            border-radius: 3px;
            padding: 2px 14px;
          }
          >span{
            display: inline-block;
            width: 100px;
          }
        }
        .order-comment{
          display: flex;
          align-items: flex-start;
          margin: 20px 0 10px;
        }
        .user-apple{
          input{
            width: 290px;
            height: 26px;
            border: 1px solid #bcbcbc;
            border-radius: 6px;
          }
          span{
            &:last-child{
              color: #f00;
            }
          }
        }
      }
    }
    .pay-method{
      width: 1104px;
      margin: auto;
      border: 1px solid #dbdbdb;
      padding: 16px 48px;
      display: flex;
      align-items: center;
      span{
        color: #777;
        font-size: 12px;
      }
      >div{
        margin-left: 30px;
      }
    }
    .submit-order{
      margin: 20px auto 30px;
      button{
        width: 164px;
        color: #fff;
        cursor: pointer;
        outline: none;
        border: none;
        font-size: 18px;
        border-radius: 2px;
        background-color: #e9322e;
        height: 44px;
      }
    }
  }
</style>
