<script setup>
  import Header from './components/Header.vue';
  import Cards from './components/Cards.vue';
</script>

<template>
  <div class="background"></div>
  <div class="content">
    <Header />
    <Cards />
  </div>
</template>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/background.jpg');
  background-size: cover;
  background-position: center;

  filter: blur(15px);
  z-index: -1;
}
</style>