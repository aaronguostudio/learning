const a = "baa"
const b = "baa"

const isPermutation = (a, b) => {
  const charsMap = new Map()
  if (!a || !b) throw new Error("Invalid parameters")
  if (a === b) return true
  if (a.length != b.length) return false

  // add
  for (var i = 0; i < a.length; i++) {
    let count = charsMap.get(a[i])
    if (!count) {
      charsMap.set(a[i], 1)
    } else {
      charsMap.set(a[i], count + 1)
    }
  }

  // sub
  for (var i = 0; i < b.length; i++) {
    if (!charsMap.get(b[i])) {
      return false
    }
    const count = charsMap.get(b[i])
    charsMap.set(b[i], count - 1)
  }

  // compare
  charsMap.forEach((v, k) => {
    if (v !== 0) {
      return false
    }
  })

  return true
}

console.log(isPermutation(a, b))
