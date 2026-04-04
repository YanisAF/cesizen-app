import { createApp, defineComponent, h } from 'nativescript-vue'
import { createPinia } from 'pinia'
import { authApi } from './services/api'
import App from './App.vue'
import BackendDownView from './views/BackendDownView.vue'
import { useAppStore } from './stores/app'

const pinia = createPinia()

const RootComponent = defineComponent({
  setup() {
    const appStore = useAppStore()
    
    const timeout = setTimeout(() => {
      if (!appStore.isReady) {
        appStore.isDown = true
        appStore.isReady = true
      }
    }, 5000)
    
    authApi.checkBackend()
    .then(() => { 
      clearTimeout(timeout)
      appStore.isReady = true 
    })
    .catch((e) => { 
      clearTimeout(timeout)
      appStore.isDown = true
      appStore.isReady = true 
    })
    
    return () => {
      if (!appStore.isReady) return h('Page', [h('ActivityIndicator', { busy: true, verticalAlignment: 'center' })])
        if (appStore.isDown) return h(BackendDownView)
          return h(App)
    }
  }
})

const app = createApp(RootComponent)
app.use(pinia)
app.start()