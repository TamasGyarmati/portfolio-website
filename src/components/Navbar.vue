<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const links = [
  { label: 'Introduction', href: '#introduction' },
  { label: 'Stack', href: '#stack' },
  { label: 'Background', href: '#experience' },
  { label: 'Projects', href: '#projects' },
]

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <nav class="navbar">
    <button
      type="button"
      class="menu-toggle"
      :aria-expanded="isOpen"
      aria-controls="navbar-menu"
      aria-label="Toggle navigation menu"
      @click="isOpen = !isOpen"
    >
      <i class="pi" :class="isOpen ? 'pi-times' : 'pi-bars'"></i>
    </button>

    <ul
      id="navbar-menu"
      class="nav-links"
      :class="{ 'nav-links--open': isOpen }"
    >
      <li v-for="link in links" :key="link.href">
        <a :href="link.href" @click="closeMenu">{{ link.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 3.25rem;
  padding: 0.75rem 1.25rem;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-sizing: border-box;
}

.menu-toggle {
  display: none;
  position: absolute;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.25rem;
  line-height: 1;
}

.nav-links {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1125px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: clamp(0.75rem, 1.5vw, 0.875rem);
  letter-spacing: 0.04em;
  display: inline-block;
  transition: opacity 0.2s ease, transform 0.4s ease;
  white-space: nowrap;
}

.nav-links a:hover {
  transform: translateY(-4px);
  opacity: 0.6;
}

@media (max-width: 768px) {
  .navbar {
    justify-content: flex-end;
  }

  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    max-width: none;
    padding: 0.5rem 0;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 0px solid rgba(255, 255, 255, 0.08);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-0.5rem);
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
  }

  .nav-links--open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .nav-links li {
    width: 100%;
  }

  .nav-links a {
    display: block;
    padding: 0.875rem 1.25rem;
    text-align: center;
    white-space: normal;
  }
}
</style>