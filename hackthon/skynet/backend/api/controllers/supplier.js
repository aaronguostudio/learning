'use strict'

const wrap = require('wrap-async')
const api = require('express-api-helper')

exports.getSuppliers = wrap(async (req, res) => {
  try {
    let db = req.app.db

    //TODO Get collection name
    let suppliers = await db.collection('supplier').find({}).toArray()

    let supplierNames = [];
    for (var i = 0; i < suppliers.length; i++) {
      var keys = Object.keys(suppliers[i]);
      for (var j = 0; j < keys.length; j++) {
        var keyName = keys[j];
        if (keyName !== '_id') {
            supplierNames.push(keyName);
          break;
        }
      }
    }

    api.sendOkResponse(res, supplierNames)
  } catch (err) {
    console.log(err)
    api.sendErrorResponse(res, err)
  }
})
