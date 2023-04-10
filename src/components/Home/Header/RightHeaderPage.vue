<template>
  <div class="rightContainer">
    <ul class="rightContainer">
      <li class="icon">
        <SearchIcon />
      </li>
      <li class="icon">
        <BellIcon />
      </li>
    </ul>
    <div>
      <UserProfile />
    </div>
  </div>
</template>
<script setup lang="ts">
import SearchIcon from '@/components/icons/SearchIcon.vue'
import BellIcon from '@/components/icons/BellIcon.vue'
import UserProfile from '@/components/Home/Header/UserProfile.vue'
</script>
<style scope>
.rightContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 45px;
}
.rightContainer .icon {
  transition: all 0.3s ease-in-out;
  opacity: 0.5;
}
.rightContainer .icon:hover {
  opacity: 1;
}
</style>
