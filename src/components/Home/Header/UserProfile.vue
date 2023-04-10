<script lang="ts" setup>
import UserIcon from '@/components/icons/UserIcon.vue'
import ArrowDown from '@/components/icons/ArrowDown.vue'
import UserProfileDropDown from '@/components/Home/Header/UserProfileDropDown.vue'
import { ref } from 'vue'

const isShowUserProfile = ref<boolean>(false)
const handleClick = () => {
  console.log('click')
  isShowUserProfile.value = !isShowUserProfile.value
}
const handleClickOutSide = () => {
  console.log('click out side')
  isShowUserProfile.value = false
}
</script>

<template>
  <div class="buttonContainer" v-click-outside="handleClickOutSide">
    <UserIcon />
    <p class="nameUser" style="cursor: pointer" @click="handleClick">
      somethingStranger
      <ArrowDown />
    </p>
    <Transition name="fade">
      <UserProfileDropDown
        v-if="isShowUserProfile"
        @clickOutside="handleClickOutSide"
        :isShowUserProfile="isShowUserProfile"
      />
    </Transition>
  </div>
</template>

<style>
.buttonContainer {
  display: flex;
  background-color: transparent;
  gap: 10px;
  border: none;
  padding-left: 30px;
  border-left: 1px solid #c0c0c1;
  color: inherit;
  align-items: center;
  position: relative;
}
.nameUser {
  color: #808080;
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
}

.fade-enter-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
