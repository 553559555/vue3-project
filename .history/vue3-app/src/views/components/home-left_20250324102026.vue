<template>
    <div class="container">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            @select="handleSelect">
            <el-sub-menu v-for="(items, index) in listData" :index="items.name" :key="index">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>{{ items.name }}</span>
                </template>
                <el-menu-item v-for="(item, index) in items.children" :index="item.name">
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>{{ item.name }}</span>
                </el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script setup>
import { Location } from "@element-plus/icons-vue";

import { reactive, ref } from "vue";
const listData = reactive([
    {
        name: "常用组件学习列表",
        children: [
            {
                name: 'button'
            },
            {
                name: 'input'
            }
        ],
    },
]);
const isCollapse = ref(true);
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
    console.log(key, keyPath);
};

const handleSelect = (key, keyPath) => {
    console.log(key, keyPath);
};
</script>

<style scoped lang="scss">
.container {
    height: 100%;
    width: 100%;

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
}
</style>
