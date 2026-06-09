<template>
  <div class="scroll-progress">
    <div
      class="scroll-progress__bar"
      :style="{ height: `${progress}%` }"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const progress = ref(0);

const updateProgress = () => {
  const scrollTop = window.scrollY;
  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  progress.value = maxScroll > 0
    ? (scrollTop / maxScroll) * 100
    : 0;
};

onMounted(() => {
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress);
  window.removeEventListener('resize', updateProgress);
});
</script>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  right: 0;
  width: 4px;
  height: 100vh;
  z-index: 9999;

  background: rgba(0, 0, 0, 0.08);
}

.scroll-progress__bar {
  width: 100%;
  height: 0;

  background: linear-gradient(
    to bottom,
    #91a081 0%,
    #ffffff 100%
  );

  box-shadow:
    0 0 10px rgba(145, 160, 129, 0.4);

  transition: height 0.05s linear;
}
</style>