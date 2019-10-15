import {
  select, csv, scaleLinear, max, scaleBand,
  axisLeft, axisBottom, format
} from 'd3'
import data from './data.csv'

const canvas = select('svg')
const width = 960
const height = 360
const margin = { top: 60, right: 20, bottom: 60, left: 150 }
const innerWidth = width - margin.left - margin.right
const innerHeight = height - margin.top - margin.bottom

const render = data => {
  const xScale = scaleLinear()
    .domain([0, max(data, d => d.population)])
    .range([0, innerWidth])

  const yScale = scaleBand()
    .domain(data.map(d => d.country))
    .range([0, innerHeight])
    .padding(.2)

  const g = canvas.append('g')
    .attr('transform', `translate(${margin.left} ${margin.top})`)

  g.append('g')
    .call(axisLeft(yScale))
    .selectAll('.domain, .tick line')
    .remove()

  const xAxisTickFormat = number => format('.3s')(number).replace('G', 'B')

  const xAxis = axisBottom(xScale)
    .tickFormat(xAxisTickFormat)
    .tickSize(-innerHeight + 10)

  const xAxisG = g.append('g')
    .call(xAxis)
    .attr('transform', `translate(0 ${innerHeight})`)

  xAxisG.selectAll('.domain').remove()

  xAxisG.append('text')
    .attr('x', innerWidth / 2)
    .attr('y', 50)
    .attr('fill', 'grey')
    .text('Population')

  g.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('y', d => yScale(d.country))
    .attr('width', d => xScale(d.population))
    .attr('height', yScale.bandwidth())
    .attr('fill', 'steelblue')

  g.append('text')
    .attr('class', 'title')
    .attr('y', '-10')
    .text('Top 10 Most Population Countries')
}

csv(data)
  .then(data => {
    data.forEach(d => {
      d.population = +d.population * 1000
    })
    render(data)
  })
