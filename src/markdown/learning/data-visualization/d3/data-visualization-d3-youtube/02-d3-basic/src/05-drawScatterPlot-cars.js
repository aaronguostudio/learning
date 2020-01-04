import {
  select, csv, scaleLinear, extent,
  axisLeft, axisBottom, format
} from 'd3'

const canvas = select('svg')
const width = 960
const height = 460
const margin = { top: 80, right: 20, bottom: 60, left: 150 }
const innerWidth = width - margin.left - margin.right
const innerHeight = height - margin.top - margin.bottom

const xLabel = 'weight'
const yLabel = 'horsepower'

// extent will return [min, max]
const render = data => {
  const xValue = d => d[xLabel]
  const yValue = d => d[yLabel]

  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice()

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight])

  const g = canvas.append('g')
    .attr('transform', `translate(${margin.left} ${margin.top})`)

  const yAxis = axisLeft(yScale)
    .tickSize(-innerWidth)
    .tickPadding(10)

  const yAxisG = g.append('g')
    .call(yAxis)

  yAxisG.append('text')
    .attr('x', -innerHeight / 2 )
    .attr('y', -50)
    .attr('transform', 'rotate(-90)')
    .attr('fill', 'grey')
    .attr('text-anchor', 'middle')
    .text(yLabel.toUpperCase())

  const xAxisTickFormat = number => format('.3s')(number).replace('G', 'B')

  const xAxis = axisBottom(xScale)
    .tickFormat(xAxisTickFormat)
    .tickSize(-innerHeight)
    .tickPadding(10)

  const xAxisG = g.append('g')
    .call(xAxis)
    .attr('transform', `translate(0 ${innerHeight})`)

  xAxisG.selectAll('.domain').remove()

  xAxisG.append('text')
    .attr('x', innerWidth / 2)
    .attr('y', 50)
    .attr('fill', 'grey')
    .text(xLabel.toUpperCase())

  g.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cy', d => {
      return yScale(yValue(d))
    })
    .attr('cx', d => {
      return xScale(xValue(d))
    })
    .attr('r', 8)
    .attr('fill', 'steelblue')
    .attr('opacity', '.3')

  g.append('text')
    .attr('class', 'title')
    .attr('y', '-20')
    .text(`Cars ${xLabel} vs ${yLabel}`)
}

csv('https://vizhub.com/curran/datasets/auto-mpg.csv')
  .then(data => {
    data.forEach(d => {
      d.mpg = +d.mpg
      d.cylinders = +d.cylinders
      d.displacement = +d.displacement
      d.horsepower = +d.horsepower
      d.weight = +d.weight
      d.acceleration = +d.acceleration
      d.year = +d.year
    })
    render(data)
  })
