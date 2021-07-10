import { CARD_SUITS, CARD_VALUES } from "../constants/deck";
import { CardInterface, DrawnCards } from "../interfaces/Card";
import { copyObject } from "./general";

const createDeck = (): CardInterface[] => {
  return CARD_SUITS.flatMap((suit) => {
    return CARD_VALUES.map((value) => {
      return { suit, value };
    });
  });
};

const shuffleDeck = (deck: CardInterface[]): CardInterface[] => {
  let shuffledDeck: CardInterface[] = copyObject(deck);
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const newIndex = Math.floor(Math.random() * (i + 1));
    const oldValue = shuffledDeck[newIndex];
    shuffledDeck[newIndex] = shuffledDeck[i];
    shuffledDeck[i] = oldValue;
  }
  return shuffledDeck;
};

function drawCards(deck: CardInterface[], players: number): DrawnCards[] {
  // Maximal 10 players
  if (players > 10) return [];

  let deckAfterDraw = copyObject(deck);
  let allDrawnCards: DrawnCards[] = [];
  // Create drawn cards arr for each player
  for (let i = 0; i < players; i++) {
    allDrawnCards.push({
      player: i + 1,
      cards: [],
    });
  }
  /* Draw three cards for each player  */
  for (let j = 0; j < 3; j++) {
    const drawnCards = [];
    // Draw a card for each player
    let leftToDraw = players;
    do {
      console.log("here");
      drawnCards.push(deckAfterDraw.shift());
      leftToDraw--;
    } while (leftToDraw > 0);

    // Add the card to each players drawn cards
    for (let i = 0; i < drawnCards.length; i++) {
      allDrawnCards[i].cards.push(drawnCards[i]);
    }
  }
  return allDrawnCards;
}

export { createDeck, shuffleDeck, drawCards };
