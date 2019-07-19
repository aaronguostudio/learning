- download material: https://www.solarsystemscope.com/textures
- 3d models: https://www.turbosquid.com/
  - filter for dae file (collada)
  - in editor, can convert dae file to scn file

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
