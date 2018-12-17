const { AppError } = require('./errors/AppError')

function main () {
  try {
    getName()
  } catch (err) {
    console.log('>', err.message, err.httpCode, err.code)
  }
}

function getName () {

  throw new AppError(404, 10000, 'What is the name if it nothing?')
  
}

main()