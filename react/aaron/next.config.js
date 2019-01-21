const nib = require('nib')
const rupture = require('rupture')
const withStylus = require('@zeit/next-stylus')
const poststylus = require('poststylus')
const autoprefixer = require('autoprefixer')

const widthStylus = require('@zeit/next-stylus')
module.exports = widthStylus({
  stylusLoaderOptions: {
    use: [
      nib(),
      rupture(),
      poststylus([
        autoprefixer( { flexbox: 'no-2009' } ),
        require('postcss-css-variables')
      ])
    ]
  }
})