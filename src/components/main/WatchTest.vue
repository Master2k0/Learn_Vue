<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'

defineProps({
  propsWatch: String
})

const todoId = ref(1)
const data = ref(null)

// watch(
//   todoId,
//   async () => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
//     data.value = await response.json()
//   },
//   { immediate: true }
// )

watchEffect(async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
  data.value = await response.json()
})
const inCrease = () => {
  todoId.value++
}
const templateRef = ref()
onMounted(() => {
  console.log(templateRef.value)
})
defineExpose({
  templateRef
})
</script>

<template>
  <button ref="templateRef" @click="inCrease">Increase</button>
  <div>{{ data }}</div>
  {{ propsWatch }}
</template>
