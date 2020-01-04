import { select, arc } from 'd3'

const canvas = select('svg')
const winW = window.innerWidth
const winH = window.innerHeight
const faceR = 50
const spacing = 18

const g = canvas.append('g')
  .attr('transform', `translate(${winW/2} ${winH/2})`)

g.append('circle')
  .attr('r', faceR)
  .attr('fill', 'yellow')
  .attr('stroke', 'black')

const eyesG = g.append('g')
  .attr('transform', `translate(0 ${-spacing + 4})`)

eyesG.append('circle')
  .attr('cx', -spacing)
  .attr('r', 5)

eyesG.append('circle')
  .attr('cx', spacing)
  .attr('r', 5)

const eyesBrowsG = eyesG.append('g')
  .attr('transform', `translate(0 ${-16})`)

eyesBrowsG.transition().duration(1000)
    .attr('transform', `translate(0 ${-20})`)
  .transition().duration(1000)
    .attr('transform', `translate(0 ${-12})`)

eyesBrowsG.append('rect')
  .attr('x', -spacing - 8)
  .attr('width', 16)
  .attr('height', 4)

eyesBrowsG.append('rect')
  .attr('x', spacing - 8)
  .attr('width', 16)
  .attr('height', 4)

g.append('path')
  .attr('transform', `translate(0 ${spacing / 4})`)
  .attr('d', arc()({
    innerRadius: 24,
    outerRadius: 28,
    startAngle: Math.PI / 2,
    endAngle: Math.PI * 3/2
  }))
