<template>
  <div class="homePageWrapper">
    <HeaderPage />
    <BannerContainer />
    <NewBanner />
    <MoreInfo />
    <Footer />
  </div>
</template>
<script setup lang="ts">
import BannerContainer from '@/components/Home/Banner/BannerContainer.vue'
import HeaderPage from '@/components/Home/Header/HeaderPage.vue'
import NewBanner from '@/components/Home/News/NewBanner.vue'
import MoreInfo from '@/components/Home/MoreInfo/MoreInfo.vue'
import Footer from '@/components/Home/Footer/FooterHome.vue'
</script>
<style scope>
.homePageWrapper {
  background-color: #202122;
}
</style>
