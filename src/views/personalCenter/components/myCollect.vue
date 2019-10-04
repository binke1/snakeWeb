<template>
  <div class="my-order">
    <h6 class="title">
      我的收藏
    </h6>
    <div>
      <div>
        <el-table border size="small" empty-text="暂无收藏">
          <el-table-column align="center" width="400" label="商品名称"></el-table-column>
          <el-table-column align="center" label="价格"></el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <button>立即购买</button>
              <button>删除</button>
            </template>
          </el-table-column>
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
      bus.$emit('changeActive', 3)
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
