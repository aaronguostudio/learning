var canvas = document.getElementById('myCanvas')
var gl = canvas.getContext('webgl')

var program = gl.createProgram()

var VSHADER_SOURCE, FSHADER_SOURCE

VSHADER_SOURCE =
  'attribute vec4 a_Position;\n' + 
  'uniform mat4 u_ModelMatrix;\n' +
  'uniform mat4 u_ViewMatrix;\n' +
  'uniform mat4 u_ProjectionMatrix;\n' + 
  'void main () {\n' + 
    'gl_Position = u_ProjectionMatrix * u_ViewMatrix * u_ModelMatrix * a_Position;\n' + 
  '}\n'

FSHADER_SOURCE =
  'void main () {\n' + 
    'gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' + 
  '}\n'

var vertexShader, fragmentShader

function createShader (gl, sourceCode, type) {
  // create shader
  var shader = gl.createShader(type)
  gl.shaderSource(shader, sourceCode)
  gl.compileShader(shader)
  return shader
}

// define vertex shader
vertexShader = createShader(gl, VSHADER_SOURCE, gl.VERTEX_SHADER)
// define frament shader
fragmentShader = createShader(gl, FSHADER_SOURCE, gl.FRAGMENT_SHADER)

// attach shader to program
gl.attachShader(program, vertexShader)
gl.attachShader(program, fragmentShader)

// link program to context
gl.linkProgram(program)
gl.useProgram(program)
gl.program = program

var currentAngle = 0
var g_last = Date.now()

var tick = function () {
  // update the new rotation angle
  animate()
  // draw
  draw()
  requestAnimationFrame(tick)
}

function initVertexBuffers (gl) {
  var vertices = new Float32Array([
    0, 0.5, -0.5, -0.5, 0.5, -0.5
  ])
  var n = 3
  var vertexBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
  // write data into the buffer object
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
  // get attribute a_Position address in vertex shader
  var a_Position = gl.getAttribLocation(gl.program, 'a_Position')
  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0)
  // enable a_Position variable
  gl.enableVertexAttribArray(a_Position)
  return n
}

// write the positions of vertices to a vertex shader
var n = initVertexBuffers(gl)

gl.clearColor(0, 0, 0, 1)

var u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix')
var modelMatrix = new Matrix4()

var u_ViewMatrix = gl.getUniformLocation(gl.program, 'u_ViewMatrix')
var viewMatrix = new Matrix4()
viewMatrix.lookAt(100, 100, 100, 0, 0, 0, 0, 1, 0)

var u_ProjectionMatrix = gl.getUniformLocation(gl.program, 'u_ProjectionMatrix')
var projectionMatrix = new Matrix4()
// projectionMatrix.perspective(120, 1, 0.1, 1000)
projectionMatrix.ortho(-1, 1, -1, 1, 0.1, 1000)

function animate () {
  var now = Date.now()
  var duration = now - g_last
  g_last = now
  currentAngle = currentAngle + duration / 1000 * 180
}

function draw () {
  // clear canvas and add background color
  modelMatrix.setRotate(currentAngle, 0, 1, 0)
  gl.uniformMatrix4fv(u_ModelMatrix, false, modelMatrix.elements)
  gl.uniformMatrix4fv(u_ViewMatrix, false, viewMatrix.elements)
  gl.uniformMatrix4fv(u_ProjectionMatrix, false, projectionMatrix.elements)
  gl.clear(gl.COLOR_BUFFER_BIT)
  gl.drawArrays(gl.TRIANGLES, 0, n)
}

tick()

