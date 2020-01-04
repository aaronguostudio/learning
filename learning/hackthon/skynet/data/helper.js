module.exports = function generateTransactions (year=2018) {
  let suppliers = [
    "BAKER HUGHES CANADA COMPANY",
    "BUNCH WELDING LTD",
    "Ken's Oilfield Construction 2000 Lt",
    "Enertia Tech",
    "Insignia Energy",
  ]
  let products = [
    "Drill Pipe",
    "Drill Pipe Thread Protectors",
    "Well Monitoring Services",
    "Mineral",
    "Rosanline dyes",
  ]
  let data = []
  for(let i = 1; i <= 12; i++) {
    suppliers.forEach(s => {
      products.forEach(p => {
        let obj = {}
        obj.year = year
        obj.month = i
        obj.supplier = s
        obj.product = p
        obj.price = Math.round(Math.random() * (180 - 80) + 80)
        obj.quantity = 1
        data.push(obj)
      })
    })
  }

  return data
}