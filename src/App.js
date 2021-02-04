import {defineComponent, h, computed, ref } from '@vue/runtime-core'
import StartPage from './page/startPage'
import GamePage from './page/gamePage'
import EndPage from './page/endPage'
export default defineComponent({
  setup (props, ctx) {
    // ref创建一个响应式对象， 参数是值类型： string number
    const currentPageName = ref('GamePage')
    // 一个依赖别的属性的属性 采用计算属性
    const currentPage = computed(() => {
      // 因为currentPageName是响应式的，通过打印可以知道，要拿到值需要通过.value
      if (currentPageName.value === 'StartPage') {
        return StartPage
      } else if (currentPageName.value === 'GamePage') {
        return GamePage
      } else if (currentPageName.value === 'EndPage') {
        return EndPage
      }
    })
    return {
      currentPageName,
      currentPage
    }
  },
  render (ctx) {
    const vnode = h('Container', 
      [
        h(ctx.currentPage, {
          onChangePage (page) {
            // render 里会自动解构，所以这里不需要再通过.value调用了
            ctx.currentPageName = page
          }
        })
        // h(GamePage)
      ]
    )
    return vnode
  } 
})