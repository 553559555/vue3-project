<template>
    <div>
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
    </div>
</template>

<script setup>

import { RouterView } from 'vue-router'
import HomeLeft from './components/home-left.vue'

</script>



<style scoped lang="scss">
div {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;

    .el-header {
        height: 80px;
        padding: 0xp;
    }

    .el-main {
        margin: 0px;
        padding: 0px;
        width: 100%;
        height: 100%;
    }
}
</style>