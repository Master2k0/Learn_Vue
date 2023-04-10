<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { useAttrs } from 'vue'
const emit = defineEmits(['increment', 'somethingStranger'])
const attrs = useAttrs()
const click = () => {
  emit('increment', 2)
}
</script>

<template>
  <button @click="click">increment 2</button>
  {{ attrs.onClick }}
  {{ attrs }}
</template>
