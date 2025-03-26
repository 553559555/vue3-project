<template>
    <div class="home-header">
        <div class="home-header-left">
            <img src="/src/assets/vue.svg" alt="logo" />
            <span>Vue3</span>
        </div>
        <div>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in breadcrumbStore.dataList">{{ item }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="home-header-right">
            <el-icon class="user-icon" :size="40">
                <User />
            </el-icon>
            <el-dropdown>
                <span style="margin-left: 10px;">
                    个人中心<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item :icon="Setting" @click="handleSetting">设置</el-dropdown-item>
                        <el-dropdown-item :icon="Expand" @click="handleLogout">
                            退出
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import { User, ArrowDown, Setting, Expand } from '@element-plus/icons-vue'
import { useBreadcrumbStore } from '../../stores/Breadcrumb'

const breadcrumbStore = useBreadcrumbStore()

const handleSetting = () => {
    console.log('设置')
}

const handleLogout = () => {
    console.log('退出')
}

</script>

<style lang="scss" scoped>
.home-header {
    width: 100%;
    height: 100%;
    background-color: aquamarine;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;


    .home-header-left {
        width: 200px;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        img {
            width: 30px;
            height: 30px;
        }

        span {
            font-size: 20px;
            font-weight: bold;
            margin-left: 10px;
        }
    }


    .home-header-right {
        width: 200px;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;


        .user-icon {
            border: 1px solid #999;
            border-radius: 50%;
            padding: 5px;
            color: #999;
        }
    }
}
</style>