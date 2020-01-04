/**
 * 游戏主函数
 */

import * as THREE from '../libs/three.js'
window.THREE = THREE

import game from './game/game.js'

export default class Main {
  constructor() {
    game.init()
  }
}