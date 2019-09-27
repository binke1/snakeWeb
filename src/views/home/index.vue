<template>
    <div class="home-container">
      <topCommon></topCommon>
      <carouse></carouse>
      <div class="product-container width-1200">
        <h3>推荐商品</h3>
        <div class="product-list">
          <productCommon :data="list" v-for="(list,index) in productList" :key="index"></productCommon>
        </div>
      </div>
    </div>
</template>

<script>
  import topCommon from '@/views/layout/commonTop'
  import carouse from '@/views/layout/carouse'
  import productCommon from '@/views/layout/productCommon'
  import {getProductList} from '@/api/product'
    export default {
      name: "index",
      components: {
        topCommon,
        carouse,
        productCommon
      },
      data() {
        return {
          productList: [],
          listQuery: {
            sku: null,
            type: null
          }
        }
      },
      mounted() {
        this.getProductList()
      },
      methods: {
        getProductList() {
          getProductList(this.listQuery).then(response => {
            console.log(response)
            this.productList = response.data.result
          })
        }
      }
    }
</script>

<style lang="scss" scoped>
  $mainColor: #35A9E2;
  .home-container{
    h3{
      color: #4c4c4c;
      padding-left: 20px;
    }
    .product-container{
      .product-list{
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
</style>
