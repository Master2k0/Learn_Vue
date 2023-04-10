<template>
  <div class="headerWrapper">
    <div class="headerContainer">
      <LeftHeaderPage />
      <RightHeaderPage />
    </div>
  </div>
</template>
<script setup lang="ts">
import LeftHeaderPage from '@/components/Home/Header/LeftHeaderPage.vue'
import RightHeaderPage from '@/components/Home/Header/RightHeaderPage.vue'
</script>
<style scope>
.headerWrapper {
  background-color: rgb(25, 25, 26);
  position: relative;
  z-index: 100;
}
.headerContainer {
  max-width: 1500px;
  min-width: 1000px;
  margin: 0 auto;
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0 20px;
  /* flex-wrap: wrap; */
}
</style>
