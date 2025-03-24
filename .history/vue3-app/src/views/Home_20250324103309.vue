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
    background-color: red;
    height: 200px;

    .el-col {
      padding: 10px;

    }
  }
}
</style>
