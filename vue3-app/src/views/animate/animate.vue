<template>
  <div class="animate-container">
    <transition enter-active-class="animate__animated animate__zoomInDown" leave-active-class="animate__animated animate__zoomOutUp" >
        <div v-if="onFlag" class="animate-container__box">动画文字1</div>
    </transition>

    <transition enter-active-class="animate__animated animate__backInDown" leave-active-class="animate__animated animate__backOutDown" >
        <div v-if="towFlag" class="animate-container__box">动画文字2</div>
    </transition>

    <el-button style="margin-top: 20px;" @click="onFlag = !onFlag">第一个动画点击</el-button>
    <el-button style="margin-top: 20px; margin-left: 0;" @click="towFlag = !towFlag">第二个动画点击</el-button>
  </div>
</template>

<script setup lang="ts">
import "animate.css";
import { ref, onMounted } from 'vue'

// 动画文档 https://animate.style/
// 在animate4.0以后，class需要添加 animate__animated 否则不生效

const onFlag = ref(false)
const towFlag = ref(false)

onMounted(() => {
    onFlag.value = true  
    towFlag.value = true
})

</script>

<style scoped lang="scss">
.animate-container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__box {
    margin-top: 20px;
  }
}
</style>
