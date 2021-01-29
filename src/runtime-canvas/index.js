import { createRenderer } from '@vue/runtime-core'
import { Graphics, Text } from 'pixi.js'
const renderer = createRenderer({
  createElement (type) {
    console.log(type)
    // 绘制矩形
    // pixi.js的方法
    let element
    if (type === 'rect') {
      element = new Graphics()
      element.beginFill(0xff0000)
      element.drawRect(0, 0, 500, 500)
      element.endFill()
    } else if (type === 'circle') {
      element = new Graphics()
      element.beginFill(0xcccccc)
      element.drawCircle(0, 0, 100)
      element.endFill()
    }
    return element
  },
  setElementText(node, text) {
    const cText = new Text(text)
    node.addChild(cText)
  },
  createText(text) {
    return new Text(text)
  },
  patchProp(el, key, prevValue, nextValue) {
    // pixi
    el[key] = nextValue
  },
  insert(el, parent) {
    parent.addChild(el)
  },
  // 处理注释
  createComment() {},
  // 获取父节点
  parentNode() {},
  // 获取兄弟节点
  nextSibling() {},
  // 删除节点时调用
  remove(el) {
    const parent = el.parent
    if (parent) {
      parent.removeChild(el)
    }
  }
})
export function createApp (rootComponent) {
  return renderer.createApp(rootComponent)
}