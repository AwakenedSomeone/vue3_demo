import { Application } from 'pixi.js'
// setup canvas
export const game = new Application({
  width: 750,
  height: 900
})
document.body.append(game.view)

// game.stage 作为根容器
export function getRootContanier () {
  return game.stage
}