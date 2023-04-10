<script setup lang="ts">
import { provide, ref } from 'vue'
import ChildrenOne from '@/components/main/Provide/ChildrenOne.vue'

const message = ref('Hello Vue 3.0!')
const setMessage = (msg: string) => {
  message.value = msg
}
provide('message', { message, setMessage })
</script>

<template lang="">
  <div>
    <ChildrenOne />
  </div>
</template>
<style lang=""></style>
