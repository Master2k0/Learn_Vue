<script setup lang="ts"></script>
<template>
  <div class="bannerWrapper">
    <div class="bannerContainer">
      <div class="leftContainer">
        <h1>
          <span class="textArena"> ARENA </span><br />
          <span class="textDeveloper"> for developers </span>
        </h1>
        <div class="groupButton">
          <button class="button">GETTING STARTED</button>
          <button class="button">CONSOLE</button>
        </div>
      </div>
      <img class="imageBanner" src="banner.png" />
    </div>
  </div>
</template>
<style scope>
.bannerWrapper {
  background-color: #242526;
  overflow: hidden;
}

.bannerContainer {
  margin: 0 auto;
  max-width: 1500px;
  min-width: 1000px;
  display: flex;
  height: 700px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.textArena {
  font-size: clamp(40px, 12px + 3vw, 80px);
  color: white;
  letter-spacing: -1px;
}

.textDeveloper {
  font-size: clamp(40px, 12px + 3vw, 80px);
  background: -webkit-linear-gradient(#20ffd3, #4bfba6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  letter-spacing: -1px;
}

.bannerContainer .leftContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.groupButton {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
}

.button {
  /* max-width: 220px; */
  min-width: 200px;
  padding: 20px;
  font-size: 17px;
  background-color: transparent;
  border: 1px solid rgb(31, 254, 210);
  color: rgb(31, 254, 210);
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
}
.button:hover {
  background: linear-gradient(#20ffd3, #4bfba6);
  color: black;
}

.imageBanner {
  transform: translateX(163px);
  animation: translateImage 1s ease-in-out;
}

@keyframes translateImage {
  0% {
    transform: scale(1.2) translateX(163px);
  }
  100% {
    transform: scale(1) translateX(163px);
  }
}
</style>
