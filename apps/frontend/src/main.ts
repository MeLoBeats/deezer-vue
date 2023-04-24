import { createApp } from 'vue'
import App from './App.vue'
import './assets/reset.css'
import router from './routes'
import { VueQueryPlugin } from "vue-query";


createApp(App)
    .use(VueQueryPlugin)
    .use(router)
    .mount('#app')
