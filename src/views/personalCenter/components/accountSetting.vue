<template>
  <div class="my-order">
    <h6 class="title">
      个人资料
    </h6>
    <div class="user-info-update">
      <div class="info-list">
        <span>出生日期：</span>
        <div>
          <select @change="yearChange" name="birthdayYear">
            <option v-for="(item,index) in yearList" :key="index" :value="item">{{item}}</option>
          </select>
          <select @change="monthChange" name="birthdayMonth">
            <option v-for="(item,index) in monthList" :key="index" :value="item">{{item}}</option>
          </select>
          <select name="birthdayDay">
            <option v-for="(item,index) in dayList" :key="index" :value="item">{{item}}</option>
          </select>
        </div>
      </div>
      <div class="info-list">
        <span>性别：</span>
        <div>
          <el-radio-group v-model="radio">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="2">女</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="info-list">
        <span>邮箱地址：</span>
        <div>
          {{userName}}
        </div>
      </div>
      <div class="info-list">
        <span>手机：</span>
        <div>
          <span class="no-phone">手机绑定</span>
        </div>
      </div>
      <div class="info-list">
        <span>QQ：</span>
        <div>
          <input type="text">
        </div>
      </div>
      <div class="info-list">
        <span>微信：</span>
        <div>
          <input type="text">
        </div>
      </div>
      <div class="info-list btn">
        <span></span>
        <button>确认修改</button>
      </div>
      <div class="info-list">
        <span>原密码：</span>
        <div>
          <input type="text">
        </div>
      </div>
      <div class="info-list">
        <span>新密码：</span>
        <div>
          <input type="text">
        </div>
      </div>
      <div class="info-list">
        <span>确认密码：</span>
        <div>
          <input type="text">
        </div>
      </div>
      <div class="info-list btn">
        <span></span>
        <button>确认修改</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {getCookie} from "@/utils/auth";
  import moment from 'moment'
  export default {
    name: "myOrder",
    data() {
      return {
        select: 0,
        pageNo: 1,
        pageSize: 10,
        tableData: [],
        total: 0,
        yearList: [],
        monthList: ['01','02','03','04','05','06','07','08','09','10','11','12'],
        dayList: [],
        year: 1956,
        month: '01',
        day: '01',
        radio: 1,
        userName: null
      }
    },
    mounted() {
      this.userName = getCookie('userName')
      const nowYear = Number(moment().format('YYYY'))
      for (let i = 1956; i <= nowYear;i++) {
        this.yearList.push(i)
      }
      this.dispose()
    },
    methods: {
      dispose() {
        this.dayList = []
        let disposeDate = this.year + '-' + this.month
        const days = moment(disposeDate).daysInMonth()
        for (let i = 1; i <= days; i++){
          if (i<10) {
            this.dayList.push('0'+ i)
          } else {
            this.dayList.push(i)
          }
        }
      },
      changeStatus(index) {
        this.select = index
      },
      handleCurrentChange(pageNo) {
        this.pageNo = pageNo
      },
      yearChange() {
        this.year = document.getElementsByName('birthdayYear')[0].value
        this.dispose()
      },
      monthChange() {
        this.month = document.getElementsByName('birthdayMonth')[0].value
        this.dispose()
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
    .user-info-update{
      padding-left: 80px;
    }
    .info-list{
      margin: 20px 0;
      display: flex;
      align-items: center;
      color: #8b8b8b;
      select{
        width: 80px;
      }
      .no-phone{
        color: #36a9e2;
        cursor: pointer;
      }
      >span{
        text-align: right;
        display: inline-block;
        width: 80px;
        margin-right: 15px;
      }
      input{
        border: 1px solid #ddd;
        width: 240px;
        height: 25px;
        padding: 0 8px;
      }
    }
    .btn{
      button{
        outline: none;
        color: #fff;
        background-color: #36a9e2;
        height: 36px;
        border-radius: 4px;
        border: none;
        padding: 0 15px;
      }
    }
  }
</style>
