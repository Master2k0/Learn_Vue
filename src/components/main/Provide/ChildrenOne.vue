<script lang="ts" setup>
import { inject } from 'vue'

interface IInject {
  message: string
  setMessage: (msg: string) => void
}

const { message, setMessage } = inject<IInject>('message', {
  message: 'default message if not provided',
  setMessage: () => {}
})
const handleClick = () => {
  setMessage('new message')
}
</script>

<template>
  <div>{{ message }}</div>
  <button @click="handleClick">set newMessage</button>
</template>
<style lang=""></style>
