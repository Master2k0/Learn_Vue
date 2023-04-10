<script lang="ts" setup>
import type { Component } from 'vue'

interface IProps {
  mockData: {
    icon: {
      image: Component
      title: string
    }
    text: {
      title: string
      content: string
    }[]
  }[]
}

defineProps<IProps>()
</script>
<template>
  <div>
    <div v-for="item in mockData" :key="item.icon.title" class="tableInfoWrapper">
      <div class="tableInfoIcon">
        <div class="iconWrapper"><component :is="item.icon.image" class="icon" /></div>
        <span>{{ item.icon.title }}</span>
      </div>
      <div class="tableInfoTextWrapper">
        <div v-for="text in item.text" :key="text.title" class="tableInfoTextContainer">
          <span class="tableInfoTextTitle">{{ text.title }}</span>
          <span class="tableInfoTextContent">{{ text.content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.tableInfoWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid #9b9b9e;
  padding: 46px 0;
}

.tableInfoWrapper:last-child {
  border-bottom: 1px solid #9b9b9e;
}

.moreInfoWrapper .contentContainer {
  border-bottom: 1px solid #9b9b9e;
}

.tableInfoIcon {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 341px;
  flex-grow: 2;
}

.tableInfoIcon .iconWrapper {
  padding-bottom: 30px;
}
.tableInfoIcon .iconWrapper .icon {
  width: 70px;
  height: 70px;
}
.tableInfoIcon span {
  font-size: 20px;
  color: #fff;
}
.tableInfoTextWrapper {
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  width: 100%;
}

.tableInfoTextContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 25px;
  opacity: 0.5;
  transition: all 0.3s ease-in-out;
}

.tableInfoTextContainer:nth-child(n + 4) {
  margin-top: 40px;
}

.tableInfoTextContainer:hover {
  opacity: 1;
}

.tableInfoTextWrapper .tableInfoTextTitle {
  color: #fff;
}

.tableInfoTextWrapper .tableInfoTextContent {
  color: #505051;
}
</style>
