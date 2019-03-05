/**
 * Multiply the viewing matrix from the right.
 * @param eyeX, eyeY, eyeZ The position of the eye point.
 * @param centerX, centerY, centerZ The position of the reference point.
 * @param upX, upY, upZ The direction of the up vector.
 * @return this
 */
Matrix4.prototype.lookAt = function(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {
  return this.concat(new Matrix4().setLookAt(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ));
};

Matrix4.prototype.setLookAt = function(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {
  var e, fx, fy, fz, rlf, sx, sy, sz, rls, ux, uy, uz;

  fx = centerX - eyeX;
  fy = centerY - eyeY;
  fz = centerZ - eyeZ;

  // Normalize f.
  rlf = 1 / Math.sqrt(fx*fx + fy*fy + fz*fz);
  fx *= rlf;
  fy *= rlf;
  fz *= rlf;

  // Calculate cross product of f and up.
  sx = fy * upZ - fz * upY;
  sy = fz * upX - fx * upZ;
  sz = fx * upY - fy * upX;

  // Normalize s.
  rls = 1 / Math.sqrt(sx*sx + sy*sy + sz*sz);
  sx *= rls;
  sy *= rls;
  sz *= rls;

  // Calculate cross product of s and f.
  ux = sy * fz - sz * fy;
  uy = sz * fx - sx * fz;
  uz = sx * fy - sy * fx;

  // Set to this.
  e = this.elements;
  e[0] = sx;
  e[1] = ux;
  e[2] = -fx;
  e[3] = 0;

  e[4] = sy;
  e[5] = uy;
  e[6] = -fy;
  e[7] = 0;

  e[8] = sz;
  e[9] = uz;
  e[10] = -fz;
  e[11] = 0;

  e[12] = 0;
  e[13] = 0;
  e[14] = 0;
  e[15] = 1;

  // Translate.
  return this.translate(-eyeX, -eyeY, -eyeZ);
};

Matrix4.prototype.setPerspective = function(fovy, aspect, near, far) {
  var e, rd, s, ct;

  if (near === far || aspect === 0) {
    throw 'null frustum';
  }
  if (near <= 0) {
    throw 'near <= 0';
  }
  if (far <= 0) {
    throw 'far <= 0';
  }

  fovy = Math.PI * fovy / 180 / 2;
  s = Math.sin(fovy);
  if (s === 0) {
    throw 'null frustum';
  }

  rd = 1 / (far - near);
  ct = Math.cos(fovy) / s;

  e = this.elements;

  e[0]  = ct / aspect;
  e[1]  = 0;
  e[2]  = 0;
  e[3]  = 0;

  e[4]  = 0;
  e[5]  = ct;
  e[6]  = 0;
  e[7]  = 0;

  e[8]  = 0;
  e[9]  = 0;
  e[10] = -(far + near) * rd;
  e[11] = -1;

  e[12] = 0;
  e[13] = 0;
  e[14] = -2 * near * far * rd;
  e[15] = 0;

  return this;
};

/**
 * Multiply the perspective projection matrix from the right.
 * @param fovy The angle between the upper and lower sides of the frustum.
 * @param aspect The aspect ratio of the frustum. (width/height)
 * @param near The distances to the nearer depth clipping plane. This value must be plus value.
 * @param far The distances to the farther depth clipping plane. This value must be plus value.
 * @return this
 */
Matrix4.prototype.perspective = function(fovy, aspect, near, far) {
  return this.concat(new Matrix4().setPerspective(fovy, aspect, near, far));
};

/**
 * Set the orthographic projection matrix.
 * @param left The coordinate of the left of clipping plane.
 * @param right The coordinate of the right of clipping plane.
 * @param bottom The coordinate of the bottom of clipping plane.
 * @param top The coordinate of the top top clipping plane.
 * @param near The distances to the nearer depth clipping plane. This value is minus if the plane is to be behind the viewer.
 * @param far The distances to the farther depth clipping plane. This value is minus if the plane is to be behind the viewer.
 * @return this
 */
Matrix4.prototype.setOrtho = function(left, right, bottom, top, near, far) {
  var e, rw, rh, rd;

  if (left === right || bottom === top || near === far) {
    throw 'null frustum';
  }

  rw = 1 / (right - left);
  rh = 1 / (top - bottom);
  rd = 1 / (far - near);

  e = this.elements;

  e[0]  = 2 * rw;
  e[1]  = 0;
  e[2]  = 0;
  e[3]  = 0;

  e[4]  = 0;
  e[5]  = 2 * rh;
  e[6]  = 0;
  e[7]  = 0;

  e[8]  = 0;
  e[9]  = 0;
  e[10] = -2 * rd;
  e[11] = 0;

  e[12] = -(right + left) * rw;
  e[13] = -(top + bottom) * rh;
  e[14] = -(far + near) * rd;
  e[15] = 1;

  return this;
};

/**
 * Multiply the orthographic projection matrix from the right.
 * @param left The coordinate of the left of clipping plane.
 * @param right The coordinate of the right of clipping plane.
 * @param bottom The coordinate of the bottom of clipping plane.
 * @param top The coordinate of the top top clipping plane.
 * @param near The distances to the nearer depth clipping plane. This value is minus if the plane is to be behind the viewer.
 * @param far The distances to the farther depth clipping plane. This value is minus if the plane is to be behind the viewer.
 * @return this
 */
Matrix4.prototype.ortho = function(left, right, bottom, top, near, far) {
  return this.concat(new Matrix4().setOrtho(left, right, bottom, top, near, far));
};


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

viewMatrix.lookAt(1, 4, 1, 0, 0, 0, 0, 1, 0)

var u_ProjectionMatrix = gl.getUniformLocation(gl.program, 'u_ProjectionMatrix')
var projectionMatrix = new Matrix4()

projectionMatrix.setPerspective(60, 1, 0.1, 100)

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
