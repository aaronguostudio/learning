import utils from '../utils/index'
import bottleConf from '../../confs/bottle-conf'
import blockConf from '../../confs/block-conf'
import gameConf from '../../confs/game-conf'
import { customAnimation } from '../../libs/animation'

class Bottle {
  constructor () {
    this.status = 'stop'
    this.velocity = {
      vx: 0, // 水平方向速度
      vy: 0 //竖直方向速度
    }
    this.flyingTime = 0
    this.direction = 0
    this.scale = 1
  }

  init () {
    this.loader = new THREE.TextureLoader()
    this.obj = new THREE.Object3D()
    this.obj.name = 'bottle'
    this.obj.position.set(bottleConf.initPosition.x, bottleConf.initPosition.y + 30, bottleConf.initPosition.z)

    this.bottle = new THREE.Object3D()
    var texture = this.loader.load('/game/res/images/head.png')
    var basicMaterial = new THREE.MeshBasicMaterial({ map: texture })

    var headRadius = 2.1 * 0.72
    this.human = new THREE.Object3D()
    this.head = new THREE.Mesh(new THREE.OctahedronGeometry(headRadius * 1.4), basicMaterial)
    this.head.castShadow = true
    var texture2 = this.loader.load('/game/res/images/bottom.png')
    this.bottom = new THREE.Mesh(new THREE.CylinderGeometry(0.88 * headRadius, 1.27 * headRadius, 2.68 * headRadius, 20), new THREE.MeshBasicMaterial({ map: texture2 }))
    this.bottom.rotation.y = 4.7
    this.bottom.castShadow = true
    var middleGeometry = new THREE.CylinderGeometry(headRadius, 0.88 * headRadius, 1.2 * headRadius, 20)
    var texture3 = this.loader.load('/game/res/images/top.png')
    var middleMaterial = new THREE.MeshBasicMaterial({ map: texture3 })
    var materials = [middleMaterial, basicMaterial]
    var totalGeometry = new THREE.Geometry()
    middleGeometry.rotateY(4.7)
    utils.merge(totalGeometry, middleGeometry, 0, [{ x: 0, y: this.bottom.position.y + 1.94 * headRadius, z: 0 }])
    var topGeometry = new THREE.SphereGeometry(headRadius, 20, 20)
    topGeometry.scale(1, 0.54, 1)
    utils.merge(totalGeometry, topGeometry, 1, [{ x: 0, y: this.bottom.position.y + 2.54 * headRadius, z: 0 }])
    this.middle = new THREE.Mesh(totalGeometry, materials)
    this.middle.castShadow = true
    this.body = new THREE.Object3D()
    this.body.add(this.bottom)
    this.body.add(this.middle)
    this.human.add(this.body)
    this.head.position.y = 7.56
    this.head.position.x = 0
    this.head.position.z = 0
    this.human.add(this.head)
    this.bottle.add(this.human)

    this.bottle.position.y = 2.3
    this.bottle.position.x = 0
    this.bottle.position.z = 0
    this.obj.add(this.bottle)
  }

  reset () {
    this.stop()
    this.obj.position.set(bottleConf.initPosition.x, bottleConf.initPosition.y + 30, bottleConf.initPosition.z)
  }

  showup () {
    customAnimation.to(this.obj.position, 0.5, { x: bottleConf.initPosition.x, y: bottleConf.initPosition.y + blockConf.height / 2, z: bottleConf.initPosition.z, ease: 'Bounce.easeOut' })
  }

  stop () {
    this.status = 'stop'
    this.velocity = {
      vx: 0, // 水平方向速度
      vy: 0 //竖直方向速度
    }
    this.flyingTime = 0
    this.scale = 1
  }

