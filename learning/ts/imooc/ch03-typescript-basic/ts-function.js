"use strict";
// restOfName
function buildName(firstName, ...restOfName) {
    console.log(">>restOfName", restOfName);
    return firstName;
}
buildName('a', 'b', 'c', 'd', 'e');
let deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    card: Array(52),
    createCardPicker: function () {
        return () => {
            let pickedCard = Math.floor(+Math.random * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: this.suits[pickedSuit],
                card: pickedCard % 13
            };
        };
    }
};
class Handler {
    constructor() {
        this.onClickBad = (e) => {
            this.type = e.type;
        };
    }
}
let h = new Handler();
let uiElement = {
    addClickListener() {
    }
};
uiElement.addClickListener(h.onClickBad);
