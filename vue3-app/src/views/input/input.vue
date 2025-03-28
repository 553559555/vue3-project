<template>
  <div class="input-container">
    {{ age }}
    <button style="color: red;" @click="submit">修改</button>
    <InputDialog ref="inputDialogRef"/>
  </div>
  
</template>

<script setup>
import { reactive, ref, toRef } from "vue";
import InputDialog from "../components/input-dialog.vue";

const inputDialogRef = ref()

const state = {
    name: '雄安满',
    age: 20,
};

const age = toRef(state, 'age');


const dataList = reactive({
    data: ['1','2','3','4']
})

const submit = () => {
    inputDialogRef.value.openDialog(dataList.data)
};
</script>

<style lang="scss" scoped>
.input-container {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
