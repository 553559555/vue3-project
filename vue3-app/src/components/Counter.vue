<template>
  <div class="counter-container">
    <h2>Pinia 计数器示例</h2>
    <div class="counter">
      <p>当前计数: {{ counter.count }}</p>
      <p>双倍计数: {{ counter.doubleCount }}</p>
      <div class="counter-buttons">
        <el-button type="primary" @click="counter.increment">增加</el-button>
        <el-button type="danger" @click="counter.decrement">减少</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()
</script>

<style scoped lang="scss">
.counter-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  
  .counter {
    text-align: center;
    
    p {
      font-size: 18px;
      margin: 10px 0;
    }
    
    .counter-buttons {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 20px;
    }
  }
}
</style> 