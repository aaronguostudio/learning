function _(t, a, n, r) { //tempArr, arr, num, result
  if (n === 0) {
    r[r.length] = t;
    return;
  }
  for (var i = 0, l = a.length - n; i <= l; i++) {
    var b = t.slice();
    b.push(a[i]);
    _(b, a.slice(i + 1), n - 1, r);
  }
}

function groupSplit (arr, size) {
  var r = []; //result
  var temp = [];
  _(temp, arr, size, r);
  console.log('>', r)
}

const arr = [
  'a',
  'b',
  'c',
  'd',
  'e',
]
groupSplit(arr, 4)
