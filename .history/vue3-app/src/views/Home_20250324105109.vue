<template>
  <div class="home-container">
    <el-row class="row" :span="8">
      <el-col :span="8">
        <div class="grid-content ep-bg-purple-dark" />
      </el-col>
      <el-col :span="8">
        <div class="grid-content ep-bg-purple-dark" />
      </el-col>
      <el-col :span="8">
        <div class="grid-content ep-bg-purple-dark" />
      </el-col>
    </el-row>

    <el-row class="row" :span="8">
      <el-col :span="8">
        <div class="grid-content ep-bg-purple-dark" />
      </el-col>
      <el-col :span="8">
        <div class="grid-content ep-bg-purple-dark" />
      </el-col>
      <el-col :span="8">
        <div class="grid-content ep-bg-purple-dark" />
      </el-col>
    </el-row>

    <el-row class="row" :span="8">
      <el-col :span="8">
        <div class="grid-content ep-bg-purple-dark" />
      </el-col>
      <el-col :span="8">
        <div class="grid-content ep-bg-purple-dark" />
      </el-col>
      <el-col :span="8">
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

  .row {
    padding: 20px;

    .el-col {
      margin: 10px;
      border: solid 1px #aaa;
    }
  }
}
</style>
