<template>
    <div class="home-header">
        <div class="home-header-left">
            <img src="/src/assets/vue.svg" alt="logo" />
            <span>Vue3</span>
        </div>
        <div class="home-header-center">
            <el-icon color="#999" size="20" @click="breadcrumbStore.setIsCollapse">
                <!-- {{ breadcrumbStore.isCollapse ? (Fold) : (Expand) }} -->
                <Fold v-if="!breadcrumbStore.isCollapse" />
                <Expand v-else />
            </el-icon>
            <el-breadcrumb separator="/" style="margin-left: 20px;">
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
    <div class="line"></div>
</template>

<script setup>
import { User, ArrowDown, Setting, Expand, Fold } from '@element-plus/icons-vue'
import { useBreadcrumbStore } from '../../stores/Breadcrumb'
import { useRouter } from 'vue-router'

const breadcrumbStore = useBreadcrumbStore()
const router = useRouter()

const handleSetting = () => {
    console.log('设置')
}

const handleLogout = () => {
    router.replace({name: 'Login'})
}

</script>

<style lang="scss" scoped>
.home-header {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .home-header-center {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        flex: 1;
        height: 100%;
        width: 100%;
    }

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
.line {
        position: absolute;
        bottom: 1;
        left: 0;    
        width: 100%;
        height: 1px;
        background-color: #999;
    }
</style>