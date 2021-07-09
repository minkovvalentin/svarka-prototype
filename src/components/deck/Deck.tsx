import { useEffect, useState } from "react";
import { Card } from "../../interfaces/Card";
import { createDeck, shuffleDeck } from "../../utils/deck";
import Button from "../button/Button";
import styles from "./Deck.module.scss";

const Deck: React.FC = () => {
  const [deck, setDeck] = useState<Card[]>([]);

  useEffect(() => {
    setDeck(shuffleDeck(createDeck()));
  }, []);

  const shuffle = () => {
    let shuffledDeck = shuffleDeck(deck);
    setDeck(shuffledDeck);
  };

  const getCardColor = (suit: string) => {
    return suit === "♣" || suit === "♠" ? "black" : "red";
  };

  return (
    <div>
      <div className={styles["button-container"]}>
        <Button onClick={shuffle} className={styles["button"]}/>
      </div>
      <div className={styles["deck-container"]}>
        {deck.map((card) => {
          return (
            <div
              className={styles["card-container"]}
              key={`${card.suit}-${card.value}`}
            >
              <div
                className={`${styles["card"]} ${
                  styles[getCardColor(card.suit)]
                }`}
                data-value={`${card.suit} ${card.value}`}
              >
                {card.suit}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Deck;
