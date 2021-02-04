import { h, defineComponent, ref } from "@vue/runtime-core"
import mapImg from '../../assets/images/map.jpg'
import { game } from '../Game'
export default defineComponent({
  setup (props, ctx) {
    const viewHeight = 1080
    const mapy1 = ref(0)
    const mapy2 = ref(-viewHeight)
    const speed = 5
    game.ticker.add(() => {
      mapy1.value += speed
      mapy2.value += speed
      if (mapy1.value >= viewHeight) {
        mapy1.value = -viewHeight
      }
      if (mapy2.value >= viewHeight) {
        mapy2.value = -viewHeight
      }
    })
    return {
      mapy1,
      mapy2
    }
  },
  render(ctx) {
    // 背景图片
    return h("Container",
      [
        h("Sprite", { texture: mapImg, y: ctx.mapy1 }),
        h("Sprite", { texture: mapImg, y: ctx.mapy2 })
      ]
    )
  }
})