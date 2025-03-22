<template>
  <div class="home">
    <el-form-item label="用户名" class="item-container">
      <el-select class="m-2" size="large" v-model="checkList" placeholder="Select" multiple @change="handleChange">
        <el-option-group v-for="items in selectList" :label="items.label" :key="items.label">
          <el-option v-for="item in items.options" :label="item.label" :key="item.label"
            :value="item.value"></el-option>
        </el-option-group>

      </el-select>
    </el-form-item>

    <el-form-item label="用户名" class="item-container">
      <el-select class="m-2" size="large" v-model="checkList" placeholder="Select" multiple @change="handleChange">
        <el-option-group v-for="items in selectList" :label="items.label" :key="items.label">
          <el-option v-for="item in items.options" :label="item.label" :key="item.label"
            :value="item.value"></el-option>
        </el-option-group>

      </el-select>
    </el-form-item>

    <el-form-item label="用户名" class="item-container">
      <el-select class="m-2" size="large" v-model="checkList" placeholder="Select" multiple @change="handleChange">
        <el-option-group v-for="items in selectList" :label="items.label" :key="items.label">
          <el-option v-for="item in items.options" :label="item.label" :key="item.label"
            :value="item.value"></el-option>
        </el-option-group>

      </el-select>
    </el-form-item>

    <el-form-item label="用户名" class="item-container">
      <el-select class="m-2" size="large" v-model="checkList" placeholder="Select" multiple @change="handleChange">
        <el-option-group v-for="items in selectList" :label="items.label" :key="items.label">
          <el-option v-for="item in items.options" :label="item.label" :key="item.label"
            :value="item.value"></el-option>
        </el-option-group>

      </el-select>
    </el-form-item>

    <el-form-item label="用户名" class="item-container">
      <el-select class="m-2" size="large" v-model="checkList" placeholder="Select" multiple @change="handleChange">
        <el-option-group v-for="items in selectList" :label="items.label" :key="items.label">
          <el-option v-for="item in items.options" :label="item.label" :key="item.label"
            :value="item.value"></el-option>
        </el-option-group>

      </el-select>
    </el-form-item>

    <el-form-item label="用户名" class="item-container">
      <el-select class="m-2" size="large" v-model="checkList" placeholder="Select" multiple @change="handleChange">
        <el-option-group v-for="items in selectList" :label="items.label" :key="items.label">
          <el-option v-for="item in items.options" :label="item.label" :key="item.label"
            :value="item.value"></el-option>
        </el-option-group>

      </el-select>
    </el-form-item>

    <el-form-item label="用户名" class="item-container">
      <el-select class="m-2" size="large" v-model="checkList" placeholder="Select" multiple @change="handleChange">
        <el-option-group v-for="items in selectList" :label="items.label" :key="items.label">
          <el-option v-for="item in items.options" :label="item.label" :key="item.label"
            :value="item.value"></el-option>
        </el-option-group>

      </el-select>
    </el-form-item>

    <el-form-item label="用户名" class="item-container">
      <el-select class="m-2" size="large" v-model="checkList" placeholder="Select" multiple @change="handleChange">
        <el-option-group v-for="items in selectList" :label="items.label" :key="items.label">
          <el-option v-for="item in items.options" :label="item.label" :key="item.label"
            :value="item.value"></el-option>
        </el-option-group>

      </el-select>
    </el-form-item>

    <el-form-item label="用户名" class="item-container">
      <el-select class="m-2" size="large" v-model="checkList" placeholder="Select" multiple @change="handleChange">
        <el-option-group v-for="items in selectList" :label="items.label" :key="items.label">
          <el-option v-for="item in items.options" :label="item.label" :key="item.label"
            :value="item.value"></el-option>
        </el-option-group>

      </el-select>
    </el-form-item>


    <el-form-item label="用户名" class="item-container">
      <el-select class="m-2" size="large" v-model="checkList" placeholder="Select" multiple @change="handleChange">
        <el-option-group v-for="items in selectList" :label="items.label" :key="items.label">
          <el-option v-for="item in items.options" :label="item.label" :key="item.label"
            :value="item.value"></el-option>
        </el-option-group>

      </el-select>
    </el-form-item>

    
  </div>
  <el-button type="primary" @click="handleSubmit">提交</el-button>
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
  display: flex;
  flex-wrap: wrap;

  .item-container {

    display: flex;
    align-items: center;
    margin: 10px;
    height: 40px;

    .m-2 {
      min-width: 200px;
    }
  }

}
</style>
