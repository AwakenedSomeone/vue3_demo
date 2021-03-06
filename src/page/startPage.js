import { h, defineComponent } from "@vue/runtime-core"
import startPageImg from '../../assets/images/start_page.jpg'
import startBtnImg from '../../assets/images/startBtn.png'
export default defineComponent({
  setup (props, ctx) {
    // 没有this
    // setup作为vue3的入口函数
    const onClick = () => {
      console.log('1212')
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
        h("Sprite", { texture: startPageImg }),
        h("Sprite", {
          texture: startBtnImg,
          x: 226,
          y: 514,
          interactive: true, // 允许交互 pix里的参数
          onClick: ctx.onClick
        })
      ]
    )
  }
})