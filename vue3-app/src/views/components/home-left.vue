<template>
        <el-menu default-active="2" class="el-menu-vertical-demo" @select="handleSelect" :collapse="breadcrumbStore.isCollapse">
            <template v-for="(items, index) in listData" :key="items.name">
                <el-sub-menu v-if="items.children && items.children.length" :index="items.name">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>{{ items.name }}</span>
                    </template>
                    <el-menu-item v-for="(item, index) in items.children" :index="item.name" :key="item.name">
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>{{ item.name }}</span>
                    </el-menu-item>
                </el-sub-menu>
                <el-menu-item v-else :index="items.name">
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>{{ items.name }}</span>
                </el-menu-item>
            </template>
        </el-menu>
</template>

<script setup>
import { Location } from "@element-plus/icons-vue";
import { useRouter } from 'vue-router'
import { reactive, ref } from "vue";
import { useBreadcrumbStore } from "../../stores/Breadcrumb";

const breadcrumbStore = useBreadcrumbStore()
const router = useRouter()

const listData = reactive([
    {
        name: "Home",
    },
    {
        name: "常用组件学习列表",
        children: [
            {
                name: 'button'
            },
            {
                name: 'input',
            }
        ],
    },
    {
        name: "组件列表",
        children: [
            {
                name: 'view'
            },
            {
                name: 'param'
            }
        ],
    },
]);


const handleSelect = (key, keyPath) => {
    breadcrumbStore.setList(keyPath)
    router.push({name: key})
};
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>
