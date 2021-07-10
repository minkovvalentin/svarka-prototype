import { CardValue } from "../interfaces/Card";

export const CARD_SUITS = ["♠", "♣", "♥", "♦"];

export const CARD_VALUES: CardValue[] = [
  { value: "7", points: 7 },
  { value: "8", points: 8 },
  { value: "9", points: 9 },
  { value: "10", points: 10 },
  { value: "J", points: 10 },
  { value: "Q", points: 10 },
  { value: "K", points: 10 },
  { value: "A", points: 11 },
];
