import { createApp } from 'vue'
import 'virtual:svg-icons-register'
import 'uno.css'
import 'virtual:uno.css'

import App from './App.vue'
import router from './router'
import store from './stores'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
