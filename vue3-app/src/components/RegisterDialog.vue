<template>
    <el-dialog title="注册" width="500px" v-model="visible" @close="onClose" align-center>
        <el-form ref="formRef" :model="form" :rules="rules" label-width="80px">
            <el-form-item label="用户名:" prop="account">
                <el-input placeholder="请输入用户名" v-model="form.account"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="password">
                <el-input placeholder="请输入密码" v-model="form.password" type="password" show-password></el-input>
            </el-form-item>

            <el-form-item label="姓名:" prop="userName">
                <el-input placeholder="请输入姓名" v-model="form.userName"></el-input>
            </el-form-item>

            <el-form-item label="生日:" prop="userAge">
                <el-date-picker v-model="form.userAge" type="date" placeholder="请选择生日" size="default" />
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button size="small" @click="onClose">取 消</el-button>
                <el-button size="small" type="primary" @click="handleOk" :loading="confirmLoading">确 定</el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElMessage, type FormInstance } from 'element-plus'

const formRef = ref<FormInstance>()

const form = ref({
    account: '',
    password: '',
    userName: '',
    userAge: ''
})

const rules = reactive({
    account: [
        { required: true, message: '请输入账户名', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
    ],
    userName: [
        { required: true, message: '请输入姓名', trigger: 'blur' }
    ],
    userAge: [
        { required: true, message: '请选择生日', trigger: 'blur' }
    ],
})

const visible = ref(false)
const confirmLoading = ref(false)

const onClose = () => {
    visible.value = false
}

const openDialog = () => {
    visible.value = true
}

const handleOk = () => {
    formRef.value?.validate((value) => {
        if (value) {
            confirmLoading.value = true
            setTimeout(() => {
                ElMessage.success('注册成功')
                confirmLoading.value = false
                onClose()
            }, 2000);
        }
    })
}

defineExpose({
    openDialog
})

</script>

<style scoped></style>