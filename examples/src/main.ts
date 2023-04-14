import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import UI from '@apollojie/components'
import '@apollojie/components/dist/style.css'
import 'ant-design-vue/dist/antd.css'

createApp(App).use(UI).mount('#app')
