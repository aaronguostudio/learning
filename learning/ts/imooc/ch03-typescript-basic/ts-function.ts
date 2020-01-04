// restOfName
function buildName (firstName: string, ...restOfName: string[]): string {
  console.log(">>restOfName", restOfName)
  return firstName
}

buildName ('a', 'b', 'c', 'd', 'e')


// this
interface Card {
  suit: string
  card: number
}

interface Deck {
  suits: string[]
  cards: number[]
  createCardPicker(): () => Card
}

let deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  card: Array(52),
  createCardPicker: function (this: Deck) {
    return () => {
      let pickedCard = Math.floor(+Math.random * 52)
      let pickedSuit = Math.floor(pickedCard / 13)

      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13
      }
    }
  }
}

// this for callback
interface UIElement {
  addClickListener(onClick: (this: void, e: Event) => void): void
}

class Handler {
  type?: string
  onClickBad = (e: Event) => {
    this.type = e.type
  }
}

let h = new Handler()

let uiElement: UIElement = {
  addClickListener() {

  }
}

uiElement.addClickListener(h.onClickBad)