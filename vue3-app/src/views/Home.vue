<template>
  <div class="home">
      <el-form-item label="用户名">
        <el-select
          v-model="checkList"
          class="m-2"
          placeholder="Select"
          size="large"
          multiple
          style="max-width: 200px"
          @change="handleChange"
        >
        <el-checkbox-group v-model="checkList">
            <el-space wrap class="ml10">
                <el-checkbox v-for="items in selectList" :key="items.label" :label="items.label" :value="items.value" />
            </el-space>
          </el-checkbox-group>
        </el-select>
      </el-form-item>

    <el-button type="primary" @click="handleSubmit">提交</el-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { ref } from "vue";

const form = ref({
  username: "",
});

const checkList = ref([]);

const selectList = reactive([
  {
    label: "第一组",
    value: "第一组",
    options: [
      {
        label: "选项1",
        value: "选项1",
      },
      {
        label: "选项2",
        value: "选项2",
      },
    ],
  },
  {
    label: "第二组",
    value: "第二组",
    options: [
      {
        label: "选项3",
        value: "选项3",
      },
      {
        label: "选项4",
        value: "选项4",
      },
    ],
  },
]);

const handleChange = (val: any) => {
  console.log(val);
};

const handleSubmit = () => {
  console.log(checkList.value);
};
</script>

<style scoped lang="scss">
.home {
  background-color: #fff;
  height: 100%;
  width: 100%;
}
</style>
