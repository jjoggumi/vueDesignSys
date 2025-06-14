import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import '@/assets/style/main.scss'
//import store from '@/store/store'

//import '@/plugins/hiClass.js' 

const app = createApp(App)

app.use(router)
// app.use(store)
app.mount('#app')
