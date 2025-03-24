<template>
    <el-header>Header</el-header>
    <el-container>
        <el-aside width="200px">
            <home-left />
        </el-aside>
        <el-main>
            <router-view>
            </router-view>
        </el-main>
    </el-container>
</template>

<script setup>

import { RouterView } from 'vue-router'
import HomeLeft from './components/home-left.vue'

</script>



<style scoped lang="scss">
:deep(.el-header) {
    background-color: blue;
    box-sizing: border-box;
}

:deep(.el-container) {
    background-color: aqua;
    box-sizing: border-box;

    :deep(.el-aside) {
        background-color: yellow;
        box-sizing: border-box;
    }

    :deep(.el-main) {
        background-color: bisque;
        padding: 0;
        box-sizing: border-box;
    }
}
</style>