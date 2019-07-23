- download material: https://www.solarsystemscope.com/textures
- 3d models: https://www.turbosquid.com/
  - filter for dae file (collada)
  - in swift editor menu, can convert dae file to scn file
- Import the 3d model, and in diffuse, can choose a different texture

```swfit
let cube = SCNBox(width: 0.1, height: 0.1, length: 0.1, chamferRadius: 0.01)
let material = SCNMaterial()
material.diffuse.contents = UIColor.red
cube.materials = [material]
let node = SCNNode()
node.position = SCNVector3(x: 0, y: 0.1, z: -0.5)
node.geometry = cube

let sphere = SCNSphere(radius: 0.05)
let sphereMaterial = SCNMaterial()
sphereMaterial.diffuse.contents = UIImage(named: "art.scnassets/earth.jpg")
sphere.materials = [sphereMaterial]
let sphereNode = SCNNode()
sphereNode.position = SCNVector3(x: 0, y: 0.1, z: 0.5)
sphereNode.geometry = sphere

sceneView.scene.rootNode.addChildNode(node)
sceneView.scene.rootNode.addChildNode(sphereNode)
sceneView.autoenablesDefaultLighting = true
```

<!-- start from 360 -->


# AR Plane Detection
- configure the plane
- render the plane

```swift
// will be triggered when found a horizontal plane
func renderer(_ renderer: SCNSceneRenderer, didAdd node: SCNNode, for anchor: ARAnchor) {
  if anchor is ARPlaneAnchor {
      let planeAnchor = anchor as! ARPlaneAnchor

      let plane = SCNPlane(width: CGFloat(planeAnchor.extent.x), height: CGFloat(planeAnchor.extent.z))

      let planeNode = SCNNode()

      planeNode.position = SCNVector3(x: planeAnchor.center.x, y: 0, z: planeAnchor.center.z)

      // rotate the plane clockwise 90 degrees
      planeNode.transform = SCNMatrix4MakeRotation(-Float.pi / 2, 1, 0, 0)

      let gridMaterial = SCNMaterial()

      gridMaterial.diffuse.contents = UIImage(named: "art.scnassets/grid.png")

      plane.materials = [gridMaterial]

      planeNode.geometry = plane
      node.addChildNode(planeNode)
  } else {
      return
  }
}

```

- detect touching action

```swift
override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
  if let touch = touches.first {
    let touchLocation = touch.location(in: sceneView)

    let results = sceneView.hitTest(touchLocation, types: .existingPlaneUsingExtent)

    // pressed
    if let hitResult = results.first {
      print(hitResult)

      // Create a new scene and place it on the plane
      let scene = SCNScene(named: "art.scnassets/diceCollada.scn")!

      if let diceNode = scene.rootNode.childNode(withName: "Dice", recursively: true) {

        diceNode.position = SCNVector3(
          x: hitResult.worldTransform.columns.3.x,
          y: hitResult.worldTransform.columns.3.y + diceNode.boundingSphere.radius,
          z: hitResult.worldTransform.columns.3.z
        )
        sceneView.scene.rootNode.addChildNode(diceNode)

        // arc4random_uniform(4) + 1
        // generate a random number 1 - 4
        let randomX = Float(arc4random_uniform(4) + 1) * (Float.pi/2)
        let randomZ = Float(arc4random_uniform(4) + 1) * (Float.pi/2)

        // animation
        diceNode.runAction(
          SCNAction.rotateBy(
            x: CGFloat(randomX * 5),
            y: 0,
            z: CGFloat(randomZ * 5),
            duration: 0.5
          )
        )
      }
    }
  }
}
```
