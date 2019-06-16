"use strict";
let suits = ['hearts', 'spades', 'clubs', 'diamonds'];
function pickCard(x) {
    if (Array.isArray(x)) {
        return 2;
    }
    else if (typeof x === 'number') {
        return {
            suit: 'hearts',
            card: 3
        };
    }
}
console.log(pickCard([{ suit: 'clubs', card: 2 }]));
console.log(pickCard(3));
