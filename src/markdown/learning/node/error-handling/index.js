 const { mockError } = require('./mock-error')

async function main () {
  try {
    console.log(1)
    await mockError()
  } catch (err) {
    console.log(2)
    console.log('>', err)
  }
}

main()