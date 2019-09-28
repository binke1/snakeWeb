<template>
    <div class="product-common">
      <img @click="viewProduct" :title="data.title" src="static/images/product.jpg" alt="">
      <div class="original-price">本店售价 ：<b>${{data.beforeTaxPrice}}USD</b></div>
      <div class="limit-price">限时价格 ：<b>${{data.beforeTaxPrice}}USD</b></div>
    </div>
</template>

<script>
    export default {
      name: "productCommon",
      props: ['data'],
      methods: {
        viewProduct() {
          this.$router.push({
            path: '/productDetails',
            query: {
              id: this.data.id
            }
          })
        }
      }
    }
</script>

<style lang="scss" scoped>
  .product-common{
    width: 150px;
    height: 165px;
    text-align: center;
    margin: 8px 0;
    img{
      width: 100px;
      height: 100px;
      border: 1px solid #e3e3e3;
      cursor: pointer;
    }
    .limit-price{
      color: #e42e2f;
    }
    .original-price{
      color: #7b7b7b;
    }
    div{
      font-size: 12px;
      margin: 10px 0;
    }
  }
</style>
