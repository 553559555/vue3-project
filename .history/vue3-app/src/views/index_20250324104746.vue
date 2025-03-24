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
}
</style>