<script setup lang="ts">
import { watch } from 'vue'

interface IProps {
  mockData: {
    image: string
    title: string
    date: string
  }[]

  currentPage: number
}

defineProps<IProps>()
</script>

<template>
  <div
    class="informationWrapper"
    :style="{
      transform: `translateY(-${(currentPage - 1) * 100}%)`
    }"
  >
    <div class="informationContainer" v-for="(data, index) in mockData" :key="index">
      <img style="width: 120px; height: 80px" :src="data.image" alt="imageNews" />
      <div class="dataContainer">
        <p style="color: #fff">{{ data.title }}</p>
        <p style="color: #fff; opacity: 0.5">{{ data.date }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.informationWrapper {
  display: grid;
  grid-template-columns: auto auto;
  position: absolute;
  width: 100%;
  height: 132px;
  transition: all 0.3s ease-in-out;
}
.informationContainer {
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin: 26px 21px 26px 27px;
}

.informationContainer:nth-child(2n-1) {
  border-right: 1px solid #9b9b9e;
}

.dataContainer {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
