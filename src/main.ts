import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.scss'
import App from './App.vue'
import { VueShowdownPlugin } from 'vue-showdown'

const pinia = createPinia()
const app = createApp(App)
app
  .use(VueShowdownPlugin, {
    // 设置 showdown 默认 flavor
    flavor: 'github',
    // 设置 showdown 默认 options （会覆盖上面 flavor 的 options）
    options: {
      emoji: false,
    },
  })
  .use(pinia)

app.mount('#app')
