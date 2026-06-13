<script setup>
  import Navbar from './components/Navbar.vue'
  import Header from './components/Header.vue'
  import Cards from './components/Cards.vue'
  import Introduction from './components/Introduction.vue'
  import TechStack from './components/TechStack.vue'
  import Projects from './components/Projects.vue';
  import ScrollProgressBar from '@/components/ScrollBar.vue';
</script>

<template>
  <video class="background" autoplay muted loop playsinline>
    <source src="@/assets/background.mp4" type="video/mp4">
  </video>
  <Navbar />
  <div class="content">
    <section id="introduction" class="page-section page-section--hero" v-scroll-animate>
      <div class="hero-content">
        <Header />
        <Introduction />
      </div>
    </section>
    <section id="stack" class="page-section" v-scroll-animate>
      <TechStack />
    </section>
    <section id="experience" class="page-section" v-scroll-animate>
      <Cards />
    </section>
    <section id="projects" class="page-section page-section--tall" v-scroll-animate>
      <Projects />
    </section>
    <ScrollProgressBar />
    <ScrollTop threshold="200" behavior="smooth" />
  </div>
</template>

<style scoped>
.background {
  z-index: -2;
  opacity: 0.5;
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  pointer-events: none;
}

:deep(.p-scrolltop) {
    background-color: black !important;
    border: none;
    transition: opacity 0.3s, background-color 0.3s, transform 0.3s !important;
}
:deep(.p-scrolltop .p-scrolltop-icon) {
    color: #91a081 !important;
}
:deep(.p-scrolltop:hover) {
    background-color: #91a081 !important;
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