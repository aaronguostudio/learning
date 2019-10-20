import { select, scaleOrdinal } from 'd3'

const colorScale = scaleOrdinal()
  .domain(['apple', 'lemon'])
  .range(['#d83131', '#ffd800'])

const radiusScale = scaleOrdinal()
  .domain(['apple', 'lemon'])
  .range([50, 30])

const xPosition = (d, i) => i * 120 + 100

export const fruitBowl = (selection, props) => {
  const { fruits, height, setSelectedFruit, selectedFruid, setHoveredFruit, hoveredFruid } = props
  const circles = selection.selectAll('circle')
    .data(fruits, d => d.id)

  circles
    .enter()
    .append('circle')
      .attr('cx', xPosition)
      .attr('cy',  height / 2 + 50)
      .attr('r', 0)
      .attr('cursor', 'pointer')
    .merge(circles)
      .attr('fill', d => colorScale(d.type))
      .attr('stroke-width', '3px')
      .attr('stroke', d => d.id === selectedFruid ? 'black' : 'none')
      .attr('opacity', d => d.id === hoveredFruid ? 1 : .8)
      .on('click', setSelectedFruit)
      .on('mouseover', setHoveredFruit)
      .transition()
      .duration(500)
      .attr('cx', xPosition)
      .attr('r', d => radiusScale(d.type))
  circles.exit()
    .transition(500)
    .attr('r', 0)
    .remove()
}
