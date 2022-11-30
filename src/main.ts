import { createApp } from 'vue'
import './style.scss'
import '../node_modules/github-markdown-css/github-markdown.css'
import App from './App.vue'
import { VueShowdownPlugin } from 'vue-showdown'

const app = createApp(App)
app.use(VueShowdownPlugin, {
  // 设置 showdown 默认 flavor
  flavor: 'github',
  // 设置 showdown 默认 options （会覆盖上面 flavor 的 options）
  options: {
    emoji: false,
  },
})

app.mount('#app')
