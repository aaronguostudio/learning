import {
  select, csv, scaleLinear, max, scaleBand,
  axisLeft, axisBottom
} from 'd3'
import data from './data.csv'

const canvas = select('svg')
const width = 960
const height = 360
const margin = { top: 40, right: 20, bottom: 20, left: 120 }
const innerWidth = width - margin.left - margin.right
const innerHeight = height - margin.top - margin.bottom

const render = data => {
  const xScale = scaleLinear()
    .domain([0, max(data, d => d.population)])
    .range([0, innerWidth])

  const yScale = scaleBand()
    .domain(data.map(d => d.country))
    .range([0, innerHeight])
    .padding(.1)

  const g = canvas.append('g')
    .attr('transform', `translate(${margin.left} ${margin.top})`)

  g.append('g').call(axisLeft(yScale))
  g.append('g').call(axisBottom(xScale))
    .attr('transform', `translate(0 ${innerHeight})`)

  g.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('y', d => yScale(d.country))
    .attr('width', d => xScale(d.population))
    .attr('height', yScale.bandwidth())
    .attr('fill', 'steelblue')
}

csv(data)
  .then(data => {
    data.forEach(d => {
      d.population = +d.population * 1000
    })
    render(data)
  })
