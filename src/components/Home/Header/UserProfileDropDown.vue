<script lang="ts" setup>
interface IProps {
  isShowUserProfile: boolean
}

const props = defineProps<IProps>()
const emit = defineEmits(['handleClickOutside'])
</script>

<template>
  <div class="containerDropDown">
    <ul>
      <li class="childComponent">
        <p>somethingStranger</p>
        <p style="color: #959596">somethingStranger@gmail.com</p>
      </li>
      <li class="childComponent">
        <p>Personal Settings</p>
      </li>
      <li class="childComponent">
        <p>Log Out</p>
      </li>
    </ul>
  </div>
</template>

<style>
.containerDropDown {
  position: absolute;
  top: 140%;
  right: 0;
  border: 1px solid #474747;
  border-radius: 6px;
  display: flex;
  background-color: black;
  opacity: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.childComponent {
  padding: 10px 14px;
  color: #d4d4d5;
  border-bottom: 1px solid #474747;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.childComponent:last-child {
  border-bottom: none;
}

.childComponent:hover {
  background-color: #474747;
}
</style>
