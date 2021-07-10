import { useEffect, useState } from "react";
import { CardInterface } from "../../interfaces/Card";
import { createDeck, shuffleDeck } from "../../utils/deck";
import Button from "../button/Button";
import  Card from "../card/Card";
import styles from "./Deck.module.scss";

const Deck: React.FC = () => {
  const [deck, setDeck] = useState<CardInterface[]>([]);

  useEffect(() => {
    setDeck(shuffleDeck(createDeck()));
  }, []);

  const shuffle = () => {
    let shuffledDeck = shuffleDeck(deck);
    setDeck(shuffledDeck);
  };

  return (
    <div className={styles["container"]}>
      <p>
        Those are the cards used in Svara. There are many like it, but these are
        Svara's.
      </p>
      <div className={styles["button-container"]}>
        <Button
          onClick={shuffle}
          className={styles["button"]}
          label="Shuffle"
        />
      </div>
      <div className={styles["deck-container"]}>
        {deck.map((card) => {
          return <Card key={`${card.suit}-${card.value.value}`} card={card}/>
        })}
      </div>
    </div>
  );
};

export default Deck;
