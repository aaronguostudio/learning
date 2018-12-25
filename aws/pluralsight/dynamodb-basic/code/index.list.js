var AWS = require('aws-sdk')
var print = require('./../lib/helpers.js').printPretty
var dynamodb = new AWS.DynamoDB()

console.log('Listing Tables: ')

var params = {}

dynamodb.listTables(params).promise()
  .then(print)
  .catch(print)