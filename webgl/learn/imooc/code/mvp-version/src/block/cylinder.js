import BaseBlock from './base'

export default class Cylinder extends BaseBlock {
  constructor (x, y, z, type, width) {
    super('cylinder')
    const size = width || this.width
    var geometry = new THREE.CylinderGeometry(size / 2, size / 2, this.height, 120)
    var material = new THREE.MeshPhongMaterial({
      color: 0xffffff
    })
    this.instance = new THREE.Mesh( geometry, material )
    this.instance.receiveShadow = true
    this.instance.name = 'block'
    this.x = x
    this.y = y
    this.z = z
    this.instance.castShadow = true
    if (type == 'popup') {
      this.popup()
    } else if (type == 'show') {
      this.instance.position.x = this.x
      this.instance.position.y = this.y
      this.instance.position.z = this.z
    }
  }
}