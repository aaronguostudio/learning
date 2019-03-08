var canvas = document.getElementById('myCanvas')
var gl = canvas.getContext('webgl')

// a_Position 通过 attribute 传入
var VSHADER_SOURCE, FSHADER_SOURCE

VSHADER_SOURCE =
  'attribute vec4 a_Position;\n' + 
  'uniform mat4 u_ModelMatrix;\n' +
  'void main () {\n' + 
  'gl_Position = u_ModelMatrix * a_Position;\n' +
  '}\n'

FSHADER_SOURCE =
  'void main () {\n' +
    'gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' + 
  '}\n'

// 绑定顶点着色器和片元着色器 vertexShader and fragmentShader
var program = gl.createProgram()
var vertexShader, fragmentShader

function createShader (gl, sourceCode, type) {
  // create shader
  var shader = gl.createShader(type)
  gl.shaderSource(shader, sourceCode)
  // compile shader
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

function initVertexBuffers (gl) {
  var vertices = new Float32Array([
    -1, 1, -1, -1, 1, -1
  ])

  // get three times from vertices array
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

// write positions of vertices to a vertex shader
var n = initVertexBuffers(gl)

gl.clearColor(0, 0, 0, 1)

var u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix')
var modelMatrix = new Matrix4()
modelMatrix.setRotate(75, 0, 1, 0)
gl.uniformMatrix4fv(u_ModelMatrix, false, modelMatrix.elements)

// clear canvas and add bg color
function draw() {
  gl.clear(gl.COLOR_BUFFER_BIT)
  // mode, first, count
  gl.drawArrays(gl.TRIANGLES, 0, n)
}

draw()