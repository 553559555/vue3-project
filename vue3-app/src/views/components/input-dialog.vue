<template>
    <el-dialog title="title" width="600px" v-model="visible">
      <span>这事一个消息</span>
      <div v-for="item in dataList" :key="item">{{ item }}</div>
      <template #footer>
        <div class="dialog-footer">
           <el-button size="small" @click="handleCancel">取 消</el-button>
           <el-button size="small" type="primary" @click="handleOk" :loading="confirmLoading">确 定</el-button>
        </div>
      </template>
    </el-dialog>
</template>

<script setup lang="ts">

import {ref, reactive} from 'vue'

const visible = ref(false)
const confirmLoading = ref(false)

const handleCancel = () => {
    visible.value = false
}

const handleOk = async () => {
    confirmLoading.value = true
    const res = await tempPromise()
    confirmLoading.value = false
    visible.value = false
}

const tempPromise = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(true)
    }, 2000);
})

const dataList = ref([])

const openDialog = (list: []) => {
    
    dataList.value = list
    visible.value = true
}

defineExpose({
    openDialog
})

</script>

<style scoped>
.input-dialog {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    height: 100vh;
    background-color: #00000055;
}
</style>