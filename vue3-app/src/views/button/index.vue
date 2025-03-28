<template>
    <div>
      <!-- <button @click="changeMsg" >{{ person }}</button> -->
    </div>
  </template>
   
   
   
  <script setup lang="ts">

import { reactive, toRefs } from 'vue'
const obj = reactive({
   foo: 1,
   bar: 1
})
 
let { foo, bar } = toRefs(obj)
 
foo.value++
console.log(foo, bar);

  </script>
   
   
  <style>
  </style>