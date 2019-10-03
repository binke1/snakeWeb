<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  .width-1200{
    width: 1200px;
    margin: auto;
  }
  body{
    font-size: 14px;
    margin: 0;
    padding: 0;
  }
  .el-table thead th{
    background-color: rgba(240,240,240,.4) !important;
  }
</style>
