<template>
  <div class="home-container">
    <el-row class="row">
      <el-col :span="12">
        <div class="grid-content" />
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

</script>

<style scoped lang="scss">
.home-container {
  width: 100%;
  height: 100%;
  background-color: aqua;

  .row {
    min-height: 200px;

    .el-col {
      border: solid 1px #aaa;

      .grid-content {
        margin: 80px;
        border: solid 1px #999;
      }

    }
  }
}
</style>
