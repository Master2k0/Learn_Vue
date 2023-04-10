<script setup lang="ts">
import InformationNews from '@/components/Home/News/InformationNews.vue'
import ArrowUp2 from '@/components/icons/ArrowUp2.vue'
import ArrowDown2 from '@/components/icons/ArrowDown2.vue'
import { ref } from 'vue'
const mockData = ref([
  {
    image: 'imageNews.png',
    title: 'ARENA Realease Note of Febuary 2023',
    date: 'Mar 2, 2023'
  },
  {
    image: 'imageNews.png',
    title: 'ARENA Realease Note of Febuary 2023',
    date: 'Mar 2, 2023'
  },
  {
    image: 'imageNews.png',
    title: 'ARENA Realease Note of Febuary 2023',
    date: 'Mar 2, 2023'
  },
  {
    image: 'imageNews.png',
    title: 'ARENA Realease Note of Febuary 2023',
    date: 'Mar 2, 2023'
  },
  {
    image: 'imageNews.png',
    title: 'ARENA Realease Note of Febuary 2023',
    date: 'Mar 2, 2023'
  },
  {
    image: 'imageNews.png',
    title: 'ARENA Realease Note of Febuary 2023',
    date: 'Mar 2, 2023'
  }
])
const numberPages = ref(Math.ceil(mockData.value.length / 2))
const currentPage = ref(1)
const handleNextPage = () => {
  if (currentPage.value < numberPages.value) {
    currentPage.value++
  }
}
const handlePrevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}
</script>
<template>
  <div class="newBannerWrapper">
    <div class="whatNew">
      <p style="color: #fff; font-size: 20px">What's New</p>
      <p class="buttonViewAll">View All ></p>
    </div>
    <div class="sliderWrapper">
      <InformationNews :mock-data="mockData" :current-page="currentPage" />
    </div>
    <div class="buttonNavigation">
      <ArrowUp2
        class="icon"
        :onclick="handlePrevPage"
        :class="{ disableButton: currentPage <= 1 }"
      />
      <ArrowDown2
        class="icon"
        :onclick="handleNextPage"
        :class="{ disableButton: currentPage >= numberPages }"
      />
    </div>
  </div>
</template>
<style>
.newBannerWrapper {
  min-width: 1000px;
  max-width: 1500px;
  min-height: 132px;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
}

.whatNew {
  padding: 22px 20px 23px 25px;
  background-color: #595a5f;
  width: 250px;
}
.buttonViewAll {
  opacity: 0.5;
  color: #fff;
  transition: all 0.3s ease-in-out;
  font-size: 17px;
}
.sliderWrapper {
  background-color: #4a4b4f;
  flex-grow: 2;
  position: relative;
  overflow: hidden;
}

.buttonViewAll:hover {
  opacity: 1;
}

.buttonNavigation {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 50px;
  background-color: #4a4b4f;
}
.buttonNavigation .icon {
  color: #9b9b9e;
  transition: all 0.3s ease-in-out;
}
.buttonNavigation .icon:hover {
  color: #fff;
}

.disableButton {
  color: #9b9b9e;
  cursor: not-allowed;
}

.buttonNavigation .disableButton:hover {
  color: #9b9b9e;
}
</style>
