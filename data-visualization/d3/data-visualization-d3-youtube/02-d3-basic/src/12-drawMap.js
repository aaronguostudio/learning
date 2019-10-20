import { select, json } from 'd3'
import { feature } from 'topojson'

const canvas = select('svg')
const winW = window.innerWidth
const winH = window.innerHeight

json('https://unpkg.com/world-atlas@1.1.4/world/110m.json')
  .then(data => {
    const countries = feature(data, data.objects.countries)
    console.log(countries)
  })
