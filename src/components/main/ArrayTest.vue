<script setup lang="ts">
import { ref, watch } from 'vue'

const listA = ref(['React', 'Vue', 'Angular'])
const msg = ref('')
watch(msg, (newVal, oldVal) => {
  console.log('newVal', newVal)
  console.log('oldVal', oldVal)
})
</script>

<template>
  <div v-for="(item, index) in listA" :key="index" :item="item">
    {{ item }}
  </div>
  <p>Message is: {{ msg }}</p>
  <input v-model.trim="msg" />
</template>
