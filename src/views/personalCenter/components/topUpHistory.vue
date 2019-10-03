<template>
  <div class="my-order">
    <h6 class="title">
      充值历史
    </h6>
    <div>
      <div v-if="tableData.length">
        <el-table border size="small" empty-text="暂无订单">
          <el-table-column align="center" width="400" label="商品名称"></el-table-column>
          <el-table-column align="center" label="订单金额"></el-table-column>
          <el-table-column align="center" label="订单状态"></el-table-column>
          <el-table-column align="center" label="操作"></el-table-column>
        </el-table>
      </div>
      <div style="text-align: right;margin-top: 15px">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="pageNo"
          :page-size="pageSize"
          layout="total, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
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
  }
</style>
