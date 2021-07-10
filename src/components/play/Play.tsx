import { IonContent } from "@ionic/react";
import styles from "./Play.module.scss";
import { createDeck, drawCards, shuffleDeck } from "../../utils/deck";
import { useEffect, useState } from "react";
import { DrawnCards } from "../../interfaces/Card";
import Card from "../card/Card";
import Button from "../button/Button";

const Play: React.FC = () => {
  const [drawnCards, setDrawnCards] = useState<DrawnCards[]>([]);

  useEffect(() => {
    draw();
  }, []);

  const draw = () => {
    const deck = shuffleDeck(createDeck());
    const drawn = drawCards(deck, 10);
    setDrawnCards(drawn);
  };

  return (
    <IonContent>
      <div className={styles["players-cards-container"]}>
        <Button label="New draw" className={styles["button"]} onClick={draw} />
        {drawnCards.map((playersCards) => {
          return (
            <div
              key={JSON.stringify(playersCards)}
              className={styles["player-cards-container"]}
            >
              <p className="playerLabel"> Player: {playersCards.player}</p>
              <div className={styles["player-cards-row"]}>
                {playersCards.cards.map((card) => (
                  <Card key={JSON.stringify(card)} card={card} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </IonContent>
  );
};

export default Play;
