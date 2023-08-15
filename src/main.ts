import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import '@/assets/main.css'
import vuetify from '@/plugin/vuetify'
import { Client } from 'appwrite'
const client = new Client()

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('64db2ae2479811cd6b7c')

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
