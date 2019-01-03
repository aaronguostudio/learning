const AWS = require('aws-sdk')
const { dbConfig } = require('./config')

AWS.config.update(dbConfig)

const docClient = new AWS.DynamoDB.DocumentClient()
const table = 'Movies'
var params

// // Query based on partition key
// params = {
//   TableName: table,
//   KeyConditionExpression: '#yr = :yyyy',
//   ExpressionAttributeNames: {
//     '#yr': 'year'
//   },
//   ExpressionAttributeValues: {
//     ':yyyy': 1985
//   }
// }

// docClient.query(params).promise()
//   .then(data => {
//     console.log('Query', JSON.stringify(data, null, 2))
//   })
//   .catch(err => {
//     console.error('Error', err)
//   })


// Query based on partition key and sort key
// params = {
//   TableName: table,
//   ProjectionExpression: '#yr, title, info.genres, info.actors[0]',
//   KeyConditionExpression: '#yr = :yyyy and title between :letter1 and :letter2',
//   ExpressionAttributeNames: {
//     '#yr': 'year'
//   },
//   ExpressionAttributeValues: {
//     ':yyyy': 1992,
//     ':letter1': 'A',
//     ':letter2': 'L'
//   }
// }


// docClient.query(params).promise()
//   .then(data => {
//     console.log('Query with sort key', JSON.stringify(data, null, 2))
//   })
//   .catch(err => {
//     console.error('Error', err)
//   })


params = {
  TableName: table,
  ProjectionExpression: '#yr, title, info.rating',
  FilterExpression: '#yr between :start_yr and :end_yr',
  ExpressionAttributeNames: {
    '#yr': 'year'
  },
  ExpressionAttributeValues: {
    ':start_yr': 1950,
    ':end_yr': 1959
  }
}

docClient.scan(params, onScan)

function onScan (err, data) {
  if (err) console.error('Scan error', err)
  else {
    console.log('Scan successed.')
    data.Items.forEach(item => {
      console.log(`${item.year}: ${item.title} - rating: ${item.info.rating}`)
    })

    if ( typeof data.LastEvaluatedKey !== 'undefined' ) {
      
      // scan can retrieve a maximum of 1MB data
      console.log('>>>>>>>> Scanning more data...')
      params.ExclusiveStartKey = data.LastEvaluatedKey
      docClient.scan(params, onScan)
    }
  }
}







