let suits = ['hearts', 'spades', 'clubs', 'diamonds']

function pickCard(x: { suit:string; card: number; }[]): number
function pickCard(x: number): { suit: string; card: number }
function pickCard(x: any): any {
  if (Array.isArray(x)) {
    return 2
  } else if (typeof x === 'number') {
    return {
      suit: 'hearts',
      card: 3
    }
  }
}


console.log(pickCard([{suit: 'clubs', card: 2}]))
console.log(pickCard(3))