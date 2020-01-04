import {
  area, axisLeft, axisBottom, curveBasis,
  csv, extent, select, scaleLinear, scaleTime
} from 'd3'

const canvas = select('svg')
const width = 1200
const height = 400
const margin = { top: 90, right: 50, bottom: 20, left: 150 }
const innerWidth = width - margin.left - margin.right
const innerHeight = height - margin.top - margin.bottom
const xLable = 'Temperature'
const yLable = 'Time'

const render = (data) => {
  const xValue = d => d.timestamp
  const yValue = d => d.temperature

  const g = canvas.append('g')
    .attr('transform', `translate (${margin.left} ${margin.top})`)

  const xScale = scaleTime()
    .domain(extent(data, xValue))
    .range([0, innerWidth])

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight, 0])
    .nice()

  const xAxis = axisBottom(xScale)
    .tickSize(-innerHeight)
    .tickPadding(10)

  const xAxisG = g.append('g')
    .call(xAxis)
    .attr('transform', `translate (0, ${innerHeight})`)

  xAxisG.selectAll('.domain').remove()

  xAxisG.append('text')
    .attr('x', innerWidth / 2)
    .attr('y', 50)
    .attr('fill', 'grey')
    .text(xLable)

  const yAxis = axisLeft(yScale)
    .tickSize(-innerWidth)
    .tickPadding(10)

  const yAxisG = g.append('g').call(yAxis)
  yAxisG.append('text')
    .attr('x', -innerHeight / 2)
    .attr('y', -50)
    .attr('transform', 'rotate(-90)')
    .attr('fill', 'grey')
    .attr('text-anchor', 'middle')
    .text(yLable)

  yAxisG.selectAll('.domain').remove()

  const areaGenerator = area()
    .x(d => xScale(xValue(d)))
    .y0(innerHeight)
    .y1(d => yScale(yValue(d)))
    .curve(curveBasis)

  g.append('path')
    .attr('class', 'area-path')
    .attr('stroke', 'blue')
    .attr('d', areaGenerator(data))

  g.append('text')
    .attr('class', 'title')
    .attr('y', '-20')
    .text('Temperature in San Francisco Line Chart')
}

csv('https://vizhub.com/curran/datasets/temperature-in-san-francisco.csv')
  .then(data => {
    data.forEach(d => {
      d.temperature = +d.temperature
      d.timestamp = new Date(d.timestamp)
    })
    render(data)
  })
