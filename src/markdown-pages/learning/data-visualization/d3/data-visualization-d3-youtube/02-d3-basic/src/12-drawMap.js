import { select, json, geoPath, geoNaturalEarth1 } from 'd3'
import { feature } from 'topojson'

const winW = window.innerWidth
const winH = window.innerHeight
const canvas = select('svg')

const projection = geoNaturalEarth1()
const pathGenerator = geoPath().projection(projection)

canvas.append('path')
  .attr('width', `${winW}`)
  .attr('height', `${winH}`)
  .attr('class', 'sphere')
  .attr('d', pathGenerator({
    type: 'Sphere'
  }))

json('https://unpkg.com/world-atlas@1.1.4/world/110m.json')
  .then(data => {
    const countries = feature(data, data.objects.countries)

    canvas.selectAll('path')
      .data(countries.features)
      .enter()
      .append('path')
      .attr('class', 'country')
      .attr('d', pathGenerator)
  })
