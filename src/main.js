import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import './assets/main.css'
import Aura from '@primeuix/themes/aura'
import 'primeicons/primeicons.css'
import AnimateOnScroll from 'primevue/animateonscroll'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.directive('animateonscroll', AnimateOnScroll)

app.use(router)

app.mount('#app')
