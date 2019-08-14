const fs = require('fs')
const pdf = require('html-pdf')


try {
  const html = fs.readFileSync('./html/demo-1.html', 'utf8')
  const options = { format: 'Letter' }
  pdf.create(html, options).toFile('./pdf/test.pdf', (err, res) => {
    if (err) return console.log('>', err)
    console.log('>', res)
  })
} catch (err) {
  console.log('>', err)
}