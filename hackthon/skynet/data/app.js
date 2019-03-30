const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const dbname = 'skynet'
const product = 'product'
const supplier = 'supplier'
const transaction = 'transaction'
const generateTransactions = require('./helper')

const insertCommodity = function (db, callback) {
  const collection = db.collection(product)
  collection.insertMany([
    { 'Drill Pipe': 20121508 },
    { 'Drill Pipe Thread Protectors': 20121506 },
    { 'Well Monitoring Services': 71122800 },
    { 'Mineral': 11162124 },
    { 'Rosanline dyes': 100087 }
  ]), function (err, result) {
    callback(result)
  }
}

const insertSupplier = function (db, callback) {
  const collection = db.collection(supplier)
  collection.insertMany([
    { 'BAKER HUGHES CANADA COMPANY': 18 },
    { 'BUNCH WELDING LTD': 34 },
    { "Ken's Oilfield Construction 2000 Lt": 40 },
    { "Enertia Tech": 44 },
    { "Insignia Energy": 46 },
  ]), function (err, result) {
    callback(result)
  }
}

const insertTransactions = function (db, year=2018, callback) {
  const collection = db.collection(transaction)
  let seed = generateTransactions(year)
  collection.insertMany(seed), function (err, result) {
    callback(result)
  }
}

mongo.connect(url, function (err, client) {
  if (err) throw err
  const db = client.db(dbname)

  db.collection(product).deleteMany()
  db.collection(supplier).deleteMany()
  db.collection(transaction).deleteMany()

  insertCommodity(db, function () {
    //client.close()
  })

  insertSupplier(db, function () {
    //    client.close()
  })

  insertTransactions(db, 2018, function () {
    //    client.close()
  })
  
  insertTransactions(db, 2017, function () {
    //    client.close()
  })
  
  insertTransactions(db, 2016, function () {
    //    client.close()
  })
  
  insertTransactions(db, 2015, function () {
    //    client.close()
  })

  client.close()
  console.log('db populated')
  //process.exit()
})
