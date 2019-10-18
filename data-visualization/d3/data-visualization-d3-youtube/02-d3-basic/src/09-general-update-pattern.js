import { select, range } from 'd3'
import { fruitBow } from './fruitBow'

const canvas = select('svg')
const width = 900
const height = 600

canvas.attr('width', `${width}`)
canvas.attr('height', `${height}`)

const makeFruit = type => ({ type })

const fruits = range(5)
  .map(() => makeFruit('apple'))

const render = () => {
  fruitBow(canvas, { fruits, height })
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
