<template>
    <div class="carouse-container width-1200">
      <el-carousel height="200px">
        <el-carousel-item v-for="(item,index) in imgList" :key="index">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
  const imgList = [require('static/images/swiper1.jpg'),require('static/images/swiper2.jpg'),require('static/images/swiper3.jpg'),require('static/images/swiper4.jpg')]
    export default {
      name: "carouse",
      data() {
        return {
          imgList: imgList
        }
      }
    }
</script>

<style lang="scss" scoped>
  .carouse-container{
    margin: 10px auto;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
