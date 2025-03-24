<template>
  <div class="home-container">
    <el-row class="row">
      <el-col :span="12">
        <div class="grid-content ep-bg-purple-dark" />
      </el-col>
      <el-col :span="12">
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


  .row {
    height: 200px;
    box-sizing: border-box;

    .el-col {
      margin: 10px;
      border: solid 1px #aaa;
    }
  }
}
</style>
