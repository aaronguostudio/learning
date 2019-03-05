import blockConf from '../../confs/block-conf'
import { customAnimation } from '../../libs/animation'

export default class BaseBlock {
  constructor (type) {
    this.type = type // cuboid | cylinder
    this.height = blockConf.height
    this.width = blockConf.width
    this.status = 'stop'
    this.scale = 1
  }

  popup () {
    this.instance.position.set(this.x, this.y + 30, this.z)
    customAnimation.to(this.instance.position, 0.5, { x: this.x, y: this.y, z: this.z, ease: 'Bounce.easeOut' })
  }

  _shrink () {
    const DELTA_SCALE = 0.005
    const MIN_SCALE = 0.55
    this.scale -= DELTA_SCALE
    this.scale = Math.max(MIN_SCALE, this.scale)
    if (this.scale <= MIN_SCALE) {
      this.status = 'stop'
      return
    }
    this.instance.scale.y = this.scale
    const deltaY = this.height * DELTA_SCALE / 2
    this.instance.position.y -= deltaY
  }

  rebound () {
    this.status = 'stop'
    this.scale = 1
    customAnimation.to(this.instance.scale, 0.5, { ease: 'Elastic.easeOut', y: 1 })
    customAnimation.to(this.instance.position, 0.5, { ease: 'Elastic.easeOut', y: 0})
  }

  shrink () {
    this.status = 'shrink'
  }

  update () {
    if (this.status == 'shrink') {
      this._shrink()
    }
  }

  getVertices () {
    const vertices = []
    const centerPosition = {
      x: this.instance.position.x,
      z: this.instance.position.z
    }
    vertices.push([centerPosition.x + this.width / 2, centerPosition.z + this.width / 2])
    vertices.push([centerPosition.x + this.width / 2, centerPosition.z - this.width / 2])
    vertices.push([centerPosition.x - this.width / 2, centerPosition.z + this.width / 2])
    vertices.push([centerPosition.x - this.width / 2, centerPosition.z - this.width / 2])
    return vertices
  }
}