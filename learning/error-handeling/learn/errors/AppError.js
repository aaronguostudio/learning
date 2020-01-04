function AppError (httpCode, errorCode, message) {
  Error.call(this)
  Error.captureStackTrace(this)
  this.httpCode = httpCode || 400
  this.code = errorCode || 10000
  this.message = message || 'App error'
}

AppError.prototype = Error.prototype
module.exports.AppError = AppError