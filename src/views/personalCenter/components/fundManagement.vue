<template>
  <div class="my-order">
    <h6 class="title">
      资金管理
      <div class="coupon-status">
        <ul>
          <li @click="changeStatus(index)" :class="select===index?'active-li':''" v-for="(list,index) in menuList" :key="index">
            <span>
              <span>{{list.title}}</span>|
            </span>
          </li>
        </ul>
      </div>
    </h6>
    <div>
      <div>
        <el-table border size="small" empty-text="暂无记录">
          <el-table-column align="center" width="400" label="操作时间"></el-table-column>
          <el-table-column align="center" label="金额"></el-table-column>
          <el-table-column align="center" label="备注"></el-table-column>
        </el-table>
        <div class="money-hint">
          您当前的可用资金为：
          <span>$0.00USD(C$0.00CAD)</span>
        </div>
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
  const menuList = [{
    title: '提现',
    value: ''
  }, {
    title: '查看账户明细',
    value: ''
  }]
  export default {
    name: "myOrder",
    data() {
      return {
        menuList: menuList,
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
      display: flex;
      align-items: center;
      justify-content: space-between;
      .coupon-status{
        margin-bottom: 5px;
        ul{
          list-style: none;
          padding: 0;
          margin-top: 15px;
          display: flex;
          align-items: center;
          li{
            font-weight: lighter;
            width: 80px;
            margin-bottom: -2px;
            cursor: pointer;
            line-height: 30px;
            color: #8b8b8b;
            span{
              span{
                font-size: 12px;
                display: inline-block;
                width: 75px;
                text-align: center;
              }
            }
          }
          .active-li{
            span{
              span{
                color: #36a9e2;
              }
            }
          }
        }
      }
    }
    .money-hint{
      margin-top: 15px;
      text-align: right;
      font-size: 14px;
      color: #8b8b8b;
      span{
        color: #f00;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
</style>
