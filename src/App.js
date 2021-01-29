import {defineComponent, h } from '@vue/runtime-core'
import Circle from './component/Circle'
export default defineComponent({
  render () {
    const vnode = h('rect', {x: 100, y: 100},
      [
        '你好',
        h(Circle)
      ]
    )
    return vnode
  } 
})