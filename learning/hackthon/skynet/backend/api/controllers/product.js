'use strict'

const wrap = require('wrap-async')
const api = require('express-api-helper')

exports.getProducts = wrap(async (req, res) => {
  try {
    let db = req.app.db

    //TODO Get collection name
    let products = await db.collection('product').find({}).toArray()

    let productNames = [];
    for (var i = 0; i < products.length; i++) {
      var keys = Object.keys(products[i]);
      for (var j = 0; j < keys.length; j++) {
        var keyName = keys[j];
        if (keyName !== '_id') {
          productNames.push(keyName);
          break;
        }
      }
    }

    api.sendOkResponse(res, productNames)
  } catch (err) {
    console.log(err)
    api.sendErrorResponse(res, err)
  }
})
