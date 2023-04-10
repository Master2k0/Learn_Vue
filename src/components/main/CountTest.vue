<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
const state = reactive({
  count: 0
})
const state2 = ref(0)
function increment() {
  state.count++
  state2.value++
}
const now = computed(() => Date.now())
</script>

<template>
  <button @click="$emit('increment', 5)">
    {{ state.count }}
  </button>
  {{ state2 }}
  {{ now }}
</template>
