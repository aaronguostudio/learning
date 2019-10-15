import {
  select, csv, scaleLinear, extent,
  axisLeft, axisBottom, format
} from 'd3'

const canvas = select('svg')
const width = 960
const height = 360
const margin = { top: 60, right: 20, bottom: 60, left: 150 }
const innerWidth = width - margin.left - margin.right
const innerHeight = height - margin.top - margin.bottom

// extent will return [min, max]
const render = data => {
  const xScale = scaleLinear()
    .domain(extent(data, d => {
      return d.cylinders
    }))
    .range([0, innerWidth])
    .nice()

  const yScale = scaleLinear()
    .domain(extent(d => {
      console.log('>d.horsepower', d.cylinders)
      return d.cylinders
    }))
    .range([0, innerHeight])

  const g = canvas.append('g')
    .attr('transform', `translate(${margin.left} ${margin.top})`)

  const yAxis = axisLeft(yScale)
    .tickSize(-innerWidth)

  g.append('g')
    .call(yAxis)
    // .selectAll('.domain')
    // .remove()

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
    .attr('cy', d => {
      return 10
    })
    .attr('cx', d => {
      return xScale(d.horsepower)
    })
    .attr('r', 8)
    .attr('fill', 'black')

  g.append('text')
    .attr('class', 'title')
    .attr('y', '-10')
    .text('- - -')
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
