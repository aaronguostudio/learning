import { scaleOrdinal } from 'd3'

const colorScale = scaleOrdinal()
  .domain(['apple', 'lemon'])
  .range(['#d83131', '#ffd800'])

const radiusScale = scaleOrdinal()
  .domain(['apple', 'lemon'])
  .range([50, 30])

export const fruitBowl = (selection, props) => {
  const { fruits, height } = props

  // single bowl
  selection.selectAll('rect').data([null])
    .enter()
    .append('rect')
    .attr('fill', 'lightgrey')
    .attr('y', 220)
    .attr('width', 1000)
    .attr('height', 200)

  const groups = selection.selectAll('g')
    .data(fruits)

  const groupsEnter = groups
    .enter()
    .append('g')

  groupsEnter.merge(groups)
      .attr('transform', (d, i) => `translate(${i * 180 + 100}, ${height / 2})`)
  groups.exit().remove()

  groupsEnter
    .append('circle')
    .merge(groups.select('circle'))
    .attr('r', d => radiusScale(d.type))
    .attr('fill', d => colorScale(d.type))

  groupsEnter
    .append('text')
    .merge(groups.select('text'))
    .attr('text-anchor', 'middle')
    .text(d => d.type)
    .attr('y', 80)
}
