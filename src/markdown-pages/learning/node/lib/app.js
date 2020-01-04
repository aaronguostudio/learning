const pr = require('promise-retry');
const mode = process.argv[2] ? parseInt(process.argv[2], 10) : 1;

console.log(`Starting mode ${mode}`)

// Simple example
if (mode === 1) {
  pr(function(retry, number) {
    console.log('attemp number', number)
    return mockReject().catch(retry)
  })
  .then(value => {
    console.log('>', value)
  }, err => {
    console.log('> err', err)
  })
}

// Conditional example
if (mode === 2) {
  pr(function(retry, number) {
    console.log('attemp number', number)
    return mockReject().catch(err => {
      if(err.code === 'ETIMEDOUT') retry(err)
      throw err
    })
  })
  .then(value => {
    console.log('>', value)
  }, err => {
    console.log('> err', err)
  })
}

var count = 0
function mockReject () {
  count++
  if (count >= 4) return Promise.resolve('Success')
  let err = new Error()
  err.code = 'ETIMEDOUT'
  return Promise.reject(err)
}