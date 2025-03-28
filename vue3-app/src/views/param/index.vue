<template>
    <div>
        我是父组件
    </div>
    <div>{{ childMsg }}</div>
    <button @click="openChild">打开子组件</button>
    <hr>
    <ParamChild ref="ParamChildRef" :arr="arr" :msg="msg" @sendMsg="receiveMsg" />

</template>

<script setup lang="ts">
// 声明子组件
import ParamChild from './param-child.vue';
// 声明ref
import { ref } from 'vue';

// 父组件传值给子组件
const msg = ref('我是一个值，被传过来了');
const arr = ref([4, 5, 6]);
// 声明接收子组件的值
const childMsg = ref('');
// 声明子组件的ref
const ParamChildRef = ref<InstanceType<typeof ParamChild>>();

const receiveMsg = (msg: string) => {
    childMsg.value = msg
}

const openChild = () => {
    ParamChildRef.value?.open()
    console.log(ParamChildRef.value?.name);
}

</script>

<style lang="scss" scoped>

</style>