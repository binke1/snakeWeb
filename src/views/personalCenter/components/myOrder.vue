<template>
    <div class="my-order">
      <h6 class="title">
        我的订单
      </h6>
      <div class="order-status">
        <ul>
          <li @click="changeStatus(index)" :class="select===index?'active-li':''" v-for="(list,index) in orderStatusList" :key="index">
            <span>
              <span>{{list.status}}</span>|
            </span>
          </li>
        </ul>
      </div>
      <div>
        <el-table border size="small" empty-text="暂无订单">
          <el-table-column align="center" width="400" label="商品名称"></el-table-column>
          <el-table-column align="center" label="订单金额"></el-table-column>
          <el-table-column align="center" label="订单状态"></el-table-column>
          <el-table-column align="center" label="操作"></el-table-column>
        </el-table>
        <div style="text-align: right;margin-top: 15px">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="pageNo"
            :page-size="pageSize"
            layout="total, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
    </div>
</template>

<script>
  const orderStatusList = [{
      status: '全部',
      value: ''
    }, {
      status: '待付款',
      value: ''
    }, {
      status: '待发货',
      value: ''
    }, {
      status: '待收货',
      value: ''
    }, {
      status: '已完成',
      value: ''
    }, {
      status: '退款/售后',
      value: ''
    }]
    export default {
      name: "myOrder",
      data() {
        return {
          orderStatusList: orderStatusList,
          select: 0,
          pageNo: 1,
          pageSize: 10,
          tableData: []
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
    .order-status{
      ul{
        list-style: none;
        padding: 0;
        border-bottom: 2px solid #ececec;
        margin-top: 15px;
        display: flex;
        align-items: center;
        li{
          width: 80px;
          margin-bottom: -2px;
          cursor: pointer;
          line-height: 30px;
          color: #ececec;
          font-size: 14px;
          span{
            span{
              font-size: 12px;
              display: inline-block;
              width: 76px;
              text-align: center;
              color: #000;
            }
          }
        }
        .active-li{
          border-bottom: 2px solid #36a9e2;
        }
      }
    }
  }
</style>
