<template>
    <div>
        <el-header>
            <home-header />
        </el-header>
        <el-container>
            <home-left />
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
import HomeHeader from './components/home-header.vue'

</script>



<style scoped lang="scss">
div {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;

    .el-header {
        height: 80px;
        padding: 0;
    }


    .el-container {
        height: calc(100vh - 80px);
    }

    .el-main {
        margin: 0px;
        padding: 20px;
        width: 100%;
        height: 100%;
        background-color: #f0f2f5;
    }
}
</style>