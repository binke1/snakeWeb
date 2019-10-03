<template>
  <div class="my-order">
    <h6 class="title">
      我的优惠券
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
        <el-table border size="small" empty-text="您现在还没有优惠券">
          <el-table-column align="center" width="400" label="优惠券名称"></el-table-column>
          <el-table-column align="center" label="优惠券金额"></el-table-column>
          <el-table-column align="center" label="最小订单金额"></el-table-column>
          <el-table-column align="center" label="开始使用时间"></el-table-column>
          <el-table-column align="center" label="截止使用时间"></el-table-column>
          <el-table-column align="center" label="优惠券状态"></el-table-column>
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
    <div class="user-add">
      <div class="add-coupon">
        添加优惠券
      </div>
      <div class="add-input">
        <span>优惠券序列号</span>
        <input type="text">
        <button>添加优惠券</button>
      </div>
    </div>
  </div>
</template>

<script>
  const menuList = [{
    title: '全部',
    value: ''
  }, {
    title: '未使用',
    value: ''
  }, {
    title: '已使用',
    value: ''
  }, {
    title: '已过期',
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
    .user-add{
      margin: 20px 0;
      .add-coupon{
        line-height: 37px;
        color: #5b5b5b;
        background-color: #f6f6f6;
        text-align: center;
        border-bottom: 1px solid #eee;
      }
      .add-input{
        color: #626262;
        text-align: center;
        border-bottom: 1px solid #eee;
        padding: 30px 0;
        span{
          font-size: 12px;
        }
        input{
          width: 200px;
        }
        button{
          outline: none;
          border: none;
          background-color: #36a9e2;
          color: #fff;
          height: 25px;
          border-radius: 4px;
          padding: 0 8px;
          cursor: pointer;
        }
      }
    }
  }
</style>
