<template>
    <div class="product-details">
      <topCommon></topCommon>
      <div v-if="productData" class="width-1200 product-info">
        <div class="w-250">
          <div>
            <h2>产品列表</h2>
            <div class="all-product" v-if="productList.length">
              <div class="product-list" v-for="(list,index) in productList" :key="index">
                <img src="static/images/product.jpg" alt="">
                <p>
                  <span v-if="list.title">{{list.title.slice(0,10)}}</span>
                  <span v-else>{{list.title}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="right-info">
          <div class="buy-product">
            <div class="buy-product-image">
              <img src="static/images/product.jpg" alt="">
            </div>
            <div class="buy-product-summary">
              <h3>{{productData.title}}</h3>
              <div class="red-style">请注意区服选择</div>
              <div>
                <span>本店售价：</span>
                <span class="price-one">${{productData.beforeTaxPrice}}USD</span>
              </div>
              <div>
                <span>限时价格：</span>
                <span class="price">${{productData.beforeTaxPrice}}USD</span>
              </div>
              <div style="margin-top: 20px">
                <span>商品总价：</span>
                <span class="price">${{productData.beforeTaxPrice}}USD</span>
              </div>
              <div class="product-active">
                <span>满减活动：</span>
                <div class="active-product">
                  <div><span>下单满减</span> 下单满减，享98折</div>
                  <div><span>下单满减</span> 下单满减，享98折</div>
                  <div><span>下单满减</span> 下单满减，享98折</div>
                </div>
              </div>
              <div>
                <span>购买数量：</span>
                <span>
                   <el-input-number v-model="placeOrderData.quantity" size="small" :min="1"></el-input-number> 件
                  <span class="text-hint">（注：每一件代表100元）</span>
                </span>
              </div>
              <!--<div>-->
                <!--<span>*充值帐号：</span>-->
                <!--<span>-->
                   <!--<el-input style="width: 160px" v-model="num" size="small" :min="1"></el-input>-->
                  <!--<span class="text-hint">（请填写您需要充值的游戏账号或通行证）</span>-->
                <!--</span>-->
              <!--</div>-->
              <div class="user-buy-btn">
                <button @click="createOrder">立即购买</button>
              </div>
            </div>
          </div>
          <div class="product-tab">
            <div>
              <ul>
                <li @click="changeTab(index)" :class="select===index?'active-tab':''" v-for="(list,index) in  tabList" :key="index">{{list}}</li>
              </ul>
            </div>
            <div class="tab-switch">
              <div class="product-summary-tab" v-if="select===0">
                <div>
                  <div class="just">
                  <span>
                    <span class="small-title">商品面值：</span>
                    <span>${{productData.beforeTaxPrice}}USD</span>
                  </span>
                    <span>
                    <span class="small-title">商品类型：</span>
                    <span>人工代充</span>
                  </span>
                    <span>
                    <span class="small-title">品牌：</span>
                    <span>苹果</span>
                  </span>
                  </div>
                  <div>
                    <span class="small-title">适用范围：</span>
                    <div>
                      <p v-for="(item,index) in shoppingDetails.application" :key="index">{{item}}</p>
                    </div>
                    <!--<div>剑侠情缘3通宝10000通宝</div>-->
                  </div>
                  <div>
                    <span class="small-title">如何收货：</span>
                    <div>
                      <p v-for="(item,index) in shoppingDetails.takeDelivery" :key="index">{{item}}</p>
                      <!--<p>1、付款成功后，系统将根据您选择的分区及填写的账户信息，自动充值完成</p>-->
                      <!--<p>2、官方查询网址：http://my.xoyo.com/users/seeBalance</p>-->
                    </div>
                  </div>
                  <div>
                    <span class="small-title">支付方式：</span>
                    <div>
                      <p v-for="(item,index) in shoppingDetails.payMethod" :key="index">{{item}}</p>
                      <!--<p>1、支持PAYPAL账户及各种信用卡支付（Visa,MasterCard,Maestro,Discover,American Express,JCB,Carte Aurore,Carte Bancaire,Lastchrift,Carta prepagata Paypal,Postepay,Cofinoga ou Privilège,4 étoiles）</p>-->
                      <!--<p>2、支持银行汇款及KA-CN用户余额支付</p>-->
                    </div>
                  </div>
                  <div>
                    <span class="small-title">购买流程：</span>
                    <div>
                      <p v-for="(item,index) in shoppingDetails.processPurchase" :key="index">{{item}}</p>
                      <!--<p>1.在网站中直接输入您要充值的商品件数（一件为100元人民币）</p>-->
                      <!--<p>2.选择充值区域</p>-->
                      <!--<p>3.请您填写好数量及您要充值的 游戏账号<span style="color: #0000ff">（非游戏昵称，避免账号填写错误导致充值后无法修正）</span></p>-->
                      <!--<p>4.确认订单信息，选择支付方式，提交订单，结算付款</p>-->
                    </div>
                  </div>
                </div>
                <div style="color: #8b8b8b;font-size: 12px;padding: 10px 0;line-height: 20px">
                  KA-CN金山直充服务是使用官方线路进行充值。所以没有出错的可能性。您在填写资料的时候，请注意资料填写是否正确。一旦您的填写出现错误，如果系统中存在您错误填写的用户，那么就会误充给他。如果系统中并无此人，系统会自动退款，我们会再次为您提交正确的您的充值账号。
                </div>
              </div>
              <div v-else>
                2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import {gePrepaidCardById,getPageProductList} from 'api/product'
  import {createOrder} from 'api/order'
  import topCommon from '@/views/layout/commonTop'
  const tabList = ['商品描述','用户评论']
    export default {
      name: "productDetails",
      components: {
        topCommon
      },
      data() {
        return {
          type: 'apple',
          tabList: tabList,
          productId: null,
          productData: null,
          num: 1,
          select: 0,
          pageNo: 1,
          pageSize: 10,
          productList: [],
          total: 0,
          shoppingDetails: null,
          placeOrderData: {
            type: 'prepaid',
            prepaidCardId: null,
            quantity: 0
          }
        }
      },
      mounted() {
        this.getAllInfo()
        this.getPageProductList()
        if (this.$route.query.id) {
          this.productId = this.$route.query.id
          this.placeOrderData.prepaidCardId = this.$route.query.id
          this.gePrepaidCardById(this.productId)
        }
      },
      methods: {
        // 创建订单
        createOrder() {
          createOrder(this.placeOrderData).then(response => {
            this.$message({
              message: '订单已提交',
              type: 'success',
              center: true
            })
          })
        },
        getAllInfo() {
          axios.get('static/shoppingDetails.json').then(response => {
            let data = response.data.result
            this.shoppingDetails = data[this.type]
          })
        },
        getPageProductList() {
          getPageProductList(this.pageNo, this.pageSize, {}).then(response => {
            this.productList = response.data.result.list
            this.total = response.data.result.recordsTotal
          })
        },
        gePrepaidCardById(id) {
          gePrepaidCardById(id).then(response => {
            this.productData = response.data.result
          })
         },
        changeTab(index) {
          this.select = index
        }
      }
    }
</script>

<style lang="scss" scoped>
  .product-details{
    .red-style{
      color: #ff0000;
    }
    .price-one{
      color: #8b8b8b;
      font-weight: bold;
    }
    .price{
      color: #cc0000;
      font-weight: bold;
    }
    .text-hint{
      font-size: 12px;
    }
    .product-info{
      margin-top: 20px;
      text-align: center;
      display: flex;
      justify-content: space-between;
      .w-250{
        width: 250px;
        >div{
          border-width: 3px 1px 1px 1px;
          border-color: #fd843d #e1e1e1 #e1e1e1 #e1e1e1;
          border-style: solid;
        }
        .all-product{
          display: flex;
          justify-content: space-around;
        }
        .product-list{
          img{
            width: 110px;
            height: 110px;
            border: 1px solid #e3e3e3;
          }
          p{
            margin: 8px 0;
            font-size: 12px;
          }
        }
      }
      .right-info{
        width: 940px;
        .buy-product{
          display: flex;
          .buy-product-image{
            width: 310px;
            margin: 0 5px;
            img{
              width: 200px;
              height: 200px;
              border: 1px solid #e3e3e3;
            }
          }
          .buy-product-summary{
            color: #8b8b8b;
            text-align: left;
            h3{
              margin-top: 0;
            }
            >div{
              margin: 10px 0;
              font-size: 14px;
            }
            .red-style{
              font-size: 12px;
            }
            .product-active{
              display: flex;
              margin-top: 20px
            }
            .active-product{
              background-color: #fff4eb;
              color: #FF8F3D;
              padding: 10px;
              >div{
                margin: 10px 0;
               >span{
                 display: inline-block;
                 padding: 5px;
                 border: 1px solid #ff8f3d;
               }
              }
            }
            .user-buy-btn{
              margin-top: 25px;
              button{
                cursor: pointer;
                outline: none;
                border: none;
                width: 170px;
                height: 44px;
                border-radius: 5px;
                background-color: #e70012;
                color: #fff;
                font-size: 16px;
              }
            }
          }
        }
        .product-tab{
          margin-top: 30px;
          ul{
            list-style: none;
            margin: 0;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #ccc;
            li{
              width: 80px;
              padding: 8px 0;
              cursor: pointer;
            }
            .active-tab{
              font-weight: bold;
              border-top: 3px solid #fd843d ;
            }
          }
          .tab-switch{
            text-align: left;
          }
          .product-summary-tab{
            margin: 20px 0;
            font-size: 12px;
            p{
              line-height: 30px;
              margin: 0;
            }
           >div:first-child{
             border: 1px solid #eef5ff;
             .just{
               justify-content: space-between;
             }
             >div{
               &:nth-child(odd){
                 background-color: #eef5ff;
               }
               >span{
                 display: inline-block;
                 width: 120px;
               }
               div{
                 width: 100%;
               }
               padding: 10px 50px;
               display: flex;
               align-items: center;
             }
           }
          }
        }
      }
    }
    .small-title{
      color: #045185;
    }
  }
</style>
