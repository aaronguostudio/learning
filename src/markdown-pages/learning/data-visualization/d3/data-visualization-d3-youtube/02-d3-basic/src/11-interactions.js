import { select, range } from 'd3'
import { fruitBowl } from './fruitBowl-interaction'

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
let selectedFruid = null
let hoveredFruid = null

const setSelectedFruit = d => {
  selectedFruid = d.id
  render()
}

const setHoveredFruit = d => {
  hoveredFruid = d.id
  render()
}

const render = () => {
  fruitBowl(
    canvas,
    {
      fruits,
      height,
      setSelectedFruit,
      selectedFruid,
      setHoveredFruit,
      hoveredFruid
    }
  )
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
    return i !== 1
  })
  render()
}, 4000)
