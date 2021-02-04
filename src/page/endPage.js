import { h, defineComponent } from "@vue/runtime-core"
import endPageImg from '../../assets/images/end_page.jpg'
import restartBtnImg from '../../assets/images/restartBtn.png'
export default defineComponent({
  setup (props, ctx) {
    // 没有this
    // setup作为vue3的入口函数
    const onClick = () => {
      ctx.emit('changePage', 'GamePage')
    }
    return {
      // return的内容会传给ctx，在render里能通过ctx拿到
      onClick
    }
  },
  render(ctx) {
    // 背景图片
    return h("Container",
      [
        h("Sprite", { texture: endPageImg }),
        h("Sprite", {
          texture: restartBtnImg,
          x: 226,
          y: 514,
          interactive: true, // 允许交互 pix里的参数
          onClick: ctx.onClick
        })
      ]
    )
  }
})