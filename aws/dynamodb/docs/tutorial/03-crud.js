const AWS = require('aws-sdk')
const { dbConfig } = require('./config')

AWS.config.update(dbConfig)

const docClient = new AWS.DynamoDB.DocumentClient()
var table = 'Movies'
var year = 2015
var title = 'The Big New Movie'
var params



// - Create
var info = {
  plot: 'Nothing happers at all',
  rating: 0
}

var params = {
  TableName: table,
  Item: {
    year,
    title,
    info
  }
}

console.log('Adding an item...')

docClient.put(params).promise()
  .then(data => {
    console.log('Add an item:', JSON.stringify(data, null, 2))
  })
  .catch(err => {
    console.log('Add an item failed', JSON.stringify(err))
  })


// - Read
params = {
  TableName: table,
  Key: {
    year, title
  }
}

docClient.get(params).promise()
  .then(data => {
    console.log('Read an item:', JSON.stringify(data, null, 2))
  })
  .catch(err => {
    console.log('Read an item failed', JSON.stringify(err))
  })


// - Update
// UPDATED_NEW - show updated values
params = {
  TableName: table,
  Key: {
    year, title
  },
  UpdateExpression: "set info.rating=:r, info.plot=:p, info.actors=:a",
  ExpressionAttributeValues: {
    ':r': 5.5,
    ':p': 'Hey world, hello!',
    ':a': ['Larry', 'Moe', 'Curly']
  },
  ReturnValues: "UPDATED_NEW"
}

console.log('Updating the item...')

docClient.update(params).promise()
  .then(data => {
    console.log('Update an item:', JSON.stringify(data, null, 2))
  })
  .catch(err => {
    console.log('Update an item failed', JSON.stringify(err))
  })


// Update - Incremental
// UpdateExpression: "set info.rating=info.rating + :val", :val: 1
params = {
  TableName: table,
  Key: {
    year, title
  },
  UpdateExpression: "set info.rating=info.rating + :val",
  ExpressionAttributeValues: {
    ':val': 2,
  },
  ReturnValues: "UPDATED_NEW"
}

console.log('Updating the item...')

docClient.update(params).promise()
  .then(data => {
    console.log('Read an item:', JSON.stringify(data, null, 2))
  })
  .catch(err => {
    console.log('Read an item failed', JSON.stringify(err))
  })


// Update - Conditional
params = {
  TableName: table,
  Key: {
    year, title
  },
  UpdateExpression: "remove info.actors[0]",
  ConditionExpression: "size(info.actors) > :num",
  ExpressionAttributeValues: {
    ':num': 2,
  },
  ReturnValues: "UPDATED_NEW"
}

console.log('Updating the item...')

docClient.update(params).promise()
  .then(data => {
    console.log('Read an item:', JSON.stringify(data, null, 2))
  })
  .catch(err => {
    console.log('Read an item failed', JSON.stringify(err))
  })



// - Delete
params = {
  TableName: table,
  Key: { year, title },
  ConditionExpression: "info.rating <= :val",
  ExpressionAttributeValues: {
    ':val': 10
  }
}

docClient.delete(params).promise()
  .then(data => {
    console.log('Delete an item:', JSON.stringify(data, null, 2))
  })
  .catch(err => {
    console.log('Delete an item failed', JSON.stringify(err))
  })







