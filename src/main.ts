// register vue composition api globally
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import type { AppContext } from './types'
import App from './App.vue'

// normalize.css
// import '@unocss/reset/normalize.css'
// reset.css by Eric Meyer https://meyerweb.com/eric/tools/css/reset/index.html
// import '@unocss/reset/eric-meyer.css'
// preflights from tailwind
// import '@unocss/reset/tailwind.css'
import 'uno.css'

(async() => {
  // 创建应用
  const app = createApp(App)

  // 创建路由
  const routes = setupLayouts(generatedRoutes)
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  const context: AppContext<true> = {
    app,
    router,
  }
  // 安装插件
  Object.values(import.meta.globEager('./plugins/*.ts')).map(i => i.install?.(context))
  app.use(router)

  await router.isReady()
  app.mount('#app', true)
})()
