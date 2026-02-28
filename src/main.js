import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import './assets/main.css'
import Aura from '@primeuix/themes/aura'
import 'primeicons/primeicons.css'
import AnimateOnScroll from 'primevue/animateonscroll'
import 'primeflex/primeflex.css'
import ScrollTop from 'primevue/scrolltop'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.directive('animateonscroll', AnimateOnScroll)

app.component('ScrollTop', ScrollTop)

app.use(router)

app.mount('#app')
