<template>
    <div>
        我是子组件
    </div>
    <div>
        {{ msg }}
    </div>
    <div>
        {{ arr }}
    </div>
    <button @click="sendMsg">子传递父</button>
</template>

<script setup lang="ts">

// 子组件暴露属性和方法给父组件
defineExpose({
    name: '子组件暴露的属性',
    open: () => console.log('子组件暴露的方法')
})


// 子组件给子组件传值
// 使用ts泛型传值
const emit = defineEmits<{
    (e: 'sendMsg', msg: string): void
}>()


// 子组件给付组件传值
// 正常写法
// const emit = defineEmits(['sendMsg'])

const sendMsg = () => {
    emit('sendMsg', '子组件传值给父组件')
}

// 父组件传值给子组件
// 使用ts泛型传值
withDefaults(defineProps<{
    msg: string
    arr: number[]
}>(), {
    msg: '默认值',
    arr: () => [1, 2, 3]
})

// 正常传值
// const props = defineProps({
//     msg: {
//         type: String,
//         default: '默认值'
//     }
// })


</script>

<style lang="scss" scoped>

</style>