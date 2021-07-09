import { CARD_SUITS, CARD_VALUES } from "../constants/deck";
import { Card } from "../interfaces/Card";

const createDeck = (): Card[] => {
  return CARD_SUITS.flatMap((suit) => {
    return CARD_VALUES.map((value) => {
      return { suit, value };
    });
  });
};

const shuffleDeck = (deck: Card[]): Card[] => {
  let shuffledDeck = JSON.parse(JSON.stringify(deck));
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const newIndex = Math.floor(Math.random() * (i + 1));
    const oldValue = shuffledDeck[newIndex];
    shuffledDeck[newIndex] = shuffledDeck[i];
    shuffledDeck[i] = oldValue;
  }
  return shuffledDeck;
};

export { createDeck, shuffleDeck };
