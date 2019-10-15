import {
  select, csv, scaleLinear, max, scalePoint,
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
    .nice()

  const yScale = scalePoint()
    .domain(data.map(d => d.country))
    .range([0, innerHeight])
    .padding(.3)

  const g = canvas.append('g')
    .attr('transform', `translate(${margin.left} ${margin.top})`)

  const yAxix = axisLeft(yScale)
    .tickSize(-innerWidth)
  g.append('g')
    .call(yAxix)
    .selectAll('.domain')
    .remove()

  const xAxisTickFormat = number => format('.3s')(number).replace('G', 'B')

  const xAxis = axisBottom(xScale)
    .tickFormat(xAxisTickFormat)
    .tickSize(-innerHeight)

  const xAxisG = g.append('g')
    .call(xAxis)
    .attr('transform', `translate(0 ${innerHeight})`)

  xAxisG.selectAll('.domain').remove()

  xAxisG.append('text')
    .attr('x', innerWidth / 2)
    .attr('y', 50)
    .attr('fill', 'grey')
    .text('Population')

  g.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cy', d => yScale(d.country))
    .attr('cx', d => xScale(d.population))
    .attr('r', 8)
    .attr('fill', 'black')

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
