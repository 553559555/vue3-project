<template>
    <div class="input-container">
        <el-input v-model="state.inputStr" placeholder="清输入内容"></el-input>
        <el-input v-model="state.inputTwo" placeholder="清输入内容"></el-input>
        <el-button type="primary" @click="submit">提交</el-button>
    </div>
</template>

<script setup>

import { reactive, computed } from 'vue';

const state = reactive({});

const submit = () => {
    console.log(state)
}

</script>

<style lang="scss" scoped>

.input-container {
    width: 100%;
    height: 100%;
    background-color: #fff;
}

</style>