  _shrink () {
    const DELTA_SCALE = 0.005
    const HORIZON_DELTA_SCALE = 0.007
    const HEAD_DELTA = 0.03
    const MIN_SCALE = 0.55
    this.scale -= DELTA_SCALE
    this.scale = Math.max(MIN_SCALE, this.scale)
    if (this.scale <= MIN_SCALE) {
      return
    }
    this.body.scale.y = this.scale
    this.body.scale.x += HORIZON_DELTA_SCALE
    this.body.scale.z += HORIZON_DELTA_SCALE
    this.head.position.y -= HEAD_DELTA
    const bottleDeltaY = HEAD_DELTA / 2
    const deltaY = blockConf.height * DELTA_SCALE / 2
    this.obj.position.y -= (bottleDeltaY + deltaY * 2)
  }

  shrink () {
    this.status = 'shrink'
  }

  update () {
    if (this.status == 'shrink') {
      this._shrink()
    } else if (this.status == 'jump') {
      const tickTime = Date.now() - this.lastFrameTime
      this._jump(tickTime)
    }
    this.head.rotation.y += 0.06
    this.lastFrameTime = Date.now()
  }

  

  setDirection (direction, axis) {
    this.direction = direction
    this.axis = axis
  }

  rotate () {    
    const scale = 1.4
    this.human.rotation.z = this.human.rotation.x = 0
    if (this.direction == 0) { // x
      customAnimation.to(this.human.rotation, 0.14, { z: this.human.rotation.z - Math.PI })
      customAnimation.to(this.human.rotation, 0.18, { z: this.human.rotation.z - 2 * Math.PI, delay: 0.14 })
      customAnimation.to(this.head.position, 0.1, { y: this.head.position.y + 0.9 * scale, x: this.head.position.x + 0.45 * scale })
      customAnimation.to(this.head.position, 0.1, { y: this.head.position.y - 0.9 * scale, x: this.head.position.x - 0.45 * scale, delay: 0.1 })
      customAnimation.to(this.head.position, 0.15, { y: 7.56, x: 0, delay: 0.25 })
      customAnimation.to(this.body.scale, 0.1, { y: Math.max(scale, 1), x: Math.max(Math.min(1 / scale, 1), 0.7), z: Math.max(Math.min(1 / scale, 1), 0.7) })
      customAnimation.to(this.body.scale, 0.1, { y: Math.min(0.9 / scale, 0.7), x: Math.max(scale, 1.2), z: Math.max(scale, 1.2), delay: 0.1 })
      customAnimation.to(this.body.scale, 0.3, { y: 1, x: 1, z: 1, delay: 0.2 })
    } else if (this.direction == 1) { // z
      customAnimation.to(this.human.rotation, 0.14, { x: this.human.rotation.x - Math.PI })
      customAnimation.to(this.human.rotation, 0.18, { x: this.human.rotation.x - 2 * Math.PI, delay: 0.14 })
      customAnimation.to(this.head.position, 0.1, { y: this.head.position.y + 0.9 * scale, z: this.head.position.z - 0.45 * scale })
      customAnimation.to(this.head.position, 0.1, { z: this.head.position.z + 0.45 * scale, y: this.head.position.y - 0.9 * scale, delay: 0.1 })
      customAnimation.to(this.head.position, 0.15, { y: 7.56, z: 0, delay: 0.25 })
      customAnimation.to(this.body.scale, 0.05, { y: Math.max(scale, 1), x: Math.max(Math.min(1 / scale, 1), 0.7), z: Math.max(Math.min(1 / scale, 1), 0.7) })
      customAnimation.to(this.body.scale, 0.05, { y: Math.min(0.9 / scale, 0.7), x: Math.max(scale, 1.2), z: Math.max(scale, 1.2), delay: 0.1 })
      customAnimation.to(this.body.scale, 0.2, { y: 1, x: 1, z: 1, delay: 0.2 })
    }
  }

  jump (duration) {
    this.status = 'jump'
  }

  _jump(tickTime) {
    const t = tickTime / 1000
    this.flyingTime = this.flyingTime + t
    const translateH = this.velocity.vx * t
    const translateY = this.velocity.vy * t - 0.5 * gameConf.gravity * t * t - gameConf.gravity * this.flyingTime * t
    this.obj.translateY(translateY)
    this.obj.translateOnAxis(this.axis, translateH)
  }
}

export default new Bottle()

