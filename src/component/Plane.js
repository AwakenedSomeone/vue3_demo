import { h, defineComponent, ref, toRefs, reactive } from "@vue/runtime-core"
import planeImg from '../../assets/images/plane.png'
// import { game } from '../Game'
export default defineComponent({
  // 接收props
  props: ['x', 'y'],
  setup (props, ctx) {
    // return {
    //   // 直接这样赋值，props.x是一个简单值，会有响应式丢失问题
    //   x: props.x,
    //   y: props.y
    // }
    // 用toRefs转为响应式的对象
    const { x, y } = toRefs(props)
    return {
      x,
      y
    } 
  },
  render(ctx) {
    // 背景图片
    return h("Container",
    { x: ctx.x, y: ctx.y },
      [
        h("Sprite", { texture: planeImg })
      ]
    )
  }
})