import { createApp } from './src/runtime-canvas'

// 需要根组件
import App from './src/App'
// 根容器
import { getRootContanier } from './src/Game'
// 将创建的根组件挂载到根容器中
createApp(App).mount(getRootContanier())