<script setup lang="ts">
import ChildrenTest from '@/components/main/TestEvents/ChildrenTest.vue'
import { ref } from 'vue'

const number = ref(0)
const increment = (num: number) => {
  number.value += num
}
const handleClick = () => {
  console.log('handleClick')
}
</script>

<template>
  <div>
    <ChildrenTest @increment="increment" class="testvbcfgb" @click="handleClick" />
    <p>{{ number }}</p>
  </div>
</template>
