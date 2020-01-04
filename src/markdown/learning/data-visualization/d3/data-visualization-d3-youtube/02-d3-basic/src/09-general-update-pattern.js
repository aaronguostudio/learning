import { select, range } from 'd3'
import { fruitBowl } from './fruitBowl'

const canvas = select('svg')
const width = 900
const height = 600

canvas.attr('width', `${width}`)
canvas.attr('height', `${height}`)

const makeFruit = type => ({
  type,
  id: Math.random()
})

let fruits = range(5)
  .map(() => makeFruit('apple'))

const render = () => {
  fruitBowl(canvas, { fruits, height })
}

render()

setTimeout(() => {
  fruits.pop()
  render()
}, 1000)

setTimeout(() => {
  fruits[2].type = 'lemon'
  render()
}, 2000)

setTimeout(() => {
  fruits.pop()
  render()
}, 3000)

setTimeout(() => {
  fruits = fruits.filter((d, i) => {
    console.log('>d', d, i, i !== 1)
    return i !== 1
  })
  render()
}, 4000)
