import { select, json, geoPath, tsv, geoNaturalEarth1, zoom, event } from "d3"
import { feature } from "topojson"

const winW = window.innerWidth
const winH = window.innerHeight
const canvas = select("svg")

const projection = geoNaturalEarth1()
const pathGenerator = geoPath().projection(projection)

const g = canvas.append("g")

g.append("path")
  .attr("width", `${winW}`)
  .attr("height", `${winH}`)
  .attr("class", "sphere")
  .attr(
    "d",
    pathGenerator({
      type: "Sphere"
    })
  )
canvas.call(
  zoom().on("zoom", () => {
    g.attr("transform", event.transform)
  })
)

// canvas.call(zoom).on("zoom", () => {
//   console.log(">")
//   g.attr("transform", event.transform)
// })

Promise.all([
  tsv("https://unpkg.com/world-atlas@1.1.4/world/50m.tsv"),
  json("https://unpkg.com/world-atlas@1.1.4/world/50m.json")
]).then(([tsvData, topoJSONdata]) => {
  const countryName = tsvData.reduce((accumulator, d) => {
    accumulator[d.iso_n3] = d.name
    return accumulator
  }, {})

  const countries = feature(topoJSONdata, topoJSONdata.objects.countries)
  g.selectAll("path")
    .data(countries.features)
    .enter()
    .append("path")
    .attr("class", "country")
    .attr("d", pathGenerator)
    .append("title")
    .text(d => countryName[d.id])
})
