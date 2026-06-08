<script setup>
  import Header from './components/Header.vue'
  import Cards from './components/Cards.vue'
  import Introduction from './components/Introduction.vue'
  import TechStack from './components/TechStack.vue'
  import Projects from './components/Projects.vue';

  window.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
  })

</script>

<template>
  <div class="background"></div>
  <div class="background-hover"></div>
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
.background,
.background-hover {
  position: fixed;
  inset: 0;
  background-image: url('@/assets/background.jpg');
  background-size: cover;
  background-position: center;
}

.background {
  filter: blur(2px);
  z-index: -2;
}

.background-hover {
  filter: blur(1px);
  background-size: 120%;
  z-index: -1;

  opacity: 0;

  mask-image: radial-gradient(
    circle 250px at var(--mouse-x, 50vw) var(--mouse-y, 50vh),
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,0) 100%
  );

  transition: opacity 0.2s ease;
}

body:hover .background-hover {
  opacity: 1;
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