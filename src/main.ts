import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import formatPriceString from './plugins/formatPriceString'

const app = createApp(App)

app.use(formatPriceString)

app.mount('#app')
