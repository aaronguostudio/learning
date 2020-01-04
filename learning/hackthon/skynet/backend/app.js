'use strict';

var SwaggerExpress = require('swagger-express-mw')
var app = require('express')()

const MongoClient = require('mongodb').MongoClient

MongoClient.connect("mongodb://localhost:27017/skynet", (err, db) => {
  if (err) {
    console.log('Unable to connect to DB')
    console.log(err)
  }
  app.db = db
})
module.exports = app // for testing

var config = {
  appRoot: __dirname // required config
}

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app)

  var port = 10010
  app.listen(port, console.log(`Listening on port ${port}`))
})
