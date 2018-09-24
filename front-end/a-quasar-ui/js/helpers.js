// @data
// @key
// @value
// @isArray
export function mapDataToOptions (data, isArray, key, value) {
  isArray = isArray || false
  if (isArray) {
    let arr = []
    data.map(item => {
      let temp = _mapObjToOptions(item)
      arr.push(temp)
    })
    return arr
  } else {
    return _mapObjToOptions(data)
  }
}

function _mapObjToOptions (data, key, value) {
  let obj = {}
  key = key || 'id'
  value = value || 'name'
  obj.label = data[value]
  obj.value = data[key]
  return obj
}
