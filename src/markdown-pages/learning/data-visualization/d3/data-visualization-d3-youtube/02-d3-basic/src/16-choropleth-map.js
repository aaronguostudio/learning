import {
  select, geoPath, geoNaturalEarth1, schemeSpectral,
  zoom, event, scaleOrdinal
} from 'd3'
import { loadAndProcessData } from './loadAndProcessData'
import { colorLegend } from './legends'

const winW = window.innerWidth
const winH = window.innerHeight
const canvas = select('svg')

const projection = geoNaturalEarth1()
const pathGenerator = geoPath().projection(projection)

const g = canvas.append('g')

const colorLegendG = canvas.append('g')
  .attr('transform', `translate(50, ${winH - 200})`)

g.append('path')
  .attr('width', `${winW}`)
  .attr('height', `${winH}`)
  .attr('class', 'sphere')
  .attr('d', pathGenerator({
    type: 'Sphere'
  }))

canvas.call(zoom().on('zoom', () => {
  g.attr('transform', event.transform)
}))

const colorScale = scaleOrdinal()
const colorValue = d => d.properties.economy

loadAndProcessData().then(countries => {

  colorScale
    .domain(countries.features.map(colorValue))
    .domain(colorScale.domain().sort().reverse())
    .range(schemeSpectral[colorScale.domain().length])

  colorLegendG
    .call(colorLegend, {
      colorScale,
      circleRadius: 6,
      spacing: 20,
      textOffset: 20
    })

  g.selectAll('path')
    .data(countries.features)
    .enter()
    .append('path')
    .attr('class', 'country-choropleth')
    .attr('d', pathGenerator)
    .attr('fill', d => colorScale(colorValue(d)))
    .append('title')
    .text(d => d.properties.name + ': ' + colorValue(d))
})
