import { scaleOrdinal } from 'd3'

const colorScale = scaleOrdinal()
  .domain(['apple', 'lemon'])
  .range(['#d83131', '#ffd800'])

const radiusScale = scaleOrdinal()
  .domain(['apple', 'lemon'])
  .range([50, 30])

export const fruitBow = (selection, props) => {
  const { fruits, height } = props
  const circles = selection.selectAll('circle')
    .data(fruits)

   // adding merge will make the data binding alive
   // merge combines enter and update
  circles
    .enter()
    .append('circle')
      .attr('cx', (d, i) => i * 120 + 100)
      .attr('cy',  height / 2 + 50)
    .merge(circles)
      .attr('fill', d => colorScale(d.type))
      .attr('r', d => radiusScale(d.type))

  // the object itself is the update function
  // circles
  //   .attr('fill', d => colorScale(d.type))
  //   .attr('r', d => radiusScale(d.type))
  circles.exit().remove()
}
