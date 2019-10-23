import { select, tree, hierarchy, linkHorizontal, zoom, event } from 'd3'
import data from './mock-tree-view.json'

const canvas = select('svg')
const margin = { top: 560, right: 400, bottom: 560, left: 600 }

const width = document.body.clientWidth
const height = document.body.clientHeight
const innerWidth = width - margin.left - margin.right
const innerHeight = height - margin.top - margin.bottom

const treeLayout = tree().size([innerHeight, innerWidth])
const g = canvas
  .attr('class', 'tree')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`)

canvas.call(zoom().on('zoom', () => {
  g.attr('transform', event.transform)
}))
const root = hierarchy(data)
const links = treeLayout(root).links()
const linkPathGenerator = linkHorizontal()
  .x(d => d.y)
  .y(d => d.x)
g.selectAll('path')
  .data(links)
  .enter()
  .append('path')
  .attr('d', linkPathGenerator)

g.selectAll('text').data(root.descendants())
  .enter()
  .append('text')
  .attr('x', d => {
    switch (d.depth) {
      case 0:
        return d.y - 50
      case 1:
        return d.y - 30
      default:
        return d.y + 4
    }
  })
  .attr('y', d => d.x)
  .attr('dy', '0.32em')
  .attr('text-anchor', d => d.children ? 'start' : 'start')
  .attr('font-size', d => {
    switch (d.depth) {
      case 0:
        return '1.2em'
      case 1:
        return '.8em'
      case 2:
        return '.6em'
      case 3:
        return '.4em'
      default:
        return '.2em'
    }
  })
  .text(d => d.data.data.id)
