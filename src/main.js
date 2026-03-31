import { createApp } from 'vue'

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

import App from './App.vue'
import './style.css'
import './assets/scss/main.scss'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount('#app')

