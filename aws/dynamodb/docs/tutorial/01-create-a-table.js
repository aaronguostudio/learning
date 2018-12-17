const AWS = require('aws-sdk')
const { dbConfig } = require('./config')

AWS.config.update(dbConfig)

const dynamodb = new AWS.DynamoDB()

const params = {
  TableName: 'Movies',
  KeySchema: [
    { AttributeName: 'year', KeyType: 'HASH' },
    { AttributeName: 'title', KeyType: 'RANGE' }
  ],
  AttributeDefinitions: [
    { AttributeName: 'year', AttributeType: 'N' },
    { AttributeName: 'title', AttributeType: 'S' }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
}

dynamodb.createTable(params, (err, data) => {
  if (err) {
    console.error('Error', JSON.stringify(err, null, 2))
  } else {
    console.log("Created", data)
  }
})