<template>
  <div class="aerele-landing-page">
    <div class="content">
      <transition name="fade" v-if="isLoading">
        <PreLoader />
      </transition>
      <router-view v-slot="{ Component }" v-else>
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
html, body {
  height: 100% !important;
  margin: 0;
}

.aerele-landing-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden; 
  height: 100vh;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3em;
  width: 100%;
  overflow: hidden; 
  height: 100%;
}

@media (max-width: 991px) {
  .content {
    padding: 1em;
  }
}

@media (max-width: 575px) {
  .content {
    justify-content: flex-start;
  }
}
</style>
