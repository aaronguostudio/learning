import {
  Programmer,
  FrontEndProgrammer,
  FullStackProgrammer,
  drawable,
  buildPage
} from './Person'

const aaron = new FullStackProgrammer('Aaron', 'Guo', 32, ['node', 'java', 'python'])
const bob = new FrontEndProgrammer('Bob', 'Nice', 23, ['react'])

function drawPages (drawableArray: drawable[]) {
  drawableArray.forEach(drawable => drawable.draw('Index Page'))
}

const drawableArray = [aaron, bob]

drawPages(drawableArray)
