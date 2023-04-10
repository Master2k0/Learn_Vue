<script lang="ts" setup>
import TableInfo from '@/components/Home/MoreInfo/TableInfo.vue'
import BookIcon from '@/components/icons/BookIcon.vue'
import ToolsIcon from '@/components/icons/ToolsIcon.vue'
const mockData = [
  {
    icon: {
      image: BookIcon,
      title: 'On-Boarding Guide'
    },
    text: [
      {
        title: 'Getting Started',
        content: 'Getting started with ARENA onboarding'
      },
      {
        title: 'Basic Integration',
        content: 'User authentication, game client, and server integration'
      },
      {
        title: 'Game Build',
        content: 'Build configuration, upload, and release process'
      },
      {
        title: 'Commerce Integration',
        content: 'In game purchase and item pick up system'
      },
      {
        title: 'Contents Setup',
        content: 'Contents management for ARENA Home and Launcher'
      },
      {
        title: 'Web Integration',
        content: 'Web gateway, OAuth, and web login'
      },
      {
        title: 'Game Launch Support',
        content: 'Internal test, closed beta, and open beta test'
      },
      {
        title: 'Third-party Platform Support',
        content: 'Nexon game play support for Steam, Xbox, and PlayStation users'
      }
    ]
  },
  {
    icon: {
      image: ToolsIcon,
      title: 'Operation Guide'
    },
    text: [
      {
        title: 'Marketing Program',
        content: 'Returning user benefit program and coupon system'
      },
      {
        title: 'Game Operation',
        content: 'Maintenance & pre-download, licenses, and game access permission management'
      }
    ]
  }
]
</script>

<template>
  <div class="moreInfoWrapper">
    <div class="title">Resources & Tools</div>
    <TableInfo :mock-data="mockData" />
  </div>
</template>
<style>
.moreInfoWrapper {
  min-width: 1000px;
  max-width: 1500px;
  margin: 80px auto 0 auto;
  padding: 0 20px 150px;
  background-color: #202122;
}

.moreInfoWrapper .title {
  font-size: 34px;
  color: #fff;
  padding-bottom: 46px;
}
</style>
