import { h, defineComponent, reactive, onUnmounted, onMounted } from "@vue/runtime-core"
import Map from '../component/Map'
import Plane from '../component/Plane'
import EnemyPlane from '../component/Enemy'
import { game } from '../Game'
import { hitTestObj } from '../utils/index'
export default defineComponent({
  setup (props, ctx) {
    // ref 只能定义一般类型的值为响应式的
    // reactive 可以定义一个引用类型的值为响应式的
    // 我方飞机
    const { planeInfo } = createPlane()
    // 敌方飞机
    const { enemyPlanes } = createEnemyPlanes()
    const handleTicker = () => {
      // 让地方飞机移动
      enemyPlanes.forEach(info =>{
        info.y ++
      })
      // 碰撞检测
    enemyPlanes.forEach(enemyInfo =>{
      if (hitTestObj(enemyInfo, planeInfo)) {
        console.log('hit')
        // 游戏结束
        ctx.emit('changePage', 'EndPage')
      }
    })
    }
    // 生命周期函数放在setup里
    onMounted(() => {
      game.ticker.add(handleTicker)
    })
    onUnmounted(() => {
      game.ticker.remove(handleTicker)
    })
    return {
      planeInfo,
      enemyPlanes
    }
  },
  render(ctx) {
    // 创建敌机
    const createEnemyPlanes = () => {
      return ctx.enemyPlanes.map(info => {
        return h(EnemyPlane, { x: info.x, y: info.y })
      })
    } 
    // 背景图片
    return h("Container",
      [
        h(Map),
        h(Plane, { x: ctx.planeInfo.x, y: ctx.planeInfo.y}),
        ...createEnemyPlanes()
      ]
    )
  }
})
function createEnemyPlanes () {
  const enemyPlanes = reactive([
    {
      x: 50,
      y: 0,
      width: 308,
      height: 207
    }
  ])
  return {
    enemyPlanes
  }
}

function createPlane () {
  const planeInfo = reactive({x: 300, y: 600, width: 258, height: 364 })
  // 键盘控制我方飞机的移动
  const speed = 15
  window.addEventListener('keydown', (e) => {
    switch (e.code) {
      case 'ArrowUp':
        planeInfo.y -= speed
        break;
      case 'ArrowDown':
        planeInfo.y += speed
        break;
      case 'ArrowLeft':
        planeInfo.x -= speed
        break;
      case 'ArrowRight':
        planeInfo.x += speed
        break;
      default:
        break;
    }
  })
  return { planeInfo }
}