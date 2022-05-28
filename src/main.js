import { createApp } from 'vue'
import App from './App.vue'
import fontSize from './directive/v-font-size'
import { createPinia } from 'pinia'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.directive(fontSize.directiveName, fontSize.props)

app.mount('#app')
