import { select, scaleOrdinal, scaleSqrt } from 'd3'
import { colorLegend, sizeLegend } from './legends'

const canvas = select('svg')
const width = 900
const height = 100

canvas.attr('width', `${width}`)
canvas.attr('height', 500)

const colorScale = scaleOrdinal()
  .domain(['apple', 'lemon', 'lime', 'orange', 'grap'])
  .range(['#d83131', '#ffd800', 'green', 'orange', 'purple'])

canvas.append('g')
  .attr('transform', `translate(200, ${height})`)
  .call(colorLegend, {
    colorScale,
    circleRadius: 20,
    spacing: 60,
    textOffset: 60
  })


const sizeScale = scaleSqrt()
  .domain([0, 10])
  .range([0, 50])

canvas.append('g')
  .attr('transform', `translate(600, ${height})`)
  .call(sizeLegend, {
    sizeScale,
    spacing: 60,
    textOffset: 20,
    numTicks: 10,
    circleFill: 'rgba(0, 0, 0, .4)'
  })
