<template>
    <el-container class="container">
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px">
                <home-left/>
            </el-aside>
            <el-main>
                <router-view>
                    欢迎来到后台管理系统
                </router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>

import { RouterView } from 'vue-router'
import HomeLeft from './components/home-left.vue'

</script>



<style scoped lang="scss">

.container {
    width: 100vw;
    height: 100vh;

    .el-header {
        background-color: blue;
    }

    .el-container {
        background-color: aqua;

        .el-aside {
            background-color: yellow;
        }

        .el-main {
            background-color: bisque;
        }

    }

}

</style>