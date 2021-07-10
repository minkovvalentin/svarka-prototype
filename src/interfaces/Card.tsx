export interface CardInterface {
  suit: string;
  value: CardValue;
}

export interface CardValue {
  value:string;
  points: number; 
}

export interface DrawnCards {
  player: number;
  cards: CardInterface[];
}