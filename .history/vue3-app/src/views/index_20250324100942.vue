<template>
    <el-container class="container">
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px">
                <home-left/>
            </el-aside>
            <el-main>
                <router-view>
                    <homeEmpty/>
                </router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>

import { RouterView } from 'vue-router'
import HomeLeft from './components/home-left.vue'
import homeEmpty from './components/home-empty.vue';

</script>



<style scoped lang="scss">

.container {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;

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
            box-sizing: border-box;
            width: 100%;
            height: 100%;
        }

    }

}

</style>