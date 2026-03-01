<script setup>
  import Header from './components/Header.vue'
  import Cards from './components/Cards.vue'
  import Introduction from './components/Introduction.vue'
  import TechStack from './components/TechStack.vue'
  import Projects from './components/Projects.vue';
</script>

<template>
  <div class="background"></div>
  <div class="content">
    <Header />
    <Introduction />
    <TechStack />
    <Cards />
    <Projects />
    <ScrollTop threshold="200" behavior="smooth" />
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
:deep(.p-scrolltop) {
    background-color: black !important;
    border: none;
    transition: opacity 0.3s, background-color 0.3s, transform 0.3s !important;
}
:deep(.p-scrolltop .p-scrolltop-icon) {
    color: white !important;
}
:deep(.p-scrolltop:hover) {
    background-color: white !important;
    border: none !important;
}
:deep(.p-scrolltop:hover .p-scrolltop-icon) {
    color: black !important;
}
:deep(.p-scrolltop-enter-from),
:deep(.p-scrolltop-leave-to) {
    opacity: 0 !important;
}
:deep(.p-scrolltop-enter-active),
:deep(.p-scrolltop-leave-active) {
    transition: opacity 0.3s ease !important;
}
</style>