const AWS = require('aws-sdk')
const fs = require('fs')
const { dbConfig } = require('./config')

AWS.config.update(dbConfig)

const docClient = new AWS.DynamoDB.DocumentClient()

let allMovies = JSON.parse(fs.readFileSync('./data/moviedata.json', 'utf-8'))
allMovies.forEach(movie => {
  const params = {
    TableName: 'Movies',
    Item: {
      year: movie.year,
      title: movie.title,
      info: movie.info
    }
  }

  docClient.put(params, (err, data) => {
    if (err) {
      console.error('> Error', err)
    } else {
      console.log('>', movie.title)
    }
  })

})
