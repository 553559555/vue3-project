<template>
  <div class="home-container">
    <el-row class="row">
      <el-col :span="12">
        <div class="grid-content" >
          <home-chart/>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content" />
      </el-col>
    </el-row>

    <el-row class="row">
      <el-col :span="12">
        <div class="grid-content" />
      </el-col>
      <el-col :span="12">
        <div class="grid-content" />
      </el-col>
    </el-row>

  </div>
</template>

<script lang="ts" setup>

import HomeChart from './components/home-chart.vue'


const fn = () => console.log(111111); console.log(222222)

const fn1 = () => {
  return '222222'
}


console.log(fn())



</script>

<style scoped lang="scss">
.home-container {
  width: 100%;
  height: 100%;
  background-color: #fff;

  .row {
    min-height: 200px;

    .el-col {

      .grid-content {
        margin: 40px;
        border: solid 1px #999;
        min-height: 300px;
      }

    }
  }
}
</style>
