<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <el-container>
    <el-header class="header">
      <el-row>
        <router-link to="/" >首页</router-link>
        <router-link to="/about" >关于</router-link>
      </el-row>
    </el-header>
    <el-main class="main">
      <router-view />
    </el-main>
  </el-container>
</template>

<style lang="scss">
.header {
  background-color: #409EFF;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: start;
  a{
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
  }
}

.main {
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  width: 100%;
  height: calc(100vh - 60px);
}
</style>
