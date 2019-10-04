<template>
  <div class="my-order">
    <h6 class="title">
      我的评论
    </h6>
    <div>
      <div class="no-data">
        暂时还没有任何用户评论
      </div>
    </div>
  </div>
</template>

<script>
  import bus from '@/utils/eventBus'
  export default {
    name: "myOrder",
    data() {
      return {
        select: 0,
        pageNo: 1,
        pageSize: 10,
        tableData: [],
        total: 0
      }
    },
    mounted() {
      bus.$emit('changeActive', 5)
    },
    methods: {
      changeStatus(index) {
        this.select = index
      },
      handleCurrentChange(pageNo) {
        this.pageNo = pageNo
      }
    }
  }
</script>

<style lang="scss" scoped>
  .my-order{
    width: 100%;
    h6{
      margin-top: 5px;
      height: 28px;
      line-height: 28px;
      font-size: 12px;
      color: #36a9e2;
      border-bottom: 1px solid #36a9e2;
    }
    .no-data{
      color: #f00;
      font-weight: bold;
      font-size: 14px;
      text-align: center;
      margin-top: 80px;
    }
  }
</style>
