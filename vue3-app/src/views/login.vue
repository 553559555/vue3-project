<template>
    <div class="login-container">
        <el-card>
            <el-form :model="loginForm" :rules="rules" ref="loginFormRef" label-width="100px" class="login-form">
                <el-form-item label="用户名" prop="userAccount">
                    <el-input v-model="loginForm.userAccount" placeholder="请输入用户名" />
                </el-form-item>
                <el-form-item label="密码" prop="userPassword">
                    <el-input v-model="loginForm.userPassword" type="password" placeholder="请输入密码" />
                </el-form-item>
                <el-switch v-model="loginForm.isRemember"></el-switch>
                <el-text style="margin-left: 5px;">记住密码</el-text>
                <el-button type="primary" @click="login" style="margin-left: 10px; width: 100px">登录</el-button>
            </el-form>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useUserLoginStore } from '../stores/user-login'
import { useRouter } from 'vue-router'

const router = useRouter()
const userLoginStore = useUserLoginStore()

const loginFormRef = ref()
const loginForm = ref({
    userAccount: '',
    userPassword: '',
    isRemember: false
})

// 页面加载时检查是否有保存的登录信息
onMounted(() => {
    const savedInfo = userLoginStore.userInfo
    if (savedInfo.isRemember) {
        loginForm.value.userAccount = savedInfo.userAccount
        loginForm.value.userPassword = savedInfo.userPassword
        loginForm.value.isRemember = savedInfo.isRemember
    }
})

const rules = ref({
    userAccount: [
        { required: true, message: '请输入用户名', trigger: 'blur' }
    ],
    userPassword: [
        { required: true, message: '请输入密码', trigger: 'blur' }
    ]
})

const login = () => {
    loginFormRef.value.validate((valid: boolean) => {
        if (valid) {
            if (loginForm.value.isRemember) {
                // 如果选择记住密码，保存登录信息
                userLoginStore.saveUserInfo({
                    userAccount: loginForm.value.userAccount,
                    userPassword: loginForm.value.userPassword,
                    isRemember: loginForm.value.isRemember
                })
            } else {
                // 如果不记住密码，清除保存的信息
                userLoginStore.clearUserInfo()
            }
            router.push('/index')
        }
    })
}
</script>

<style scoped lang="scss">
.login-container {
    width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
