<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
const state = ref<boolean>(false)
const setState = () => {
  state.value = !state.value
}
</script>

<template>
  <div>
    <div :class="{ 'text-danger': state }">fdfdf</div>
    <button @click="setState">{{ state }}</button>
  </div>
</template>

<style scoped>
.text-danger {
  color: red;
}
</style>
