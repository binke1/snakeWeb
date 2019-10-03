<template>
    <div class="common-top-two">
      <div class="width-1200 user-info">
        <span>
          <span>首页</span>
          <span>
            您好！{{userName}}
          </span>
        </span>
        <span>
          联系客服
        </span>
      </div>
    </div>
</template>

<script>
  import {getCookie} from "@/utils/auth";

  export default {
    name: "commonTopTwo",
    data() {
      return {
        userName: null
      }
    },
    mounted() {
      this.userName = getCookie('userName')
    }
  }
</script>

<style lang="scss" scoped>
  .common-top-two{
    height: 38px;
    line-height: 38px;
    background-color: #f5f5f5;
    .user-info{
      display: flex;
      align-items: center;
      justify-content: space-between;
      span{
        font-size: 12px;
        color: #999;
        cursor: pointer;
        span{
          margin-left: 20px;
        }
      }
    }
  }
</style>
