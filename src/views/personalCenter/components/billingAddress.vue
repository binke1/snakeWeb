<template>
  <div class="my-order">
    <h6 class="title">
      我的优惠券
      <div class="coupon-status">
        <ul>
          <li @click="changeStatus(index)" :class="select===index?'active-li':''" v-for="(list,index) in menuList" :key="index">
            <span>
              <span>{{list.title}}</span>
            </span>
          </li>
        </ul>
      </div>
    </h6>
    <div>
      <div>
        <el-table border size="small" empty-text="您现在还没有优惠券，你可以点击右上方添加账单地址">
          <el-table-column align="center" label="状态"></el-table-column>
          <el-table-column align="center" label="姓名"></el-table-column>
          <el-table-column align="center" label="地区"></el-table-column>
          <el-table-column align="center" label="地址第二行"></el-table-column>
          <el-table-column align="center" label="邮编"></el-table-column>
          <el-table-column align="center" label="联系电话"></el-table-column>
          <el-table-column align="center" label="操作"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  import bus from '@/utils/eventBus'
  const menuList = [{
    title: '添加账单地址',
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
    mounted() {
      bus.$emit('changeActive', 8)
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
  }
</style>
