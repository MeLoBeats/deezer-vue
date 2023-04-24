import { createApp } from 'vue'
import App from './App.vue'
import './assets/reset.css'
import router from './routes'


createApp(App)
    .use(router)
    .mount('#app')
