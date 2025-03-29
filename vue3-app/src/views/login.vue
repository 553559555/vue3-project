<template>
    <div class="login-container">
        <transition appear appear-active-class="animate__animated animate__zoomInDown">
            <el-card>
                <el-form ref="loginFrom" :model="form" :rules="rules" label-width="80px" label-position="left">
                    <el-form-item label="账号:" prop="userName">
                        <el-input placeholder="请输入账户" v-model="form.userName" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="密码:" prop="password">
                        <el-input placeholder="请输入密码" v-model="form.password" type="password" show-password
                            clearable></el-input>
                    </el-form-item>
                </el-form>
                <div class="login-container-remember">
                    <el-checkbox v-model="form.isRemember" label="记住密码" />
                    <a @click="register">注册</a>
                </div>
                <el-button type="primary" class="login-button" @click="login"
                    :loading="loginButtonLoading">登录</el-button>
            </el-card>
        </transition>
    </div>

    <RegisterDialog ref="RegisterDialogRef" />

</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import RegisterDialog from '../components/RegisterDialog.vue'
import 'animate.css'
import { ElMessage } from 'element-plus'

const loginButtonLoading = ref(false)
const loginFrom = ref()
const form = reactive({
    userName: '',
    password: '',
    isRemember: false
})
const router = useRouter()
const RegisterDialogRef = ref()
const rules = reactive({
    userName: [
        { required: true, message: '请输入账户', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
    ]

})


// 页面加载时检查是否有保存的登录信息
onMounted(() => {
    let userInfo = JSON.parse(localStorage.getItem('userAccountInfo') ?? '{}')
    if (userInfo != '' && userInfo.isRemember) {
        form.isRemember = userInfo.isRemember
        form.userName = userInfo.userName
        form.password = userInfo.password
    }
})


const register = () => {
    RegisterDialogRef.value.openDialog()
}

const login = () => {
    loginFrom.value?.validate((val: boolean) => {
        if (val) {
            if (form.isRemember) {
                localStorage.setItem('userAccountInfo', JSON.stringify(form))
            } else {
                localStorage.setItem('userAccountInfo', '{}')
            }
            loginButtonLoading.value = true
            setTimeout(() => {
                loginButtonLoading.value = false
                router.push({ name: 'Home', replace: true })
                ElMessage.success('登录成功')
            }, 2000);
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

    .el-input {
        width: 200px;
    }

    &-remember {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .login-button {
        width: 100%;
        height: 40px;
    }
}
</style>
