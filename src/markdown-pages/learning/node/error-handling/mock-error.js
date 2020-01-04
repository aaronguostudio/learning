module.exports.mockError = async function () {
  try {
    console.log(3)
    return await asyncFunc()
  } catch (err) {
    console.log(4)
    console.log('>', err)
  }
}

async function asyncFunc () {
  throw new Error('Mock Error')
}