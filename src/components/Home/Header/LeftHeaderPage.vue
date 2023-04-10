<template>
  <div class="leftContainer">
    <Logo />
    <ul class="navigation">
      <li>
        <a>NEWS</a>
      </li>
      <li>
        <a>FEATURES</a>
      </li>
      <li>
        <a>DOCS</a>
      </li>
      <li>
        <a>CONSOLE</a>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import Logo from '@/components/icons/LogoPage.vue'
</script>
<style scope>
.leftContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
}
.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}
.navigation li a {
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.3s ease-in-out;
}
.navigation li a:hover {
  opacity: 1;
}
</style>
