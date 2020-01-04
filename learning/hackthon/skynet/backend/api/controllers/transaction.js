'use strict'

const wrap = require('wrap-async')
const api = require('express-api-helper')
const collection = 'transaction'
const MONTHS = [1,2,3,4,5,6,7,8,9,10,11,12]
const huskySuppliers = ["BAKER HUGHES CANADA COMPANY", "BUNCH WELDING LTD", "Ken's Oilfield Construction 2000 Lt", "Enertia Tech", "Insignia Energy"]

exports.reportMonthlySpending = wrap(async (req, res) => {
  try {
    let year = req.swagger.params.year.value
    let product = decodeURI(req.swagger.params.product.value)
    let db = req.app.db

    let report = await db.collection(collection)
      .aggregate([
        {
          $match: { year, product }
        },
        {
          $group: {
            _id: '$month',
            sum: {
              $sum:  { $multiply: [ "$price", "$quantity" ] }
            },
          }
        },
        {
          $project: {
            _id: 0,
            month: '$_id',
            sum: 1,
            product
          }
        }
      ])
      .toArray()

    console.log('>>>>>Rosanline dyes', report)

    let result = {}

    MONTHS.forEach(monthNumber => {
      let { sum } = report
        .find(item => item.month === monthNumber) || { sum: 0 }
      result[monthNumber] = sum
    })

    api.sendOkResponse(res, result)
  } catch (err) {
    console.log(err)
    api.sendErrorResponse(res, err)
  }
})

exports.searchProductValues = wrap(async (req, res) => {
  try {
    let year = req.swagger.params.year.value
    let month = req.swagger.params.month.value || { $in: MONTHS }
    let db = req.app.db

    let productValues = await db.collection(collection)
      .aggregate([
        {
          $match: { month, year, supplier: { $in: huskySuppliers }}
        },
        {
          $group: {
            _id: '$product',
            suppliers: {
              $push: {
                name: '$supplier',
                price:'$price'
              }
            },
            average: { $avg: '$price' }
          }
        },
        {
          $project: {
            _id: 0,
            productName: '$_id',
            suppliers: 1,
            average: 1
          }
        }
      ])
      .toArray()

    api.sendOkResponse(res, productValues)
  } catch (err) {
    console.log(err)
    api.sendErrorResponse(res, err)
  }
})

exports.putProducts = wrap(async (req, res) => {
  try {
    let db = req.app.db
    let products = req.swagger.params.payload.value
    let normalizedProducts = products.map(x => {return {
      supplierName: x.supplierName,
      year: x.year,
      month: x.month,
      product: x.product,
      price: x.price,
      quantity: x.quantity
    }});
    let cnt = await db.collection(collection).count();
    if (cnt > 0) {
      await db.collection(collection).drop()
    }
    await db.collection(collection).insertMany(normalizedProducts)

    api.sendNoContentResponse(res)
  } catch (err) {
    console.log(err)
    api.sendErrorResponse(res, err)
  }
})

exports.allTransactions = wrap(async (req, res) => {
  try {
    let db = req.app.db
    let page = req.swagger.params.page.value
    let pageSize = req.swagger.params.pageSize.value
    let totalCnt = await db.collection(collection).find({}).count();
    let transactions = await db.collection(collection).find({}).skip((page - 1) * pageSize).limit(pageSize).toArray()
    let result = {
      totalCount: totalCnt,
      rows: transactions
    }

    api.sendOkResponse(res, result)
  } catch (err) {
    console.log(err)
    api.sendErrorResponse(res, err)
  }
})
