<template>
  <div class="home-container">
    <el-row class="row">
      <el-col :span="7">
        <div class="grid-content ep-bg-purple-dark" />
      </el-col>
      <el-col :span="7">
        <div class="grid-content ep-bg-purple-dark" />
      </el-col>
      <el-col :span="7">
        <div class="grid-content ep-bg-purple-dark" />
      </el-col>
    </el-row>

    <el-row class="row">
      <el-col :span="7">
        <div class="grid-content ep-bg-purple-dark" />
      </el-col>
      <el-col :span="7">
        <div class="grid-content ep-bg-purple-dark" />
      </el-col>
      <el-col :span="7">
        <div class="grid-content ep-bg-purple-dark" />
      </el-col>
    </el-row>

  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.home-container {
  width: 100%;
  height: 100%;
  background-color: aqua;
  box-sizing: border-box;

  .row {
    padding: 20px;
    height: 400px;
    flex-wrap: nowrap;
    box-sizing: border-box;

    .el-col {
      margin: 30px;
      border: solid 1px #aaa;
    }
  }
}
</style>
