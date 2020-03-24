// P68
// a^3 + b^3 = c^3 + d^3
// O(n^4)
function solution1 () {
  const n = 100;
  for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
      for (let c = 0; c < n; c++) {
        for (let d = 0; d < n; d++) {
          if (Math.pow(a, 3) + Math.pow(b, 3) === Math.pow(c, 3) + Math.pow(d, 3)) {
            console.log(a, b, c, d)
            continue
          }
        }
      }
    }
  }
}

// O(n^3)
function solution2 () {
  const n = 100
  for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
      for (let c = 0; c < n; c++) {
        d = Math.round(Math.pow(Math.pow(a, 3) + Math.pow(b, 3) - Math.pow(c, 3), 1/3))
        if (Math.pow(a, 3) + Math.pow(b, 3) === Math.pow(c, 3) + Math.pow(d, 3)) {
          console.log(a, b, c, d)
        }
      }
    }
  }
}

solution2()
